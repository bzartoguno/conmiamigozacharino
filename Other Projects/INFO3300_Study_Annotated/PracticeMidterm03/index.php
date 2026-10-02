<?php
//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$first_name = filter_input(INPUT_GET, 'first_name');
$environment = filter_input(INPUT_GET, 'environment');
$interests = filter_input(INPUT_GET, 'interests', FILTER_DEFAULT | FILTER_REQUIRE_ARRAY);
$energy_level = filter_input(INPUT_GET, 'energy');

$first_name_error = filter_input(INPUT_GET, 'first_name_error');
$environment_error = filter_input(INPUT_GET, 'environment_error');
$interests_error = filter_input(INPUT_GET, 'interests_error');
$energy_level_error = filter_input(INPUT_GET, 'energy_level_error');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Weekend Activity Picker</h1>
    <form method="get" action="process.php">
        <label for="user_name">Your Name:</label>
        <input type="text" id="user_name" name="user_name" required>

    <li>Where would you rather spend the day?</li>
                        <!--  Radio buttons sharing the same name belong to one group; the selected button sends its value. -->
                        <input type="radio" name="environment" value="outdoors">Outdoors
                        <input type="radio" name="environment" value="indoors">Indoors
                        <input type="radio" name="environment" value="either">Either<br/><br/>
                        <span class="errors"><?php echo $environment_error; ?></span>

    <li>Select all activities you enjoy:</li>
                    <!--  The [] in the name lets multiple checked values arrive in PHP as an array. -->
                    <input type="checkbox" name="interests[]" value="hiking">Hiking<br/>
                    <input type="checkbox" name="interests[]" value="movies">Movies<br/>
                    <input type="checkbox" name="interests[]" value="games">Games<br/>
                    <input type="checkbox" name="interests[]" value="food">Food<br/>
                    <input type="checkbox" name="interests[]" value="sports">Sports<br/>
                    <input type="checkbox" name="interests[]" value="reading">Reading<br/>
                    <span class="errors"><?php echo $interests_error; ?></span>

        <li>Energy Level:</li>
                    <select name="energy">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select><br/><br/>
                    <span class="errors"><?php echo $energy_level_error; ?></span>


        <button type="submit">Submit</button>
    </form>
</body>
</html>