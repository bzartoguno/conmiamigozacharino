<?php
require('../model/career.php');
session_start();
if( !isset($_SESSION['username']) ){
    header('Location: /assign6/index.php?errors=You must login to play the game');
}
$action ='';
$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action == NULL) {
        $action = 'prediction';
    }
 }

function vowel_count($name){
    $vowels = ["a","e","i","o","u","A","E","I","O","U"];
    $vowel_count = 0;
    for ($i = 0; $i < strlen($name); $i++){
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
    $professions = ["dentist"=>0, "doctor"=>0, "pharmacist"=>0];

    #Question 1
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
    $activity_array = array();
    
    $activities = filter_input(INPUT_GET, 'activities', FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);
    $activity_count = count($activities);
    
    if($activity_count >= 3){
        $professions["dentist"]++;
    } elseif ($activity_count == 2){
        $professions["doctor"]++;
    } else {
        $professions["pharmacist"]++;
    }
    
    #Question 3 - favorite boys name
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
    $talents = filter_input(INPUT_GET, "talents");
    $talent_length = mb_strlen($talents, 'utf8');
    if($talent_length > 40){
        $professions["pharmacist"]++;
    } elseif($talent_length >= 20){
        $professions["dentist"]++;
    } else{
        $professions["doctor"]++;
    }
    
    #Question 6
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
    $tv_shows = filter_input(INPUT_GET,"tv_shows",FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);
    $show_count = count($tv_shows);
    if($show_count > 4){
        $professions["pharmacist"]++;
    } else{
        if(in_array("house", $tv_shows)){
            $doctor_show_count++;
        }
        if(in_array("greysanatomy", $tv_shows)){
            $doctor_show_count++;
        }
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
    $_SESSION['career'][] = new Career($professions['dentist'], $professions['doctor'], $professions['pharmacist'],$outcome);
    include('results.php');
}