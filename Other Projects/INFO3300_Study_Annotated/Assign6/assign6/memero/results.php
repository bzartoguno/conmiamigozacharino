<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Results</title>
</head>
<body>
    <?php include('header.php'); ?>
    <div id="data_entry">
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <h1><?=$outcome_message ?></h1>       
    </div>
    <br>
    Your result has been recorded in your SESSION.
    <br> 
    <!-- TIP: href tells the browser which page to open when this link is clicked. -->
    <a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>