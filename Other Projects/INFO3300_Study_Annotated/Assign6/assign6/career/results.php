<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <!-- TIP: Connects this page to the CSS file that controls its appearance. -->
        <link rel="stylesheet" href="styles.css">
        <title>Test results</title>
    </head>
    <body>
        <h1>Dan's Personalities and Professions</h1>
        <div id="results">
            <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
            <h3>Our proprietary algorithm has uncovered the following: <?=$outcome?></h3>
            <h3>
                Results:<br/>
                <span class="results_display">
                 <?php
                     // TIP: Loops through every item in an array, one item at a time.
                     foreach($professions as $key => $value){
                         // TIP: Outputs this value/text to the webpage or response.
                         echo $key . ' = ' .$value . '<br/>';
                     }
                 ?>
                 <br>
                 Your career outcome has been recorded in your SESSION.
                </span>
            </h3>
        </div>
        <br>
        <!-- TIP: href tells the browser which page to open when this link is clicked. -->
        <a href="/assign6/index.php">Back to Carnival Home</a>
    </body>
</html>