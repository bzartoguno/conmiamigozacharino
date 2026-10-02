<?php
session_start();
$user_question = $_SESSION['user_question'];
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
    <h1><?=$user_question?></h1>
    <h1><?=$eight_ball_answer?></h1>
    <a href="index.html"><button>Ask Again</button></a>
</body>
</html>