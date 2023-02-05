<?php
$http_origin = $_SERVER['HTTP_ORIGIN'];

if ($http_origin == "https://moustaphacamara.fr/" || $http_origin == "https://moustaphacamara.com" || $http_origin == "http://moustaphacamara.fr" || $http_origin == "https://mc-manga.netlify.app") {
    header("Access-Control-Allow-Origin: $http_origin");
    header("Access-Control-Allow-Headers: *");
}
header("content-type: application/json");
require "products.json";
