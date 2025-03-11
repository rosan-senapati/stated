<?php

include 'db_connect.php';
include 'function.php';
header('Content-Type: application/json');

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $type = $_POST['type'];
    
    if(registerUser($name, $password, $email, $type)){
        echo "true";
    }else{
        echo "false";
    }
}
        

?>