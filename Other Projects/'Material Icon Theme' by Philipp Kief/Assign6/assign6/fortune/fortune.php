<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Dial a Fortune</title>
    </head>
    <body>
    by Dan McDonald
    <h1><?php echo $relationships_fortune; ?></h1>
    <h1><?php echo $money_fortune; ?></h1>
    <h1><?php echo $fame_fortune; ?></h1>
    <h1>Lucky Number</h1>
    <?php 
    for($i=0; $i<= $lucky_number; $i++){
        echo $i . ' ';
    }
    ?>
    <br><br>
    Your fortune has been recorded in your SESSION.
    <br><br>
    <a href="/assign6/index.php">Back to Carnival Home</a>
    </body>
</html>