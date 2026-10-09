<?php

session_start();

// ADDED: The exam asks for a saved random number between 1 and 10.
$random_number = random_int(1, 10);

// FIXED: The form uses GET, so the guess must be read with INPUT_GET.
$user_guess = filter_input(INPUT_GET, 'user_guess');

if($random_number < 6){
    $direction = 'left';
}
else{
    $direction = 'right';
}

// ADDED: These session values carry the guess and answer back to index.php.
$_SESSION['user_guess'] = $user_guess;
$_SESSION['actual_direction'] = $direction;

header('Location: index.php');

// ADDED: Stops execution after the redirect.
exit();

?>
