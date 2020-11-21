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
//print json_encode($ret);


// print_r($_POST);



 $postdata = file_get_contents("php://input");

 //if($_SERVER['REQUEST_METHOD'] == "POST")
 if(isset($postdata) && !empty($postdata))
 {
    $request = json_decode($postdata);
    
    $title = $request->title;
    $greetings = $request->greetings;

     //print_r($request);

   //   $title =$_POST['title'];
   //   $greetings = $_POST['greetings'];

    $sql = "INSERT INTO `students`(`title`,`greetings`) VALUES('{$title}','{$greetings}')";
    
    if (mysqli_query($con,$sql))
    {
        http_response_code(201);

     }
     else{
        http_response_code(422);
     }
 }
 ?>