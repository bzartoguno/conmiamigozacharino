<?php
    require ('model/career.php');
    require('model/fortune.php');
    require('model/memory.php');
    require('model/user.php');
    //  Starts or resumes the session so this page can use $_SESSION values.
    session_start();
    //  Reads a value that was saved earlier in the session.
    $user = $_SESSION['user'];
    //  Reads a value that was saved earlier in the session.
    $memory = $_SESSION['memory'];
    //  Reads a value that was saved earlier in the session.
    $career = $_SESSION['career'];
    //  Reads a value that was saved earlier in the session.
    $fortune = $_SESSION['fortune'];


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Welcome User</h1>
    <?php echo $user; ?>
<h1>Memory Games</h1>
    <?php 
    //  Loops through every item in an array, one item at a time.
    foreach($memory as $mgame) {
        //  Outputs this value/text to the webpage or response.
        echo $mgame . '<br><br>';
    }
    ?>
    <h1>Career Games</h1>
    <?php 
    //  Loops through every item in an array, one item at a time.
    foreach($career as $cgame) {
        //  Outputs this value/text to the webpage or response.
        echo $cgame . '<br><br>';
    }?>
    <h1>Fortunes</h1>
    <?php 
    //  Loops through every item in an array, one item at a time.
    foreach($fortune as $fgame) {
        //  Outputs this value/text to the webpage or response.
        echo $fgame . '<br><br>';
    }?>
    <br>
    <!--  href tells the browser which page to open when this link is clicked. -->
    <a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>