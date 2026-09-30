<?php
session_start();

if( !isset($_SESSION['username']) || !isset($_SESSION['logged_in']) ){
    header('Location: index.php?errors=You must login to play the game');
}

$one = filter_input(INPUT_POST, 'one', FILTER_VALIDATE_INT);
$two = filter_input(INPUT_POST, 'two', FILTER_VALIDATE_INT);
$three = filter_input(INPUT_POST, 'three', FILTER_VALIDATE_INT);
$four = filter_input(INPUT_POST, 'four', FILTER_VALIDATE_INT);
$five = filter_input(INPUT_POST, 'five', FILTER_VALIDATE_INT);

$number_sum_total = $one + $two + $three + $four + $five;
$number_product_total = $one * $two * $three * $four * $five;

$question = array();

$question[] = 'What was the third number?';
$question[] = 'If you added up your numbers, what would be the total?';
$question[] = 'If you multiplied all your numbers, what would be the total?';
$question[] = 'What was the second number?';
$question[] = 'What was the fourth number?';

$question_answers = array();

$question_answers['What was the third number?'] = $three;
$question_answers['If you added up your numbers, what would be the total?'] = $number_sum_total;
$question_answers['If you multiplied all your numbers, what would be the total?'] = $number_product_total;
$question_answers['What was the second number?'] = $two;
$question_answers['What was the fourth number?'] = $four;

$random_one = random_int(0,4);
$random_two = random_int(0,4);

while($random_one == $random_two){
    $random_two = random_int(0,4);
}

$question_one = $question[$random_one];
$question_two = $question[$random_two];

$_SESSION['memero_answer_one'] = $question_answers[$question_one];
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

        <form action="results.php" method="post">
            <?=$question_one?> <input type="text" name="user_answer_one" size="7"><br>
            <?=$question_two?> <input type="text" name="user_answer_two" size="7"><br>
            <input type="submit" value="Submit">
        </form>

    </div>

</body>
</html>