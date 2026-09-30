<?php
//  Starts or resumes the session so this page can use $_SESSION values.
session_start();

//  Checks that required session data exists before trying to use it.
if( !isset($_SESSION['username']) || !isset($_SESSION['logged_in']) ){
    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header('Location: index.php?errors=You must login to play the game');
}

//  Checks that required session data exists before trying to use it.
if( !isset($_SESSION['memero_answer_one']) || !isset($_SESSION['memero_answer_two']) ){
    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header('Location: index.php?errors=Please start at the beginning');
}

//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
$user_answer_one = filter_input(INPUT_POST, 'user_answer_one');
//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
$user_answer_two = filter_input(INPUT_POST, 'user_answer_two');

//  Reads a value that was saved earlier in the session.
$memero_answer_one = $_SESSION['memero_answer_one'];
//  Reads a value that was saved earlier in the session.
$memero_answer_two = $_SESSION['memero_answer_two'];

$outcome_message = '';

if($user_answer_one == $memero_answer_one && $user_answer_two == $memero_answer_two){
    $outcome_message = 'You are a genius!';
} else{
    $outcome_message = 'Maybe you could use smaller numbers';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Results</title>
</head>
<body>

    <?php include('header.php'); ?>

    <div id="data_entry">
        <!--  <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <h1><?=$outcome_message?></h1>
    </div>

</body>
</html>