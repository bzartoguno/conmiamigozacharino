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
        <form action="index.php" method="post">
            <input type="hidden" name="action" value="results">
            <?=$question_one?> <input type="text" name="user_answer_one" size="7"> <br>
            <?=$question_two?> <input type="text" name="user_answer_two" size="7"> <br>
            <input type="submit" value="Submit">
        </form>
    </div>
    <a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>