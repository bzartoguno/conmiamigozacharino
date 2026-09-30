<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enter Numbers</title>
</head>
<body>
    <?php include('header.php'); ?>
    <h3>Please enter 5 numbers</h3>
    <div id="data_entry">
        <form action="index.php" method="post">
            <input type="hidden" name="action" value="questions">
            Number 1 <input type="text" name="one" size="5"><br>
            Number 2 <input type="text" name="two" size="5"><br>
            Number 3 <input type="text" name="three" size="5"><br>
            Number 4 <input type="text" name="four" size="5"><br>
            Number 5 <input type="text" name="five" size="5"><br>
            <input type="submit" value="Submit">
        </form>
    </div>
    <a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>