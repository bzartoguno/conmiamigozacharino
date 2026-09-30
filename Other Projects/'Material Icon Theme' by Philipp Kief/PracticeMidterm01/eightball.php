<?php
session_start();

$user_question = filter_input(INPUT_POST, 'question');
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

$random = random_int(0, count($answers) - 1);
$_SESSION['eight_ball_answer'] = $answers[$random];
$_SESSION['user_question'] = $user_question;
header('Location: answer.php');