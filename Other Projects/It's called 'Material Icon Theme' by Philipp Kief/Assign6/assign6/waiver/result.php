    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="styles.css">
        <title>Carinval Games Waiver</title>
    </head>
    <body>
        <h1 id="head_waiver">Carinival Waiver Result&nbsp;&nbsp;</h1><img src="ferris_wheel.jpg" alt="Ferris Wheel">
        <div id="result">
            <?php 
                if($authorize_play){
                    echo "Congratulations your minor ($minor_name) is cleared to play";
                } else{
                    echo 'Sorry, your permission is required  :(';
                }
            ?>
        </div>
        <br>
        Your waiver result has been recorded in your SESSION.
        <br><br>
        <a href="/assign6/index.php">Back to Carnival Home</a>
    </body>
    </html>
