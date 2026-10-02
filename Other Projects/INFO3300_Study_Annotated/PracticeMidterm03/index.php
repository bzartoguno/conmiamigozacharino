<?php
//  These read values from the URL after process.php sends us back because of an error.
// We use them to show the error and refill the form so the user does not lose everything.
$user_name = filter_input(INPUT_GET, 'user_name');
$environment = filter_input(INPUT_GET, 'environment');
$interests = filter_input(INPUT_GET, 'interests', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);
$energy_level = filter_input(INPUT_GET, 'energy');

$user_name_error = filter_input(INPUT_GET, 'user_name_error');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weekend Activity Picker</title>
    <!--  This connects the page to the CSS file. -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Weekend Activity Picker</h1>

    <div id="page_content">

        <!--  POST sends the form values to process.php without putting them in the URL. -->
        <form method="post" action="process.php">

            <label for="user_name">Your Name:</label>
            <!--  name="user_name" must match filter_input(..., 'user_name') in process.php. -->
            <input
                type="text"
                id="user_name"
                name="user_name"
                value="<?php echo $user_name; ?>"
            >

            <!--  If process.php finds a problem with the name, the message appears here. -->
            <span class="errors"><?php echo $user_name_error; ?></span>
            <br><br>
            <p>Where would you rather spend the day?</p>

            <!--  Radio buttons use the same name so only one choice can be selected. -->
            <input type="radio" name="environment" value="outdoors"
                <?php if($environment == 'outdoors'){ echo 'checked'; } ?>>Outdoors
            <input type="radio" name="environment" value="indoors"
                <?php if($environment == 'indoors'){ echo 'checked'; } ?>>Indoors
            <input type="radio" name="environment" value="either"
                <?php if($environment == 'either'){ echo 'checked'; } ?>>Either
            <br><br>
            <p>Select all activities you enjoy:</p>

            <!--  The [] after interests tells PHP that more than one checkbox value can be sent. -->
            <input type="checkbox" name="interests[]" value="hiking"
                <?php if(!is_null($interests) && in_array('hiking', $interests)){ echo 'checked'; } ?>>Hiking<br>
            <input type="checkbox" name="interests[]" value="movies"
                <?php if(!is_null($interests) && in_array('movies', $interests)){ echo 'checked'; } ?>>Movies<br>
            <input type="checkbox" name="interests[]" value="games"
                <?php if(!is_null($interests) && in_array('games', $interests)){ echo 'checked'; } ?>>Games<br>
            <input type="checkbox" name="interests[]" value="food"
                <?php if(!is_null($interests) && in_array('food', $interests)){ echo 'checked'; } ?>>Food<br>
            <input type="checkbox" name="interests[]" value="sports"
                <?php if(!is_null($interests) && in_array('sports', $interests)){ echo 'checked'; } ?>>Sports<br>
            <input type="checkbox" name="interests[]" value="reading"
                <?php if(!is_null($interests) && in_array('reading', $interests)){ echo 'checked'; } ?>>Reading<br>
            <br>

            <label for="energy">Energy Level:</label>
            <select name="energy" id="energy">
                <option value="low" <?php if($energy_level == 'low'){ echo 'selected'; } ?>>Low</option>
                <option value="medium" <?php if($energy_level == 'medium'){ echo 'selected'; } ?>>Medium</option>
                <option value="high" <?php if($energy_level == 'high'){ echo 'selected'; } ?>>High</option>
            </select>
            <br><br>

            <button type="submit">Find My Activity</button>
        </form>
    </div>
</body>
</html>
