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
        <!-- TIP: Starts the form. action= says which file receives the data; method= sends it using POST. -->
        <form action="index.php" method="post">
            <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
            <input type="hidden" name="action" value="questions">
            <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
            Number 1 <input type="text" name="one" size="5"><br>
            <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
            Number 2 <input type="text" name="two" size="5"><br>
            <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
            Number 3 <input type="text" name="three" size="5"><br>
            <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
            Number 4 <input type="text" name="four" size="5"><br>
            <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
            Number 5 <input type="text" name="five" size="5"><br>
            <input type="submit" value="Submit">
        </form>
    </div>
    <!-- TIP: href tells the browser which page to open when this link is clicked. -->
    <a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>