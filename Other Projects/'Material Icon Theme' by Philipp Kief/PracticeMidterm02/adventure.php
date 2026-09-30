<?php

session_start();

$name = filter_input(INPUT_POST, 'name');
$adventure_type = filter_input(INPUT_POST, 'adventure_type');
$fantasy = array();

$fantasy[] = 'You discover a hidden castle.';
$fantasy[] = 'You are challenged by a dragon.';
$fantasy[] = 'You find a magical sword.';
$fantasy[] = 'You meet a mysterious wizard.';


$space = array();

$space[] = 'You discover an abandoned spaceship.';
$space[] = 'Aliens invite you aboard their ship.';
$space[] = 'You discover a new planet.';
$space[] = 'You are caught in a meteor storm.';


$mystery = array();

$mystery[] = 'You discover a secret passage.';
$mystery[] = 'A mysterious letter arrives.';
$mystery[] = 'You witness a suspicious stranger.';
$mystery[] = 'You find a locked box.';


if($adventure_type == 'fantasy'){
    $adventures = $fantasy;
} elseif($adventure_type == 'space'){
    $adventures = $space;
} else{
    $adventures = $mystery;
}


$random_number = random_int(0, count($adventures) - 1);

$adventure = $adventures[$random_number];


$_SESSION['name'] = $name;
$_SESSION['adventure_type'] = $adventure_type;
$_SESSION['adventure'] = $adventure;


header('Location: results.php');

?>