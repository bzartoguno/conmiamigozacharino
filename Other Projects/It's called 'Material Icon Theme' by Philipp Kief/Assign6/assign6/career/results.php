<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="styles.css">
        <title>Test results</title>
    </head>
    <body>
        <h1>Dan's Personalities and Professions</h1>
        <div id="results">
            <h3>Our proprietary algorithm has uncovered the following: <?=$outcome?></h3>
            <h3>
                Results:<br/>
                <span class="results_display">
                 <?php
                     foreach($professions as $key => $value){
                         echo $key . ' = ' .$value . '<br/>';
                     }
                 ?>
                 <br>
                 Your career outcome has been recorded in your SESSION.
                </span>
            </h3>
        </div>
        <br>
        <a href="/assign6/index.php">Back to Carnival Home</a>
    </body>
</html>