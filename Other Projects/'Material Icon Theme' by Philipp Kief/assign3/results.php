<?php
$errors = array();
$user_data = array();

$first_name = filter_input(INPUT_GET, 'first_name');

if ($first_name == null) {
    $errors[] = 'first_name_error=First name is required';
} else if (strlen($first_name) < 3) {
    $errors[] = 'first_name_error=First name must be longer than 2 chars';
}

$user_data[] = 'first_name=' . $first_name;


$last_name = filter_input(INPUT_GET, 'last_name');

if ($last_name == null) {
    $errors[] = 'last_name_error=Last name is required';
} else if (strlen($last_name) < 3) {
    $errors[] = 'last_name_error=Last name must be longer than 2 chars';
}

$user_data[] = 'last_name=' . $last_name;


$minor_name = filter_input(INPUT_GET, 'minor_name');

if ($minor_name == null) {
    $errors[] = 'minor_name_error=Minor name is required';
}

$user_data[] = 'minor_name=' . $minor_name;


$minor_age = filter_input(INPUT_GET, 'minor_age', FILTER_VALIDATE_INT);

if ($minor_age == null) {
    $errors[] = 'minor_age_error=Minor age is required';
} else if ($minor_age >= 18) {
    $errors[] = 'minor_age_error=Minor must be under 18';
}

$user_data[] = 'minor_age=' . $minor_age;


$minor_birth_date = filter_input(INPUT_GET, 'minor_birth_date');

if ($minor_birth_date == null) {
    $errors[] = 'minor_birth_date_error=Minor birth date is required';
}

$user_data[] = 'minor_birth_date=' . $minor_birth_date;


$street = filter_input(INPUT_GET, 'street');

if ($street == null) {
    $errors[] = 'street_error=Street is required';
}

$user_data[] = 'street=' . $street;


$city = filter_input(INPUT_GET, 'city');

if ($city == null) {
    $errors[] = 'city_error=City is required';
}

$user_data[] = 'city=' . $city;


$state = filter_input(INPUT_GET, 'state');

if ($state == null) {
    $errors[] = 'state_error=State is required';
}

$user_data[] = 'state=' . $state;


$zip = filter_input(INPUT_GET, 'zip');

if ($zip == null) {
    $errors[] = 'zip_error=Zip is required';
} else if (strlen($zip) != 5) {
    $errors[] = 'zip_error=Zip must be 5 characters';
}

$user_data[] = 'zip=' . $zip;


$email = filter_input(INPUT_GET, 'email', FILTER_VALIDATE_EMAIL);

if ($email == null) {
    $errors[] = 'email_error=Email is required';
} else if (!$email) {
    $errors[] = 'email_error=Email formatting required';
}

$user_data[] = 'email=' . $email;


$signature = filter_input(INPUT_GET, 'signature');

if ($signature == null) {
    $errors[] = 'signature_error=Signature is required';
} else if (strlen($signature) < 3) {
    $errors[] = 'signature_error=Signature must be longer than 3 chars';
}

$user_data[] = 'signature=' . $signature;


$authorize_play = filter_input(INPUT_GET, 'authorize_play');

if ($authorize_play == "true") {
    $user_data[] = 'authorize_play=true';
} else {
    $user_data[] = 'authorize_play=false';
}


$page = 'waiver.php?';

if (count($errors) > 0) {
    foreach ($errors as $error) {
        $page .= $error . '&';
    }

    foreach ($user_data as $data) {
        $page .= $data . '&';
    }

    header("Location: $page");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
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
        <p><?php echo $minor_name; ?> is allowed to play dial-a-fortune games.</p>
    <?php } else { ?>
        <p>thank you, <?php echo $first_name; ?> <?php echo $last_name; ?>.</p>
        <p><?php echo $minor_name; ?> is not allowed to play dial-a-fortune games.</p>
    <?php } ?>

</div>

</body>
</html>