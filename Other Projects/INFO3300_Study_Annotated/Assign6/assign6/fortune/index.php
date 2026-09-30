<?php
require('../model/fortune.php');
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
        $action = 'fortune';
    }
 }

 if($action == 'fortune'){
    $relationships_array[] = "You will have a large family";
    $relationships_array[] = "You will have a few close friends";
    $relationships_array[] = "You will have a smaller family, but many close friends";

    $money_array[] = "You will be rich";
    $money_array[] = "You will be comfortable";
    $money_array[] = "There is more to life than money";

    $fame_array[] = "You will be famous";
    $fame_array[] = "You will be well-known in your city";
    $fame_array[] = "You prefer your privacy";

    // TIP: Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
    $relationships_random = random_int(0,count($relationships_array)-1);
    // TIP: Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
    $money_random = random_int(0,count($money_array)-1);
    // TIP: Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
    $fame_random = random_int(0,count($fame_array)-1);
    // TIP: Picks a random integer. When choosing an array item, count(...)-1 is used because array indexes start at 0.
    $lucky_number = random_int(0,100);

    $relationships_fortune = $relationships_array[$relationships_random];
    $money_fortune = $money_array[$money_random];
    $fame_fortune = $fame_array[$fame_random];

    // TIP: Creates a new object from a class and sends these values into its constructor.
    $_SESSION['fortune'][] = new Fortune($relationships_fortune, $money_fortune, $fame_fortune,$lucky_number);

    include 'fortune.php';
 }