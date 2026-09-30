<?php
require('../model/career.php');
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
        $action = 'prediction';
    }
 }

// TIP: Defines a reusable function so the same logic can be called when needed.
function vowel_count($name){
    // TIP: Creates an array, which stores a group of related values.
    $vowels = ["a","e","i","o","u","A","E","I","O","U"];
    $vowel_count = 0;
    // TIP: A counted loop: repeats the block while the middle condition stays true.
    // TIP: Measures the length of the text so the program can make a decision based on its size.
    for ($i = 0; $i < strlen($name); $i++){
        // TIP: Checks whether a specific value exists inside an array.
        if( in_array($name[$i], $vowels) ){
            $vowel_count++;
        }
    }
    return $vowel_count;
}

if($action == 'prediction'){
    include 'input.php';
} 
else if($action == 'results'){
    // TIP: Creates an array, which stores a group of related values.
    $professions = ["dentist"=>0, "doctor"=>0, "pharmacist"=>0];

    #Question 1
    // TIP: Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    $workout_location = filter_input(INPUT_GET, "workout_location");
    if($workout_location == 'country_club'){
        $professions["dentist"]++;
    } elseif($workout_location == 'outside'){
        $professions["doctor"]++;
    } elseif($workout_location == 'no_workout'){
        $professions["pharmacist"]++;
    }
    
    #Question 2 - Recreational Activities
    $activity_count = 0;
    // TIP: Creates an array, which stores a group of related values.
    $activity_array = array();
    
    // TIP: Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    // TIP: Tells filter_input() to expect multiple values, such as checkboxes or a multi-select.
    $activities = filter_input(INPUT_GET, 'activities', FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);
    // TIP: Counts how many items are in the array.
    $activity_count = count($activities);
    
    if($activity_count >= 3){
        $professions["dentist"]++;
    } elseif ($activity_count == 2){
        $professions["doctor"]++;
    } else {
        $professions["pharmacist"]++;
    }
    
    #Question 3 - favorite boys name
    // TIP: Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    $boys_name = filter_input(INPUT_GET, "boys_name");
    $boy_vowel_count=vowel_count($boys_name);
    if($boy_vowel_count >=4){
        $professions["pharmacist"]++;
    } else if($boy_vowel_count >= 2){
        $professions["dentist"]++;
    } else{
        $professions["doctor"]++;
    }
    
    #Question 4 - favorite girls name
    // TIP: Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    $girls_name  = filter_input(INPUT_GET, "girls_name");
    $girl_vowel_count=vowel_count($girls_name);
    if($girl_vowel_count >=4){
        $professions["pharmacist"]++;
    } else if($girl_vowel_count >= 2){
        $professions["dentist"]++;
    } else{
        $professions["doctor"]++;
    }
    
    #Question 5 describe your talents
    // TIP: Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    $talents = filter_input(INPUT_GET, "talents");
    // TIP: Measures the length of the text so the program can make a decision based on its size.
    $talent_length = mb_strlen($talents, 'utf8');
    if($talent_length > 40){
        $professions["pharmacist"]++;
    } elseif($talent_length >= 20){
        $professions["dentist"]++;
    } else{
        $professions["doctor"]++;
    }
    
    #Question 6
    // TIP: Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    $likely_task = filter_input(INPUT_GET, 'likely_task');
    if($likely_task == 'tanning'){
        $professions["dentist"]++;
    } elseif($likely_task == 'hgh'){
        $professions["pharmacist"]++;
    } elseif($likely_task == 'stitch'){
        $professions["doctor"]++;
    }
    
    #Question 7
    $doctor_show_count = 0;
    // TIP: Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    // TIP: Tells filter_input() to expect multiple values, such as checkboxes or a multi-select.
    $tv_shows = filter_input(INPUT_GET,"tv_shows",FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);
    // TIP: Counts how many items are in the array.
    $show_count = count($tv_shows);
    if($show_count > 4){
        $professions["pharmacist"]++;
    } else{
        // TIP: Checks whether a specific value exists inside an array.
        if(in_array("house", $tv_shows)){
            $doctor_show_count++;
        }
        // TIP: Checks whether a specific value exists inside an array.
        if(in_array("greysanatomy", $tv_shows)){
            $doctor_show_count++;
        }
        // TIP: Checks whether a specific value exists inside an array.
        if(in_array("chicagohope", $tv_shows)){
            $doctor_show_count++;
        }    
        if($doctor_show_count > 1){
            $professions["doctor"]++;
        } else{
            $professions["dentist"]++;
        }
    } 

    $outcome = '';
    if($professions['dentist'] > $professions['doctor']){
        if($professions['dentist'] > $professions['pharmacist']){
            $outcome = 'Dentist';
        } else{
            $outcome = 'Pharmacist';
        }
    } else if($professions['doctor'] > $professions['pharmacist']){
        $outcome = 'Doctor';
    } else{
        $outcome = 'Pharmacist';
    }
    // TIP: Creates a new object from a class and sends these values into its constructor.
    $_SESSION['career'][] = new Career($professions['dentist'], $professions['doctor'], $professions['pharmacist'],$outcome);
    // TIP: Loads another PHP file here so its classes/code are available on this page.
    include('results.php');
}