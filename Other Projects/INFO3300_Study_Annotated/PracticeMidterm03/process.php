<?php

//  We need a session because this page saves information for results.php to use later.
session_start();

// 1. GET THE FORM VALUES
//  INPUT_POST matches method="post" from index.php.
$user_name = filter_input(INPUT_POST, 'user_name');
$environment = filter_input(INPUT_POST, 'environment');

//  FILTER_REQUIRE_ARRAY is needed because interests[] can send several checkbox values.
$interests = filter_input(INPUT_POST, 'interests', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);

$energy_level = filter_input(INPUT_POST, 'energy');


// 2. VALIDATE THE NAME
//  trim() removes extra spaces. This stops a name made only of spaces from counting as valid.
if($user_name == NULL || trim($user_name) == ''){

    //  Build a query string so index.php can show the error AND refill the form.
    $redirect = 'index.php?user_name_error=' . urlencode('Name is required');
    $redirect .= '&user_name=' . urlencode($user_name);
    $redirect .= '&environment=' . urlencode($environment);
    $redirect .= '&energy=' . urlencode($energy_level);

    //  Each checkbox value must be added separately when sending an array back in the URL.
    if(!is_null($interests)){
        foreach($interests as $interest){
            $redirect .= '&interests[]=' . urlencode($interest);
        }
    }

    //  header() redirects the browser to another page.
    header('Location: ' . $redirect);

    //  exit stops this page so none of the scoring code runs after the redirect.
    exit();
}


// 3. START ALL SCORES AT ZERO
//  This associative array keeps the three category scores together.
$activity_scores = [
    'adventure' => 0,
    'relaxing' => 0,
    'social' => 0
];

// 4. SCORE THE ENVIRONMENT ANSWER

if($environment == 'outdoors'){
    $activity_scores['adventure']++;
}
elseif($environment == 'indoors'){
    $activity_scores['relaxing']++;
}
else{
    $activity_scores['social']++;
}

// 5. SCORE HOW MANY INTERESTS WERE SELECTED
//  If no checkbox was selected, PHP gives us NULL, so we treat that as 0 interests.
if(is_null($interests)){
    $activity_count = 0;
}
else{
    $activity_count = count($interests);
}

//  These rules came from the practice problem.
if($activity_count >= 4){
    $activity_scores['social']++;
}
elseif($activity_count >= 2){
    $activity_scores['adventure']++;
}
else{
    $activity_scores['relaxing']++;
}

// 6. SCORE THE SPECIFIC INTERESTS
//  Only use in_array() when $interests is really an array.
if(!is_null($interests)){

    // Hiking OR sports adds one Adventure point.
    if(in_array('hiking', $interests) || in_array('sports', $interests)){
        $activity_scores['adventure']++;
    }

    // Movies OR reading adds one Relaxing point.
    if(in_array('movies', $interests) || in_array('reading', $interests)){
        $activity_scores['relaxing']++;
    }

    // Games OR food adds one Social point.
    if(in_array('games', $interests) || in_array('food', $interests)){
        $activity_scores['social']++;
    }
}

// 7. SCORE THE ENERGY LEVEL

if($energy_level == 'high'){
    $activity_scores['adventure']++;
}
elseif($energy_level == 'medium'){
    $activity_scores['social']++;
}
else{
    $activity_scores['relaxing']++;
}

// 8. HELPER FUNCTION: COUNT VOWELS IN THE NAME
//  A function lets us package a job into one reusable block of code.
function count_vowels($name){

    $vowels = ['a','e','i','o','u','A','E','I','O','U'];
    $vowel_count = 0;

    //  strlen() tells us how many characters are in the name.
    for($i = 0; $i < strlen($name); $i++){

        //  $name[$i] means "the character at this position in the name."
        if(in_array($name[$i], $vowels)){
            $vowel_count++;
        }
    }

    return $vowel_count;
}

//  Call the function and save the answer it returns.
$vowel_count = count_vowels($user_name);

if($vowel_count >= 4){
    $activity_scores['social']++;
}
elseif($vowel_count >= 2){
    $activity_scores['relaxing']++;
}
else{
    $activity_scores['adventure']++;
}

// 9. FIND THE HIGHEST-SCORING ACTIVITY TYPE

//  >= also handles ties. In a tie, this version favors Adventure first,
// then Relaxing, then Social.
if(
    $activity_scores['adventure'] >= $activity_scores['relaxing'] &&
    $activity_scores['adventure'] >= $activity_scores['social']
){
    $activity_type = 'adventure';
}
elseif($activity_scores['relaxing'] >= $activity_scores['social']){
    $activity_type = 'relaxing';
}
else{
    $activity_type = 'social';
}

// 10. CREATE THE POSSIBLE RANDOM RESULTS

$adventure = array();
$adventure[] = 'Go on a mountain hike.';
$adventure[] = 'Take a long bike ride.';
$adventure[] = 'Visit a new trail.';

$relaxing = array();
$relaxing[] = 'Watch a movie marathon.';
$relaxing[] = 'Read at a coffee shop.';
$relaxing[] = 'Have a quiet game night.';

$social = array();
$social[] = 'Try a new restaurant with friends.';
$social[] = 'Have a board game night.';
$social[] = 'Go bowling with friends.';


//  Put the correct category array into one common variable.
if($activity_type == 'adventure'){
    $choices = $adventure;
}
elseif($activity_type == 'relaxing'){
    $choices = $relaxing;
}
else{
    $choices = $social;
}


//  Arrays start at position 0, so count($choices) - 1 gives the last valid position.
$random_number = random_int(0, count($choices) - 1);

$activity = $choices[$random_number];


// 11. SAVE THE FINAL INFORMATION IN THE SESSION
//  Session values survive when we move from process.php to results.php.
$_SESSION['user_name'] = $user_name;
$_SESSION['activity_type'] = $activity_type;
$_SESSION['activity'] = $activity;
$_SESSION['scores'] = $activity_scores;

// 12. SEND THE USER TO THE RESULTS PAGE

header('Location: results.php');
exit();
?>