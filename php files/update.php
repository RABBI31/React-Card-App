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

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
      
   $request = json_decode($postdata);
   

    $id =$_GET[ 'id' ];
    $title = $request->title;
    $greetings = $request->greetings;

    $sql ="UPDATE `students` SET `title` = '$title',`greetings` = '$greetings' WHERE `gid` ='{$id}' LIMIT 1";

    if (mysqli_query($con,$sql))
    {
        http_response_code(204);
        

     }
    else
    {
        return http_response_code(422);
        
     }
 }
 ?>

