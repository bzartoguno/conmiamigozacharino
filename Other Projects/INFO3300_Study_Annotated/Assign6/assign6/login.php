<?php
require 'model/user.php';
//  Starts or resumes the session so this page can use $_SESSION values.
session_start();
//  Checks that required session data exists before trying to use it.
if( isset($_SESSION['username']) ){
    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header('Location: index.php');
}
//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
$username = filter_input(INPUT_POST, 'username');
//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
$password = filter_input(INPUT_POST, 'password');
//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
$stay_logged_in = filter_input(INPUT_POST, 'stay_logged_in');
if($username == NULL || $password == NULL){
    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header("Location:index.php?errors=Missing login credentials");
} elseif($username != 'first' || $password != 'player'){
    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header("Location:index.php?errors=Incorrect username or password");
} else{
    //  Stores this value in the session so another PHP page can use it later.
    $_SESSION['username'] = 'first';
    //  Stores this value in the session so another PHP page can use it later.
    //  Creates an array, which stores a group of related values.
    $_SESSION['fortune'] = array();
    //  Stores this value in the session so another PHP page can use it later.
    //  Creates an array, which stores a group of related values.
    $_SESSION['memory'] = array();
    //  Stores this value in the session so another PHP page can use it later.
    //  Creates an array, which stores a group of related values.
    $_SESSION['career'] = array();
    //  Creates a new object from a class and sends these values into its constructor.
    //  Stores this value in the session so another PHP page can use it later.
    $_SESSION['user'] = new User('first', false);
    if($stay_logged_in != null){
        //  Stores a cookie in the browser so a value can still be available on a later visit.
        setcookie('username', 'first', strtotime('1+ year'), '/');
        //  Stores a cookie in the browser so a value can still be available on a later visit.
        setcookie('password', 'player', strtotime('1+year'), '/');
    }
    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header('Location:index.php');
}