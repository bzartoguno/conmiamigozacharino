<?php

// FIXED: The exam requires index.php to connect to the session.
session_start();

// ADDED: These three display variables are required to start as empty strings.
$user_guess_display = '';
$actual_direction_display = '';
$result = '';

// FIXED: Read the guesses from the SESSION after move.php redirects back here.
if(
    isset($_SESSION['user_guess']) &&
    isset($_SESSION['actual_direction'])
){
    $user_guess_display = 'Your guess was ' . $_SESSION['user_guess'] . '<br>';
    $actual_direction_display = 'The actual direction was ' . $_SESSION['actual_direction'] . '<br>';

    if($_SESSION['user_guess'] === $_SESSION['actual_direction']){
        $result = "<div id='result'>Way to go, you guessed it!</div>";
    }
    else{
        $result = "<div id='result'>Good try, do you want to try again?</div>";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Guess the robot's movement (left or right)</title>
</head>
<body>
    <h1>Guess the robot's movement (left or right)</h1>

    <!-- FIXED: The exam specifically requires method="get". -->
    <form id="page_content" action="move.php" method="get">

        <!-- FIXED: These are the three values the exam says to display above the textbox. -->
        <?=$user_guess_display?>
        <?=$actual_direction_display?>
        <?=$result?>

        <input type="text" name="user_guess" id="user_guess">
        <input type="submit" value="Guess">
    </form>
</body>
</html>
