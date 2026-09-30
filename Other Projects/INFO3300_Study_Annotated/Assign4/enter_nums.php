<?php
//  Starts or resumes the session so this page can use $_SESSION values.
session_start();

//  Checks that required session data exists before trying to use it.
if( !isset($_SESSION['username']) || !isset($_SESSION['logged_in']) ){
    //  Redirects the browser to another page. This must happen before normal page output is sent.
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
        <!--  Starts the form. action= says which file receives the data; method= sends it using POST. -->
        <form action="questions.php" method="post">
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            Number 1 <input type="text" name="one" size="5">
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            Number 2 <input type="text" name="two" size="5">
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            Number 3 <input type="text" name="three" size="5">
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            Number 4 <input type="text" name="four" size="5">
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            Number 5 <input type="text" name="five" size="5">
            <input type="submit" value="Submit">
        </form>
    </div>

</body>
</html>