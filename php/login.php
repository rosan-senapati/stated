<?php

include 'db_connect.php';
include 'function.php';
header('Content-Type: application/json');

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $email = $_POST['email'];
    $password = $_POST['password'];
    if(loginUser($email, $password)){
        echo "true";
    }else{
        echo "false";
    }
}
?>