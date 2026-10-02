<?php
session_start();
$user_name = filter_input(INPUT_POST, 'user_name');
$environment = filter_input(INPUT_POST, 'environment');
$interests = filter_input(INPUT_POST, 'interests', FILTER_DEFAULT | FILTER_REQUIRE_ARRAY);
$energy_level = filter_input(INPUT_POST, 'energy');

$_SESSION['user_name'] = $user_name;
$_SESSION['environment'] = $environment;
$_SESSION['interests'] = $interests;
$_SESSION['energy_level'] = $energy_level;

$activity_scores = [ "adventure"=>0, "relaxing"=>0, "social"=>0 ];

if($environment == "outdoors"){
    $activity_scores["adventure"]++;
}
elseif($environment == "indoors"){
    $activity_scores["relaxing"]++;
}
else{
    $activity_scores["social"]++;
}
    
$activities = filter_input(INPUT_POST, "activities", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);
if(!is_null($activities)){
    $activity_count = count($activities);
    if($activity_count >= 3){
        $activity_scores["social"]++;
    }
    elseif($activity_count == 2){
        $activity_scores["adventure"]++;
    }
    else{
        $activity_scores["relaxing"]++;
    }
}
?>