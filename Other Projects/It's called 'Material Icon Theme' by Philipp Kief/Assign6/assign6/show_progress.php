<?php
    require ('model/career.php');
    require('model/fortune.php');
    require('model/memory.php');
    require('model/user.php');
    session_start();
    $user = $_SESSION['user'];
    $memory = $_SESSION['memory'];
    $career = $_SESSION['career'];
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
    foreach($memory as $mgame) {
        echo $mgame . '<br><br>';
    }
    ?>
    <h1>Career Games</h1>
    <?php 
    foreach($career as $cgame) {
        echo $cgame . '<br><br>';
    }?>
    <h1>Fortunes</h1>
    <?php 
    foreach($fortune as $fgame) {
        echo $fgame . '<br><br>';
    }?>
    <br>
    <a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>