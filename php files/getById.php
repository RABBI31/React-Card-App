<?php
require 'connect.php';
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
 }
 
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');
 
 $ret = [
    'result' => 'OK',
 ];
$id = $_GET['id'];

$sql = "SELECT * FROM `students` WHERE `gid` = '{$id}' LIMIT 1";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);

echo $json = json_encode($row);

exit;