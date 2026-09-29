<?php
require('../model/memory.php');
session_start();
if( !isset($_SESSION['username']) ){
    header('Location: /assign6/index.php?errors=You must login to play the game');
}
$action ='';
$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action == NULL) {
        $action = 'start_game';
    }
 }

if($action == 'start_game'){
    $errors = '';
    $errors = filter_input(INPUT_GET, 'errors');
    include 'enter_nums.php';
}
else if($action == 'questions'){
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
    $_SESSION['question_one'] = $question_one;
    $_SESSION['question_two'] = $question_two;
    include 'questions.php';
}
else if($action == 'results'){
    if( !isset($_SESSION['memero_answer_one'] ) || !isset($_SESSION['memero_answer_two']) ){
        header('Location: index.php?action=start_game&errors=Please start at the beginning');
    }    
    $user_answer_one = filter_input(INPUT_POST, 'user_answer_one');
    $user_answer_two = filter_input(INPUT_POST, 'user_answer_two');
    $memero_answer_one = $_SESSION['memero_answer_one'];
    $memero_answer_two = $_SESSION['memero_answer_two'];
    $outcome_message = '';
    
    if($user_answer_one == $memero_answer_one && $user_answer_two == $memero_answer_two){
        $outcome_message = 'You are a genius!';
    } else{
        $outcome_message = 'Maybe you could use smaller numbers';
    }
    $_SESSION['memory'][] = new Memory($_SESSION['question_one'], $_SESSION['question_two'], $outcome_message);    
    include 'results.php';
}


