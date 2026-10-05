<?php
require('prize_class.php');
session_start();

$name = filter_input(INPUT_POST, 'user_name');
$prize_type = filter_input(INPUT_POST, 'prize_type');
if($name == NULL || strlen(trim($name)) < 3){
    $error = 'Name must be at least 3 characters';
    header(
        'Location: index.php?error=' . urlencode($error) .
        '&user_name=' . urlencode($name)
    );
    exit();
}
$Food = array();
$Food[] = 'Cotton Candy';
$Food[] = 'Caramel Apple';
$Food[] = 'Funnel Cake';
$Food[] = 'Giant Pretzel';

$Game = array();
$Game[] = 'Stuffed Bear';
$Game[] = 'Toy Sword';
$Game[] = 'Rubber Duck';
$Game[] = 'Carnival Ball';

$Mystery = array();
$Mystery[] = 'Golden Ticket';
$Mystery[] = 'Mystery Box';
$Mystery[] = 'Lucky Coin';
$Mystery[] = 'Secret Envelope';

if($prize_type == 'Food'){
    $Prize = $Food;
}
elseif($prize_type == 'Game'){
    $Prize = $Game;
}
else{
    $Prize = $Mystery;
}

$random_number = random_int(0, count($Prize) - 1);
$ActualPrize = $Prize[$random_number];
$prize_result = new Prize($name, $prize_type, $ActualPrize);

$_SESSION['prize_result'] = $prize_result;
header('Location: answer.php');
exit();
?>