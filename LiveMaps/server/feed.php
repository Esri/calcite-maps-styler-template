<?php
  /***************************************************************************
   * USAGE
   * [1] http://<this-url>?<arguments>
   * 
   * REQUIREMENTS
   *  - cURL extension for PHP must be installed and loaded. To load it, 
   *    add the following lines to your php.ini file:
   *     extension_dir = "<your-php-install-location>/ext"
   *     extension = php_curl.dll
   *     
   *  - Turn OFF magic quotes for incoming GET/POST data: add/modify the
   *    following line to your php.ini file:
   *     magic_quotes_gpc = Off 
   * 
   ***************************************************************************/

  /***************************************************************************
   * Match Params
   */
  $mustMatch = false;
  $matchList = array('/LiveMaps/', 'localhost');


  /***************************************************************************
   * Params 
   */
  $params = $_SERVER['QUERY_STRING'];
  if (!$params) {
    header('Status: 400', true, 400); // Bad Request
    echo 'Query parameters not specified! <br/> Usage: <br/> http://&lt;this-url&gt;?&lt;params&gt;';
    return;
  }
  $parts = preg_split("/\?/", $params);
  $queryParams = $parts[0];
  parse_str($queryParams);

  /***************************************************************************
   * Auth
   */
  $auth = 0;

  // check if referrer is valid
  $referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';

  // is app allowed
  for ($i = 0; $i < count($matchList); $i++) {
    $name = $matchList[$i];
    $pos = strpos($referer, $name);
    if ($pos !== false) {
      $auth = 1;
      break;
    }
  }

  // is widget allowed
  // $pos = strpos($queryParams, 'node=widget_LiveMaps_');
  // if ($pos !== false) {
  //     $auth = 1;
  // }

  // check if the referrer matches any of the allowed URLs
  if ($mustMatch) {
    //$pos = is_app_allowed($referer);
    if ($auth === 0) {
      header('Status: 400', true, 400); // Forbidden
      //echo 'Application is not authorized! <br/> Consult the documentation to authorize this application.' . $auth;
      echo $auth;
      return;
    }
  } else {
    $auth = 1;
  }

  /***************************************************************************
   * Feed
   */

   if($feed === "flu") {
    include 'SickWeatherFlu.php';
   } elseif ($feed === "gastro"){
    include 'SickWeatherGastro.php';
   } elseif ($feed === "twitter"){
    include 'Twitter.php';
   } elseif ($feed === "flickr"){
    include 'Flickr.php';
   } else {
    header('Status: 400', true, 400);
    echo 'FEED NOT SPECIFIED';
   }

  $url = getApiUrl($queryParams);
  echo $url;

   /***************************************************************************
   * Curl
   */
  
  // check if the curl extension is loaded
  if (!extension_loaded("curl")) {
    header('Status: 500', true, 500);
    echo 'cURL extension for PHP is not loaded! <br/> Add the following lines to your php.ini file: <br/> extension_dir = &quot;&lt;your-php-install-location&gt;/ext&quot; <br/> extension = php_curl.dll';
    return;
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

  $results = processResponse($response);

  // set the proper Content-Type
  header("Status: ".$code, true, $code);
  header("Content-Type: ".$type);
  echo json_encode($results);
  

?>
