<?php

$relationships_array[] = "You will have a large family";
$relationships_array[] = "You will have a few close friends";
$relationships_array[] = "You will have many friends, but a smaller family";

$money_array[] = "You will be rich";
$money_array[] = "You will be comfortable";
$money_array[] = "There is more to life than money";

$fame_array[] = "You will be famous";
$fame_array[] = "You will be well-known in your city";
$fame_array[] = "You prefer your privacy";

$relationships_random = random_int(0, count($relationships_array)-1 );
$money_random = random_int(0, count($money_array)-1 );
$fame_random = random_int(0, count($fame_array)-1 );
$lucky_number = random_int(0, 100);

$relationships_fortune = $relationships_array[$relationships_random];
$money_fortune = $money_array[$money_random];
$fame_fortune = $fame_array[$fame_random];

$fortune_json = "{
    created_by:'Zach Ridenour (I hope I also got all this right tooo)',
    relationships_fortune:'$relationships_fortune',
    money_fortune: '$money_fortune',
    fame_fortune:'$fame_fortune',
    lucky_number:$lucky_number
}";

echo $fortune_json;