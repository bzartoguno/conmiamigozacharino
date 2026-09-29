<?php
session_start();

if( !isset($_SESSION['username']) || !isset($_SESSION['logged_in']) ){
    header('Location: index.php?errors=You must login to play the game');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enter Numbers</title>
</head>
<body>

    <?php include('header.php'); ?>

    <h3>Please enter 5 numbers!</h3>

    <div id="data_entry">
        <form action="questions.php" method="post">
            Number 1 <input type="text" name="one" size="5">
            Number 2 <input type="text" name="two" size="5">
            Number 3 <input type="text" name="three" size="5">
            Number 4 <input type="text" name="four" size="5">
            Number 5 <input type="text" name="five" size="5">
            <input type="submit" value="Submit">
        </form>
    </div>

</body>
</html>