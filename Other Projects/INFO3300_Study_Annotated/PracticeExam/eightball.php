<?php
//  Starts or resumes the session so this page can use $_SESSION values.
session_start();

//  Reads a value sent by a form using POST. The quoted field name must match the form's name= value.
$user_question = filter_input(INPUT_POST, 'question');
//  Creates an array, which stores a group of related values.
$answers = array();
$answers[] = 'Odds aren\'t good';
$answers[] = 'No';
$answers[] = 'It will pass';
$answers[] = 'Cannot tell now';
$answers[] = 'You\'re hot';
$answers[] = 'Count on it';
$answers[] = 'Bet on it';
$answers[] = 'May be';
$answers[] = 'Possibly';
$answers[] = 'Ask again';
$answers[] = 'No doubt';
$answers[] = 'Absolutely';
$answers[] = 'Very likely';
$answers[] = 'Act now!';
$answers[] = 'Stars say no';
$answers[] = 'Can\'t say';
$answers[] = 'Not now';
$answers[] = 'Go for it!';
$answers[] = 'Yes';
$answers[] = 'It\'s okay';

//  Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
$random = random_int(0, count($answers) - 1);
//  Stores this value in the session so another PHP page can use it later.
$_SESSION['eight_ball_answer'] = $answers[$random];
//  Stores this value in the session so another PHP page can use it later.
$_SESSION['user_question'] = $user_question;
//  Redirects the browser to another page. This must happen before normal page output is sent.
header('Location: answer.php');