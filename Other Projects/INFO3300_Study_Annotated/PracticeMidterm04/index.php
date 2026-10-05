<?php
$error = filter_input(INPUT_GET, 'error');
$user_name = filter_input(INPUT_GET, 'user_name');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carnival Prize Predictor</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Carnival Prize Predictor</h1>
    <div id="page_content">
        <form action="prize.php" method="post">
            Your Name:
            <input type="text" name="user_name" value="<?=$user_name?>">
            <span class="errors"><?=$error?></span>
            <br><br>
            Choose your prize Type: <br>
            <input type="radio" name="prize_type" value="Food"> Food <br>
            <input type="radio" name="prize_type" value="Game"> Game <br>
            <input type="radio" name="prize_type" value="Mystery" checked> Mystery <br><br>
            <input type="submit" value="Predict My Prize">

        </form>
    </div>
</body>
</html>
