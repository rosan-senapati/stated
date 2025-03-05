<?php

include 'db_connect.php';
include 'function.php';

if(isset($_POST['signup'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $type = $_POST['type'];
    
    if(registerUser($name, $password, $email, $type)){
        echo "<script>alert('Registration successful');</script>";
        header("location: ../loginSignup.html");
    }else{
        echo "<script>alert('Registration failed');</script>";
    }
}
        

?>