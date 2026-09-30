<?php
//  Starts or resumes the session so this page can use $_SESSION values.
session_start();
//  Reads a value that was saved earlier in the session.
$user_question = $_SESSION['user_question'];
//  Reads a value that was saved earlier in the session.
$eight_ball_answer = $_SESSION['eight_ball_answer'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eight Ball Responds</title>
    
</head>
<body>
    <!--  <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
    <h1><?=$user_question?></h1>
    <!--  <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
    <h1><?=$eight_ball_answer?></h1>
    <!--  href tells the browser which page to open when this link is clicked. -->
    <a href="index.html"><button>Ask Again</button></a>
</body>
</html>