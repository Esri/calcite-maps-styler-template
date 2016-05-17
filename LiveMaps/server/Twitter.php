<?php

  require_once('TwitterAPIExchange.php');

  //date_default_timezone_set('America/New_York');
  date_default_timezone_set('UTC');

  function convertDate($time)
  {   
      $format = 'D M j H:i:s P Y';
      $date = DateTime::createFromFormat($format, $time);
      return date_timestamp_get($date);
  }

  function getImageUrl($entities)
  {  
      if (is_null($entities['media'])) {
        return "";
      } else {
        $media = $entities['media'];    
        $imgUrl = "";
        foreach($media as $item) { 
          if ($item['type'] === "photo") {
            $imgUrl = $item['media_url'];
          }
        }
        return $imgUrl;
      }
  }

  /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
  $settings = array(
      'oauth_access_token' => "28577897-eNAPGH9HHH4XRTyWJCTh7hC6hPuQk7tcY61HRijum",
      'oauth_access_token_secret' => "lcE6T27sLVonBcva6kFh4dlV2ZYrBQVW0eUPKaXr1gLrv",
      'consumer_key' => "a3aUPWcg9As1HI0s85u6RTA0f",
      'consumer_secret' => "vC7upN5eNyVoGTaJYOaiGt73eZl7mq8tZKtxPszeDwxMifc8Ac"
  );

  $url = 'https://api.twitter.com/1.1/search/tweets.json';
  $loc = '';
  if ($lat && $lon && $radius) {
    $loc = '&geocode='.$lat.','.$lon.','.$radius.'mi';
  }
  $getfield = '?count=100&q='.$keyword.$loc;
  $requestMethod = 'GET';
  $twitter = new TwitterAPIExchange($settings);
  $response = $twitter->setGetfield($getfield)
               ->buildOauth($url, $requestMethod)
               ->performRequest();

  //echo $response;

  $respObj = json_decode( $response, true );

  $results = array();
  $array = $respObj['statuses'];
  foreach($array as $item) { 
    $user = $item['user'];
    $title = $user['name'];
    $desc = $item['text'];
    $date = convertDate($item['created_at']);
    $img = getImageUrl($item['entities']);
    $avatar = $user['profile_image_url'];
    $coords = $item['coordinates'];
    if (is_null($coords)) {
      $lat = NULL;
      $lon = NULL;
    } else {
      $lat = $coords[1];
      $lon = $coords[0];
    }
    $results[] = array('title' => $title ,'desc' => $desc, 'date' => $date, 'img' => $img, 'lat' => $lat, 'lon' => $lon, 'avatar' => $avatar);
  }

  //set the proper Content-Type
  header("Status: ".$code, true, $code);
  header("Content-Type: ".$type);
  
  echo json_encode($results);

?>