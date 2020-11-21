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
 
error_reporting(E_ERROR);
$students = [];
$sql = "SELECT * FROM students";

if($result = mysqli_query($con,$sql))
{
    $cr=0;
    while($row = mysqli_fetch_assoc($result))
    {
        $students[$cr]['gid'] =$row['gid'];
        $students[$cr]['title'] =$row['title'];
        $students[$cr]['greetings'] =$row['greetings'];
        $cr++;

    }

    echo json_encode($students);
}
else{
    http_response_code(404);
}
?>