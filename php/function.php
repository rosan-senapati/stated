<?php

function registerUser($name, $password, $email,$type){
    global $conn;

    $sql = "INSERT INTO user (name, password, email, type) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $name, $password, $email, $type);
    $stmt->execute();
    if($stmt->affected_rows > 0){
        return true;
    }else{
        return false;
    }
}

function loginUser($email, $password){
    global $conn;

    $sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    if($result->num_rows == 1){
        return true;
    }else{
        return false;
    }
}
?>