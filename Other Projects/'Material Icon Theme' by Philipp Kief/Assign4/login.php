<?php
session_start();

#Username: first
#Password: player

if( isset($_SESSION['username']) && isset($_SESSION['logged_in']) ){
    header('Location: enter_nums.php');
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
    $_SESSION['logged_in'] = TRUE;

    if($stay_logged_in != null){
        setcookie('username', 'first', strtotime('1+ year'), '/');
        setcookie('password', 'player', strtotime('1+ year'), '/');
    }

    header('Location:enter_nums.php');
}

?>