<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- TIP: Connects this page to the CSS file that controls its appearance. -->
    <link rel="stylesheet" href="styles.css">
    <title>Carnival Waiver</title>
</head>
<body>
<img id="wheel" src="ferris_wheel.jpg" alt="Ferris Wheel"><h1 id="head_waiver">Carnival Waiver&nbsp;&nbsp;&nbsp;</h1>
   <div id="waiver">
    <!-- TIP: Starts the form. action= says which file receives the data; method= sends it using GET. -->
    <form method="get" action="index.php">
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        <input type="hidden" name="action" value="result">
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        Guardian first name <input name="first_name" type="text" placeholder="first name" value="<?=$first_name?>"><br/>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$first_name_error;?>
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        Guardian last name <input name="last_name" type="text" placeholder="last name" value="<?=$last_name?>"><br/>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$last_name_error;?>
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        Minor's name <input name="minor_name" type="text" placeholder="minor's name" value="<?=$minor_name?>"><br/>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$minor_name_error;?>
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        Minor's age <input name="minor_age" type="text" placeholder="age" size="3" value="<?=$minor_age?>"><br/>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$minor_age_error;?>
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        Minor's birth date <input name="minor_birth_date" type="text" placeholder="minor birth date" size="8" value="<?=$minor_birth_date?>"> <br/>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$minor_birth_date_error;?>
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        Street:<input name="street" type="text" placeholder="street" size="30" value="<?=$street?>"><br/>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$street_error;?>
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        City:<input name="city" type="text" placeholder="City" value="<?=$city?>">
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$city_error;?>
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        State:<input name="state" type="text" placeholder="state" size="2" value="<?=$state?>">
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$state_error;?>
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        Zip:<input name="zip" type="text" placeholder="zip" size="5" value="<?=$zip?>"><br/>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$zip_error;?>
        <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
        Guardian's email Address:<input name="email" type="email" placeholder="email" size="25" value="<?=$email?>"> <br/>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$email_error;?>
        Please type your name in the text area<br/>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <?=$signature_error;?>
        <!-- TIP: <?= ... ?> is PHP's short form of echo; it prints a value inside the HTML. -->
        <textarea name="signature" id="" cols="50" rows="3"><?=$signature?></textarea><br/>
        I agree to allow my child to play Dial-a-Fortune games
        <!-- TIP: Radio buttons sharing the same name belong to one group; the selected button sends its value. -->
        <input type="radio" name="authorize_play" value="true" id="">Yes
        <!-- TIP: Radio buttons sharing the same name belong to one group; the selected button sends its value. -->
        <input type="radio" name="authorize_play" value="false" id="" checked>No<br/>
        <input type="submit" value="submit">
    </form>
    </div>
    <br>
    <!-- TIP: href tells the browser which page to open when this link is clicked. -->
    <a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>