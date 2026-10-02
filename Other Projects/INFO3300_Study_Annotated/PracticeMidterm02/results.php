<?php

session_start();

if(
    !isset($_SESSION['name']) ||
    !isset($_SESSION['adventure_type']) ||
    !isset($_SESSION['adventure'])
){
    header('Location: index.html');
}

$name = $_SESSION['name'];
$adventure_type = $_SESSION['adventure_type'];
$adventure = $_SESSION['adventure'];

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Adventure Results</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <h1><?=$name?>'s Adventure</h1>

    <div id="page_content">

        <h3>
            Adventure Type: <?=$adventure_type?>
        </h3>

        <h2>
            <?=$adventure?>
        </h2>

        <a href="index.html">
            <button>Go Again</button>
        </a>

    </div>

</body>

</html>