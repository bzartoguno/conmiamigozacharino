<?php

//  results.php needs the same session so it can read what process.php saved.
session_start();


//  Protect this page. If somebody skips the form and comes directly here,
// send them back to the beginning.
if(
    !isset($_SESSION['user_name']) ||
    !isset($_SESSION['activity_type']) ||
    !isset($_SESSION['activity']) ||
    !isset($_SESSION['scores'])
){
    header('Location: index.php');
    exit();
}


//  Move the session values into shorter variables so they are easier to use below.
$user_name = $_SESSION['user_name'];
$activity_type = $_SESSION['activity_type'];
$activity = $_SESSION['activity'];
$scores = $_SESSION['scores'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weekend Activity Results</title>

    <!--  Use the same CSS file so both pages have the same look. -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!--  The short PHP echo form prints a variable directly inside the HTML. -->
    <h1><?=$user_name?>'s Weekend Recommendation</h1>

    <div id="page_content">

        <h2>Type: <?=ucfirst($activity_type)?></h2>

        <h2><?=$activity?></h2>

        <h3>Scores</h3>

        <p>Adventure: <?=$scores['adventure']?></p>
        <p>Relaxing: <?=$scores['relaxing']?></p>
        <p>Social: <?=$scores['social']?></p>

        <!--  href tells the browser where to go when this link is clicked. -->
        <a href="index.php">Try Again</a>

    </div>

</body>
</html>
