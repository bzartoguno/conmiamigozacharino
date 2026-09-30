<?php
//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$first_name = filter_input(INPUT_GET, 'first_name');
$last_name = filter_input(INPUT_GET, 'last_name');
$minor_name = filter_input(INPUT_GET, 'minor_name');
$minor_age = filter_input(INPUT_GET, 'minor_age');
$minor_birth_date = filter_input(INPUT_GET, 'minor_birth_date');
$street = filter_input(INPUT_GET, 'street');
$city = filter_input(INPUT_GET, 'city');
$state = filter_input(INPUT_GET, 'state');
$zip = filter_input(INPUT_GET, 'zip');
$email = filter_input(INPUT_GET, 'email');
$signature = filter_input(INPUT_GET, 'signature');
$authorize_play = filter_input(INPUT_GET, 'authorize_play');

//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$first_name_error = filter_input(INPUT_GET, 'first_name_error');
$last_name_error = filter_input(INPUT_GET, 'last_name_error');
$minor_name_error = filter_input(INPUT_GET, 'minor_name_error');
$minor_age_error = filter_input(INPUT_GET, 'minor_age_error');
$minor_birth_date_error = filter_input(INPUT_GET, 'minor_birth_date_error');
$street_error = filter_input(INPUT_GET, 'street_error');
$city_error = filter_input(INPUT_GET, 'city_error');
$state_error = filter_input(INPUT_GET, 'state_error');
$zip_error = filter_input(INPUT_GET, 'zip_error');
$email_error = filter_input(INPUT_GET, 'email_error');
$signature_error = filter_input(INPUT_GET, 'signature_error');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!--  Connects this page to the CSS file that controls its appearance. -->
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>carnival waiver</title>
</head>
<body>

<h1 id="head_waiver">ZJR (sorry I did this so early I wasn't thinking straight) - carnival waiver&nbsp;&nbsp;</h1>
<img src="ferris_wheel.jpg">

<div id="waiver">
    <!--  Starts the form. action= says which file receives the data; method= sends it using GET. -->
    <form action="results.php" method="get">

        guardian first name
        <!--  The name= value is the key PHP uses later with filter_input(). -->
        <input type="text" name="first_name" placeholder="first name" value="<?php echo $first_name; ?>">
        <br>
        <!--  Puts the previous value back into the form so the user does not have to retype it after an error. -->
        <span class="errors"><?php echo $first_name_error; ?></span>
        <br>

        guardian last name
        <!--  The name= value is the key PHP uses later with filter_input(). -->
        <input type="text" name="last_name" placeholder="last name" value="<?php echo $last_name; ?>">
        <br>
        <!--  Puts the previous value back into the form so the user does not have to retype it after an error. -->
        <span class="errors"><?php echo $last_name_error; ?></span>
        <br>

        minor's name
        <!--  The name= value is the key PHP uses later with filter_input(). -->
        <input type="text" name="minor_name" placeholder="minor's name" value="<?php echo $minor_name; ?>">
        <br>
        <!--  Puts the previous value back into the form so the user does not have to retype it after an error. -->
        <span class="errors"><?php echo $minor_name_error; ?></span>
        <br>

        minor's age
        <!--  The name= value is the key PHP uses later with filter_input(). -->
        <input type="text" name="minor_age" placeholder="age" size="3" value="<?php echo $minor_age; ?>">
        <br>
        <!--  Puts the previous value back into the form so the user does not have to retype it after an error. -->
        <span class="errors"><?php echo $minor_age_error; ?></span>
        <br>

        minor's birthdate
        <!--  The name= value is the key PHP uses later with filter_input(). -->
        <input type="text" name="minor_birth_date" placeholder="birth date" value="<?php echo $minor_birth_date; ?>">
        <br>
        <!--  Puts the previous value back into the form so the user does not have to retype it after an error. -->
        <span class="errors"><?php echo $minor_birth_date_error; ?></span>
        <br>

        street
        <!--  The name= value is the key PHP uses later with filter_input(). -->
        <input type="text" name="street" placeholder="street" value="<?php echo $street; ?>">
        <br>
        <!--  Puts the previous value back into the form so the user does not have to retype it after an error. -->
        <span class="errors"><?php echo $street_error; ?></span>
        <br>

        city
        <input type="text" name="city" placeholder="city" value="<?php echo $city; ?>">
        <br>
        <span class="errors"><?php echo $city_error; ?></span>
        <br>

        state
        <input type="text" name="state" placeholder="state" size="5" value="<?php echo $state; ?>">
        <br>
        <span class="errors"><?php echo $state_error; ?></span>
        <br>

        zip
        <input type="text" name="zip" placeholder="zip" size="5" value="<?php echo $zip; ?>">
        <br>
        <span class="errors"><?php echo $zip_error; ?></span>
        <br>

        guardian's email address
        <input type="email" name="email" placeholder="email" value="<?php echo $email; ?>">
        <br>        
        <span class="errors"><?php echo $email_error; ?></span>
        <br>

        please type your name in the text area
        <br>
        <textarea name="signature" cols="30" rows="3"><?php echo $signature; ?></textarea>
        <br>
        <span class="errors"><?php echo $signature_error; ?></span>
        <br>

        i agree to allow my child to play dial-a-fortune games

        <!--  Radio buttons sharing the same name belong to one group; the selected button sends its value. -->
        <input type="radio" name="authorize_play" value="true"
            <?php if ($authorize_play == "true") { echo "checked"; } ?>> yes

        <!--  Radio buttons sharing the same name belong to one group; the selected button sends its value. -->
        <input type="radio" name="authorize_play" value="false"
            <?php if ($authorize_play != "true") { echo "checked"; } ?>> no

        <br>
        <input type="submit" value="submit">

    </form>
</div>

</body>
</html>