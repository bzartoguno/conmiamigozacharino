<?php
//  Starts or resumes the session so this page can use $_SESSION values.
session_start();

#Username: first
#Password: player

//  Checks that required session data exists before trying to use it.
if( isset($_SESSION['username']) && isset($_SESSION['logged_in']) ){
    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header('Location: enter_nums.php');
}

//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');
$stay_logged_in = filter_input(INPUT_POST, 'stay_logged_in');

if($username == NULL || $password == NULL){
    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header("Location:index.php?errors=Missing login credentials");
} elseif($username != 'first' || $password != 'player'){
    header("Location:index.php?errors=Incorrect username or password");
} else{
    //  Stores this value in the session so another PHP page can use it later.
    $_SESSION['username'] = 'first';
    $_SESSION['logged_in'] = TRUE;

    if($stay_logged_in != null){
        //  Stores a cookie in the browser so a value can still be available on a later visit.
        setcookie('username', 'first', strtotime('1+ year'), '/');
        setcookie('password', 'player', strtotime('1+ year'), '/');
    }

    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header('Location:enter_nums.php');
}

?>