<?php
require('prize_class.php');
session_start();
if(!isset($_SESSION['prize_result'])){

    header('Location: index.php');
    exit();
}
$prize_result = $_SESSION['prize_result'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Carnival Prize Result</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Carnival Prize Result</h1>
    <div id="page_content">
        <h2><?=$prize_result?></h2>
        <a href="index.php">
            <button>Play Again</button>
        </a>
    </div>
</body>
</html>