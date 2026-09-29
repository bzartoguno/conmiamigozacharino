<?php
require 'model/user.php';
session_start();
if( isset($_SESSION['username']) ){
    header('Location: index.php');
}
$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');
$stay_logged_in = filter_input(INPUT_POST, 'stay_logged_in');
if($username == NULL || $password == NULL){
    header("Location:index.php?errors=Missing login credentials");
} elseif($username != 'first' || $password != 'player'){
    header("Location:index.php?errors=Incorrect username or password");
} else{
    $_SESSION['username'] = 'first';
    $_SESSION['fortune'] = array();
    $_SESSION['memory'] = array();
    $_SESSION['career'] = array();
    $_SESSION['user'] = new User('first', false);
    if($stay_logged_in != null){
        setcookie('username', 'first', strtotime('1+ year'), '/');
        setcookie('password', 'player', strtotime('1+year'), '/');
    }
    header('Location:index.php');
}