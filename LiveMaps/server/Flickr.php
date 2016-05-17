<?php
  
  //date_default_timezone_set('America/New_York');
  date_default_timezone_set('UTC');

  function convertDate($time)
  {     
      $format = 'm/d/Y H:i:s A'; 
      $time = str_replace('\/', '/', $time);
      $is_pm  = (stripos($time, 'PM') !== false);
      $time   = str_replace(array('AM', 'PM'), '', $time);
      $format = str_replace('A', '', $format);
      $date   = DateTime::createFromFormat(trim($format), trim($time));
      if ($is_pm)
      {
          $date->modify('+12 hours');
      }
      return date_timestamp_get($date);
  }


  /***************************************************************************
   * API
   */
  $url  = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=219a9f27d4932420b543a082772f699c&has_geo=1&extras=geo&per_page=250&has_geo=1&format=json&nojsoncallback=1";
  $url = $url.'&tags='.$keyword;
  
  if($bbox) {
    $url = $url."&bbox=".$bbox;
  } else {
    if ($lat && $lon && $radius) {
      $lurl = $url.'&lat='.$lat.'&lon='.$lon.'&radius=20'.'&radius_units=mi';
    } 
  }
  
  // open the curl session
  $session = curl_init();
  
  // set the appropriate options for this request
  $options = array(
    CURLOPT_URL => $url,
    CURLOPT_HEADER => false,
    CURLOPT_HTTPHEADER => array(
      'Content-Type: ' . $_SERVER['CONTENT_TYPE'],
      'Referer: ' . $_SERVER['HTTP_REFERER']
    ),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true
  );
  
  // put the POST data in the request body
  $postData = file_get_contents("php://input");
  if (strlen($postData) > 0) {
    $options[CURLOPT_POST] = true;
    $options[CURLOPT_POSTFIELDS] = $postData;
  }
  curl_setopt_array($session, $options);
  
  // make the call
  $response = curl_exec($session);
  $code = curl_getinfo($session, CURLINFO_HTTP_CODE);
  $type = curl_getinfo($session, CURLINFO_CONTENT_TYPE);
  curl_close($session);

  //echo $response;

  $respObj = json_decode( $response, true );

  $results = array();
  $array =  $respObj['photos']['photo'];
  foreach($array as $item) { 
    $title = $item['title'];
    $desc = "";
    $date = NULL;
    $img = "https://farm".$item['farm'].".staticflickr.com/".$item['server']."/".$item['id']."_".$item['secret']."_"."m.jpg";
    $avatar = "";
    $lat = $item['latitude'];
    $lon = $item['longitude'];
    $results[] = array('title' => $title ,'desc' => $desc, 'date' => $date, 'img' => $img, 'lat' => $lat, 'lon' => $lon);
  }

  // set the proper Content-Type
  header("Status: ".$code, true, $code);
  header("Content-Type: ".$type);
  
  echo json_encode($results);

?>
