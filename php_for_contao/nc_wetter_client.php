<?php
//Installing all variables
$domain = "https://www.bellevue-walchsee.at/";
$nctoken = "s4IiJmsxLZwMoF8yL9G32Stq21DmEdKpE28aqruFCiVUlIPFC6Mb8mGUT006XSlWp0hc3jEs9ZdOOHQm62dC";

$days = 4; //For how many day make the forecast

$daytimes = array(   
    // "night" => 2,
    "morning"=> 7, 
    "noon"=> 12, 
    "afternoon"=> 16,
    "evening"=> 22    
);



//POST - reuest - CURL option
$request = curl_init();

curl_setopt($request, CURLOPT_URL,"https://www.netcontact.at/API/nc_wetter_server.php");
curl_setopt($request, CURLOPT_POST, 1);
curl_setopt($request, CURLOPT_POSTFIELDS,
        "domain=".$domain."&nctoken=".$nctoken);

// catch the response
curl_setopt($request, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($request);

curl_close ($request);

if ($response == "exit") {
    echo "Something ist wrong. Contact info@nc-werbung.at";
    exit();
}

$data = json_decode($response);

// Getting path
$path = $data["0"];

// Getting weather forecast data
$forecast_data = json_decode($data["1"], true);

// Getting weather codes
$weather_codes = json_decode($data["2"], true);

// Getting language pack
$language_info = json_decode($data["3"], true);

?>
<!-- Load base css from server -> link rel -->

<link rel="stylesheet" href="https://www.netcontact.at/API/Weather/weather-font/css/weather-icons.min.css">
<link rel="stylesheet" href="https://www.netcontact.at/API/Weather/styles.css">