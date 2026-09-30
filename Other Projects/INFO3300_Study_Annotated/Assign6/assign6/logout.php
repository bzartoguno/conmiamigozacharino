<?php
//  Starts or resumes the session so this page can use $_SESSION values.
session_start();
//  Sets the cookie expiration in the past, which tells the browser to delete that cookie.
setcookie('username','first',strtotime('-1 year'),'/');
//  Sets the cookie expiration in the past, which tells the browser to delete that cookie.
setcookie('password','player',strtotime('-1 year'),'/');
//  Ends the current session, which is useful when logging the user out.
session_destroy();
//  Redirects the browser to another page. This must happen before normal page output is sent.
header('location:index.php');
?>