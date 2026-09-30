<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Dial a Fortune</title>
    </head>
    <body>
    by Dan McDonald
    <!-- TIP: Puts the previous value back into the form so the user does not have to retype it after an error. -->
    <h1><?php echo $relationships_fortune; ?></h1>
    <!-- TIP: Puts the previous value back into the form so the user does not have to retype it after an error. -->
    <h1><?php echo $money_fortune; ?></h1>
    <!-- TIP: Puts the previous value back into the form so the user does not have to retype it after an error. -->
    <h1><?php echo $fame_fortune; ?></h1>
    <h1>Lucky Number</h1>
    <?php 
    // TIP: A counted loop: repeats the block while the middle condition stays true.
    for($i=0; $i<= $lucky_number; $i++){
        // TIP: Outputs this value/text to the webpage or response.
        echo $i . ' ';
    }
    ?>
    <br><br>
    Your fortune has been recorded in your SESSION.
    <br><br>
    <!-- TIP: href tells the browser which page to open when this link is clicked. -->
    <a href="/assign6/index.php">Back to Carnival Home</a>
    </body>
</html>