<?php
//  Starts or resumes the session so this page can use $_SESSION values.
session_start();

//  Checks that required session data exists before trying to use it.
if( !isset($_SESSION['username']) || !isset($_SESSION['logged_in']) ){
    //  Redirects the browser to another page. This must happen before normal page output is sent.
    header('Location: index.php?errors=You must login to play the game');
}

//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
//  Validates that the incoming value is an integer instead of just treating it as text.
$one = filter_input(INPUT_POST, 'one', FILTER_VALIDATE_INT);
//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
//  Validates that the incoming value is an integer instead of just treating it as text.
$two = filter_input(INPUT_POST, 'two', FILTER_VALIDATE_INT);
//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
//  Validates that the incoming value is an integer instead of just treating it as text.
$three = filter_input(INPUT_POST, 'three', FILTER_VALIDATE_INT);
//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
//  Validates that the incoming value is an integer instead of just treating it as text.
$four = filter_input(INPUT_POST, 'four', FILTER_VALIDATE_INT);
//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
//  Validates that the incoming value is an integer instead of just treating it as text.
$five = filter_input(INPUT_POST, 'five', FILTER_VALIDATE_INT);

$number_sum_total = $one + $two + $three + $four + $five;
$number_product_total = $one * $two * $three * $four * $five;

//  Creates an array, which stores a group of related values.
$question = array();

$question[] = 'What was the third number?';
$question[] = 'If you added up your numbers, what would be the total?';
$question[] = 'If you multiplied all your numbers, what would be the total?';
$question[] = 'What was the second number?';
$question[] = 'What was the fourth number?';

//  Creates an array, which stores a group of related values.
$question_answers = array();

$question_answers['What was the third number?'] = $three;
$question_answers['If you added up your numbers, what would be the total?'] = $number_sum_total;
$question_answers['If you multiplied all your numbers, what would be the total?'] = $number_product_total;
$question_answers['What was the second number?'] = $two;
$question_answers['What was the fourth number?'] = $four;

//  Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
$random_one = random_int(0,4);
//  Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
$random_two = random_int(0,4);

while($random_one == $random_two){
    //  Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
    $random_two = random_int(0,4);
}

$question_one = $question[$random_one];
$question_two = $question[$random_two];

//  Stores this value in the session so another PHP page can use it later.
$_SESSION['memero_answer_one'] = $question_answers[$question_one];
//  Stores this value in the session so another PHP page can use it later.
$_SESSION['memero_answer_two'] = $question_answers[$question_two];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questions</title>
</head>
<body>

    <?php include('header.php'); ?>

    <div id="data_entry">

        <!--  Starts the form. action= says which file receives the data; method= sends it using POST. -->
        <form action="results.php" method="post">
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            <?=$question_one?> <input type="text" name="user_answer_one" size="7"><br>
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            <?=$question_two?> <input type="text" name="user_answer_two" size="7"><br>
            <input type="submit" value="Submit">
        </form>

    </div>

</body>
</html>