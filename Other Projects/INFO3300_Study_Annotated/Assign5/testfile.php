<?php
    //  Loads another PHP file here so its classes/code are available on this page.
    include ('career.php');
    //  Loads another PHP file here so its classes/code are available on this page.
    include('fortune.php');
    //  Loads another PHP file here so its classes/code are available on this page.
    include('memory.php');
    //  Loads another PHP file here so its classes/code are available on this page.
    include('user.php');
    //  Creates a new object from a class and sends these values into its constructor.
    $user = new User('zachridenour', true);
    //  Creates an array, which stores a group of related values.
    $memory_game = array();
    //  Creates a new object from a class and sends these values into its constructor.
    $memory_game[] = new Memory('What is the sum of the numbers', 'What was number 2', 'You are a genius');
    //  Creates a new object from a class and sends these values into its constructor.
    $memory_game[] = new Memory('What was number 3', 'What was number 2', 'You are a genius');
    //  Creates a new object from a class and sends these values into its constructor.
    $memory_game[] = new Memory('What is the product of the numbers', 'What was number 4', 'Keep trying');

    //  Creates an array, which stores a group of related values.
    $career_game = array();
    //  Creates a new object from a class and sends these values into its constructor.
    $career_game[] = new Career(3,2,2,'Dentist');
    //  Creates a new object from a class and sends these values into its constructor.
    $career_game[] = new Career(5,1,1,'Doctor');
    //  Creates a new object from a class and sends these values into its constructor.
    $career_game[] = new Career(0,1,6,'Pharmacist');
    //  Creates a new object from a class and sends these values into its constructor.
    $career_game[] = new Career(1,1,5,'Pharmacist');

    //  Creates an array, which stores a group of related values.
    $fortune_game = array();
    //  Creates a new object from a class and sends these values into its constructor.
    $fortune_game[] = new Fortune('You will have a large family','You will be rich','You will be famous', 7 );
    //  Creates a new object from a class and sends these values into its constructor.
    $fortune_game[] = new Fortune('You will have a few close friends',
                                  'You will be rich','You prefer your privacy', 13);
    //  Creates a new object from a class and sends these values into its constructor.
    $fortune_game[] = new Fortune('You will have a few close friends',
                                  'You will be rich','You prefer your privacy', 71);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Welcome User</h1>
    <?php echo $user; ?>
    <h1>Career Games</h1>
    <?php 
    //  Loops through every item in an array, one item at a time.
    foreach($career_game as $cgame) {
        //  Outputs this value/text to the webpage or response.
        echo $cgame . '<br><br>';
    }?>
    <h1>Fortunes</h1>
    <?php 
    //  Loops through every item in an array, one item at a time.
    foreach($fortune_game as $fgame) {
        //  Outputs this value/text to the webpage or response.
        echo $fgame . '<br><br>';
    }?>
    <h1>Memory Games</h1>
    <?php 
    //  Loops through every item in an array, one item at a time.
    foreach($memory_game as $mgame) {
        //  Outputs this value/text to the webpage or response.
        echo $mgame . '<br><br>';
    }
    ?>
</body>


<h1>Welcome User</h1>

<?php echo $user; ?>

<h1>Career Games</h1>

<?php
//  Loops through every item in an array, one item at a time.
foreach($career_game as $cgame) {
    //  Outputs this value/text to the webpage or response.
    echo $cgame . '<br><br>';
}
?>

<h1>Fortunes</h1>

<?php
//  Loops through every item in an array, one item at a time.
foreach($fortune_game as $fgame) {
    //  Outputs this value/text to the webpage or response.
    echo $fgame . '<br><br>';
}
?>

<h1>Memory Games</h1>

<?php
//  Loops through every item in an array, one item at a time.
foreach($memory_game as $mgame) {
    //  Outputs this value/text to the webpage or response.
    echo $mgame . '<br><br>';
}
?>

</body>
</html>