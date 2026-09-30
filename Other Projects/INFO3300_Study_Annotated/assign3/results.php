<?php
//  Creates an array, which stores a group of related values.
$errors = array();
$user_data = array();

//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$first_name = filter_input(INPUT_GET, 'first_name');

if ($first_name == null) {
    $errors[] = 'first_name_error=First name is required';
//  Measures the length of the text so the program can make a decision based on its size.
} else if (strlen($first_name) < 3) {
    $errors[] = 'first_name_error=First name must be longer than 2 chars';
}

$user_data[] = 'first_name=' . $first_name;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$last_name = filter_input(INPUT_GET, 'last_name');

if ($last_name == null) {
    $errors[] = 'last_name_error=Last name is required';
//  Measures the length of the text so the program can make a decision based on its size.
} else if (strlen($last_name) < 3) {
    $errors[] = 'last_name_error=Last name must be longer than 2 chars';
}

$user_data[] = 'last_name=' . $last_name;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$minor_name = filter_input(INPUT_GET, 'minor_name');

if ($minor_name == null) {
    $errors[] = 'minor_name_error=Minor name is required';
}

$user_data[] = 'minor_name=' . $minor_name;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
//  Validates that the incoming value is an integer instead of just treating it as text.
$minor_age = filter_input(INPUT_GET, 'minor_age', FILTER_VALIDATE_INT);

if ($minor_age == null) {
    $errors[] = 'minor_age_error=Minor age is required';
} else if ($minor_age >= 18) {
    $errors[] = 'minor_age_error=Minor must be under 18';
}

$user_data[] = 'minor_age=' . $minor_age;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$minor_birth_date = filter_input(INPUT_GET, 'minor_birth_date');

if ($minor_birth_date == null) {
    $errors[] = 'minor_birth_date_error=Minor birth date is required';
}

$user_data[] = 'minor_birth_date=' . $minor_birth_date;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$street = filter_input(INPUT_GET, 'street');

if ($street == null) {
    $errors[] = 'street_error=Street is required';
}

$user_data[] = 'street=' . $street;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$city = filter_input(INPUT_GET, 'city');

if ($city == null) {
    $errors[] = 'city_error=City is required';
}

$user_data[] = 'city=' . $city;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$state = filter_input(INPUT_GET, 'state');

if ($state == null) {
    $errors[] = 'state_error=State is required';
}

$user_data[] = 'state=' . $state;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$zip = filter_input(INPUT_GET, 'zip');

if ($zip == null) {
    $errors[] = 'zip_error=Zip is required';
//  Measures the length of the text so the program can make a decision based on its size.
} else if (strlen($zip) != 5) {
    $errors[] = 'zip_error=Zip must be 5 characters';
}

$user_data[] = 'zip=' . $zip;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
//  Validates that the incoming value has an email-like format.
$email = filter_input(INPUT_GET, 'email', FILTER_VALIDATE_EMAIL);

if ($email == null) {
    $errors[] = 'email_error=Email is required';
} else if (!$email) {
    $errors[] = 'email_error=Email formatting required';
}

$user_data[] = 'email=' . $email;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$signature = filter_input(INPUT_GET, 'signature');

if ($signature == null) {
    $errors[] = 'signature_error=Signature is required';
//  Measures the length of the text so the program can make a decision based on its size.
} else if (strlen($signature) < 3) {
    $errors[] = 'signature_error=Signature must be longer than 3 chars';
}

$user_data[] = 'signature=' . $signature;


//  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
$authorize_play = filter_input(INPUT_GET, 'authorize_play');

if ($authorize_play == "true") {
    $user_data[] = 'authorize_play=true';
} else {
    $user_data[] = 'authorize_play=false';
}


$page = 'waiver.php?';

//  Counts how many items are in the array.
if (count($errors) > 0) {
    //  Loops through every item in an array, one item at a time.
    foreach ($errors as $error) {
        //  The .= operator adds more text onto the end of the existing string.
        $page .= $error . '&';
    }

    //  Loops through every item in an array, one item at a time.
    foreach ($user_data as $data) {
        //  The .= operator adds more text onto the end of the existing string.
        $page .= $data . '&';
    }

    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header("Location: $page");
    //  Stops the rest of this PHP file from running after a redirect or finished response.
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!--  Connects this page to the CSS file that controls its appearance. -->
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>waiver result</title>
</head>
<body>

<h1 id="head_waiver">ZJR (sorry I did this so early I wasn't thinking straight) - carnival waiver result&nbsp;&nbsp;</h1>
<img src="ferris_wheel.jpg">

<div id="result">

    <?php if ($authorize_play == "true") { ?>
        <p>thank you, <?php echo $first_name; ?> <?php echo $last_name; ?>.</p>
        <!--  Puts the previous value back into the form so the user does not have to retype it after an error. -->
        <p><?php echo $minor_name; ?> is allowed to play dial-a-fortune games.</p>
    <?php } else { ?>
        <p>thank you, <?php echo $first_name; ?> <?php echo $last_name; ?>.</p>
        <p><?php echo $minor_name; ?> is not allowed to play dial-a-fortune games.</p>
    <?php } ?>

</div>

</body>
</html>