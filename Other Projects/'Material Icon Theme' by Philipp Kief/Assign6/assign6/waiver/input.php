<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
    <title>Carnival Waiver</title>
</head>
<body>
<img id="wheel" src="ferris_wheel.jpg" alt="Ferris Wheel"><h1 id="head_waiver">Carnival Waiver&nbsp;&nbsp;&nbsp;</h1>
   <div id="waiver">
    <form method="get" action="index.php">
        <input type="hidden" name="action" value="result">
        Guardian first name <input name="first_name" type="text" placeholder="first name" value="<?=$first_name?>"><br/>
        <?=$first_name_error;?>
        Guardian last name <input name="last_name" type="text" placeholder="last name" value="<?=$last_name?>"><br/>
        <?=$last_name_error;?>
        Minor's name <input name="minor_name" type="text" placeholder="minor's name" value="<?=$minor_name?>"><br/>
        <?=$minor_name_error;?>
        Minor's age <input name="minor_age" type="text" placeholder="age" size="3" value="<?=$minor_age?>"><br/>
        <?=$minor_age_error;?>
        Minor's birth date <input name="minor_birth_date" type="text" placeholder="minor birth date" size="8" value="<?=$minor_birth_date?>"> <br/>
        <?=$minor_birth_date_error;?>
        Street:<input name="street" type="text" placeholder="street" size="30" value="<?=$street?>"><br/>
        <?=$street_error;?>
        City:<input name="city" type="text" placeholder="City" value="<?=$city?>">
        <?=$city_error;?>
        State:<input name="state" type="text" placeholder="state" size="2" value="<?=$state?>">
        <?=$state_error;?>
        Zip:<input name="zip" type="text" placeholder="zip" size="5" value="<?=$zip?>"><br/>
        <?=$zip_error;?>
        Guardian's email Address:<input name="email" type="email" placeholder="email" size="25" value="<?=$email?>"> <br/>
        <?=$email_error;?>
        Please type your name in the text area<br/>
        <?=$signature_error;?>
        <textarea name="signature" id="" cols="50" rows="3"><?=$signature?></textarea><br/>
        I agree to allow my child to play Dial-a-Fortune games
        <input type="radio" name="authorize_play" value="true" id="">Yes
        <input type="radio" name="authorize_play" value="false" id="" checked>No<br/>
        <input type="submit" value="submit">
    </form>
    </div>
    <br>
    <a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>