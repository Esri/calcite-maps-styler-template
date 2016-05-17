<?php 

  $url = "https://mobilesvc.sickweather.com/ws/v1.1/getMarkersInRadius.php?ids=2,4,1,15,33,7&limit=250&api_key=qi12Jfi4fG7B9enLfuMH&lat=37.75857798840962&lon=-122.43169999999792&radius=9.5";
  
  // open the curl session
  $session = curl_init();
  
  // set the appropriate options for this request
  $options = array(
    CURLOPT_URL => $url
  );
  
  curl_setopt_array($session, $options);
  
  // make the call

  $code = curl_getinfo($session, CURLINFO_HTTP_CODE);
  $type = curl_getinfo($session, CURLINFO_CONTENT_TYPE);
  $response = curl_exec($session);
  curl_close($session);

  echo $code;
  echo $type;
  echo $response;     
?>