<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include('header.php'); ?>
    <div id="data_entry">
        <!-- TIP: Starts the form. action= says which file receives the data; method= sends it using POST. -->
        <form action="index.php" method="post">
            <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
            <input type="hidden" name="action" value="results">
            <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
            <?=$question_one?> <input type="text" name="user_answer_one" size="7"> <br>
            <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
            <?=$question_two?> <input type="text" name="user_answer_two" size="7"> <br>
            <input type="submit" value="Submit">
        </form>
    </div>
    <!-- TIP: href tells the browser which page to open when this link is clicked. -->
    <a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>