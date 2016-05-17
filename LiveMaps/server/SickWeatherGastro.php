<?php
  
  //date_default_timezone_set('America/New_York');
  date_default_timezone_set('UTC');

  function getApiUrl($queryParams)
  {
      parse_str($queryParams);
      $apiUrl  = "https://mobilesvc.sickweather.com/ws/v1.1/getMarkersInRadius.php?ids=24,32&limit=250&api_key=qi12Jfi4fG7B9enLfuMH";
      $url = $apiUrl."&lat=".$lat."&lon=".$lon."&radius=".$radius;
      return $url;
  }

  function processResponse($response)
  {
    echo $response;
    $results = array();
    $array = json_decode( $response, true );
    foreach($array as $item) { 
      $title = strtoupper($item['illness_word']);
      $desc = "";
      $date = convertDate($item['timestamp']);
      $img = "";
      $avatar = "";
      $lat = $item['lat'];
      $lon = $item['lon'];
      $results[] = array('title' => $title ,'desc' => $desc, 'date' => $date, 'img' => $img, 'lat' => $lat, 'lon' => $lon);
    }
    return $results;
  }

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

?>
