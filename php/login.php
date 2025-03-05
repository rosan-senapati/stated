<?php

include 'db_connect.php';
include 'function.php';

if(isset($_POST['login'])){
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    if(loginUser($email, $password)){
        echo "<script>alert('Login successful');</script>";
        header("location: ../index.html");
    }else{
        echo "<script>alert('Login failed');</script>";
    }
}
?>