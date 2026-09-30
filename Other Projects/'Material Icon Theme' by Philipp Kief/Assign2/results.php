<?php

$professions = ["dentist"=>0, "doctor"=>0, "pharmacist"=>0];

#Question 1

$workout_location = filter_input(INPUT_GET, "workout_location");

if($workout_location == "country_club"){
    $professions["dentist"]++;
}
elseif($workout_location == "outside"){
    $professions["doctor"]++;
}
else{
    $professions["pharmacist"]++;
}


#Question 2

$activities = filter_input(INPUT_GET, "activities", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);

if(!is_null($activities)){

    $activity_count = count($activities);

    if($activity_count >= 3){
        $professions["dentist"]++;
    }
    elseif($activity_count == 2){
        $professions["doctor"]++;
    }
    else{
        $professions["pharmacist"]++;
    }
}


#Question 3

$boys_name = filter_input(INPUT_GET, "boys_name");

$boys_vowel_count = vowel_count($boys_name);

if($boys_vowel_count >= 4){
    $professions["pharmacist"]++;
}
elseif($boys_vowel_count >= 2){
    $professions["dentist"]++;
}
else{
    $professions["doctor"]++;
}


#Question 4

$girls_name = filter_input(INPUT_GET, "girls_name");

$girls_vowel_count = vowel_count($girls_name);

if($girls_vowel_count >= 4){
    $professions["pharmacist"]++;
}
elseif($girls_vowel_count >= 2){
    $professions["dentist"]++;
}
else{
    $professions["doctor"]++;
}


#Question 5

$talents = filter_input(INPUT_GET, "talents");

$talent_length = mb_strlen($talents, "utf8");

if($talent_length > 40){
    $professions["pharmacist"]++;
}
elseif($talent_length >= 20){
    $professions["dentist"]++;
}
else{
    $professions["doctor"]++;
}


#Question 6

$likely_task = filter_input(INPUT_GET, "likely_task");

if($likely_task == "tanning"){
    $professions["dentist"]++;
}
elseif($likely_task == "hgh"){
    $professions["pharmacist"]++;
}
elseif($likely_task == "stitch"){
    $professions["doctor"]++;
}


#Question 7

$tv_shows = filter_input(INPUT_GET, "tv_shows", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_REQUIRE_ARRAY);

$doctor_show_count = 0;

if(!is_null($tv_shows)){

    $show_count = count($tv_shows);

    if($show_count > 4){
        $professions["pharmacist"]++;
    }
    else{

        if(in_array("house", $tv_shows)){
            $doctor_show_count++;
        }

        if(in_array("greys_anatomy", $tv_shows)){
            $doctor_show_count++;
        }

        if(in_array("chicago_hope", $tv_shows)){
            $doctor_show_count++;
        }

        if($doctor_show_count >= 2){
            $professions["doctor"]++;
        }
        else{
            $professions["dentist"]++;
        }
    }
}


function vowel_count($name){

    $vowels = ["a","e","i","o","u","A","E","I","O","U"];

    $vowel_count = 0;

    for($i=0; $i<strlen($name); $i++){

        if(in_array($name[$i], $vowels)){
            $vowel_count++;
        }
    }

    return $vowel_count;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <h1>Zach R's Personalities and Professions</h1>

    <div id="results">

        <h3>Our proprietary algorithm has uncovered the following:</h3>

        <h3>
            Results:<br/>

            <?php

            foreach($professions as $key => $value){

                echo "<span class='results_display'>";
                echo $key . " = " . $value;
                echo "</span><br/>";
            }

            ?>
        </h3>

    </div>

</body>
</html>