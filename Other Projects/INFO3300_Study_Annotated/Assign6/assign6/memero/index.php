<?php
require('../model/memory.php');
// TIP: Starts or resumes the session so this page can use $_SESSION values.
session_start();
// TIP: Checks that required session data exists before trying to use it.
if( !isset($_SESSION['username']) ){
    // TIP: Redirects the browser to another page. This must happen before normal page output is sent.
    header('Location: /assign6/index.php?errors=You must login to play the game');
}
$action ='';
// TIP: Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    // TIP: Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    $action = filter_input(INPUT_GET, 'action');
    if ($action == NULL) {
        $action = 'start_game';
    }
 }

if($action == 'start_game'){
    $errors = '';
    // TIP: Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    $errors = filter_input(INPUT_GET, 'errors');
    include 'enter_nums.php';
}
else if($action == 'questions'){
    // TIP: Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
    // TIP: Validates that the incoming value is an integer instead of just treating it as text.
    $one = filter_input(INPUT_POST, 'one', FILTER_VALIDATE_INT);
    // TIP: Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
    // TIP: Validates that the incoming value is an integer instead of just treating it as text.
    $two = filter_input(INPUT_POST, 'two', FILTER_VALIDATE_INT);
    // TIP: Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
    // TIP: Validates that the incoming value is an integer instead of just treating it as text.
    $three = filter_input(INPUT_POST, 'three', FILTER_VALIDATE_INT);
    // TIP: Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
    // TIP: Validates that the incoming value is an integer instead of just treating it as text.
    $four = filter_input(INPUT_POST, 'four', FILTER_VALIDATE_INT);
    // TIP: Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
    // TIP: Validates that the incoming value is an integer instead of just treating it as text.
    $five = filter_input(INPUT_POST, 'five', FILTER_VALIDATE_INT);
    
    $number_sum_total = $one + $two + $three + $four + $five;
    $number_product_total = $one * $two * $three * $four * $five;
    
    // TIP: Creates an array, which stores a group of related values.
    $question = array();
    $question[] = 'What was the third number?';
    $question[] = 'If you added up your numbers, what would be the total?';
    $question[] = 'If you multiplied all your numbers, what would be the total?';
    $question[] = 'What was the second number?';
    $question[] = 'What was the fourth number?';
    
    // TIP: Creates an array, which stores a group of related values.
    $question_answers = array();
    $question_answers['What was the third number?'] = $three;
    $question_answers['If you added up your numbers, what would be the total?'] = $number_sum_total;
    $question_answers['If you multiplied all your numbers, what would be the total?'] = $number_product_total;
    $question_answers['What was the second number?'] = $two;
    $question_answers['What was the fourth number?'] = $four;
    
    // TIP: Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
    $random_one = random_int(0,4);
    // TIP: Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
    $random_two = random_int(0,4);
    while($random_one == $random_two){
        // TIP: Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
        $random_two = random_int(0,4);
    }
    $question_one = $question[$random_one];
    $question_two = $question[$random_two];
    // TIP: Stores this value in the session so another PHP page can use it later.
    $_SESSION['memero_answer_one'] = $question_answers[$question_one];
    // TIP: Stores this value in the session so another PHP page can use it later.
    $_SESSION['memero_answer_two'] = $question_answers[$question_two];
    // TIP: Stores this value in the session so another PHP page can use it later.
    $_SESSION['question_one'] = $question_one;
    // TIP: Stores this value in the session so another PHP page can use it later.
    $_SESSION['question_two'] = $question_two;
    include 'questions.php';
}
else if($action == 'results'){
    // TIP: Checks that required session data exists before trying to use it.
    if( !isset($_SESSION['memero_answer_one'] ) || !isset($_SESSION['memero_answer_two']) ){
        // TIP: Redirects the browser to another page. This must happen before normal page output is sent.
        header('Location: index.php?action=start_game&errors=Please start at the beginning');
    }    
    // TIP: Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
    $user_answer_one = filter_input(INPUT_POST, 'user_answer_one');
    // TIP: Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
    $user_answer_two = filter_input(INPUT_POST, 'user_answer_two');
    // TIP: Reads a value that was saved earlier in the session.
    $memero_answer_one = $_SESSION['memero_answer_one'];
    // TIP: Reads a value that was saved earlier in the session.
    $memero_answer_two = $_SESSION['memero_answer_two'];
    $outcome_message = '';
    
    if($user_answer_one == $memero_answer_one && $user_answer_two == $memero_answer_two){
        $outcome_message = 'You are a genius!';
    } else{
        $outcome_message = 'Maybe you could use smaller numbers';
    }
    // TIP: Creates a new object from a class and sends these values into its constructor.
    $_SESSION['memory'][] = new Memory($_SESSION['question_one'], $_SESSION['question_two'], $outcome_message);    
    include 'results.php';
}


