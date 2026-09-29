<?php
    session_start();
    $errors = filter_input(INPUT_GET, 'errors');
    $logged_in = false;
    $username_cookie = filter_input(INPUT_COOKIE, 'username');
    $password_cookie = filter_input(INPUT_COOKIE, 'password');
    $username="";
    if( isset($_SESSION['username']) ){
        $logged_in = true;
        $username = $_SESSION['username'];
    } elseif( $username_cookie == 'first' && $password_cookie == 'player'){
        $_SESSION['username'] = $username_cookie;
        $logged_in = TRUE;
        $username = $_SESSION['username'];
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Document</title>
</head>
<body>
    <?php echo $errors; ?>
    <?php if($username != ''){echo "Welcome $username";} ?> 
    <div id="header">
        <img id="title_image" src="carnival.jpg" alt=""><h1 id="title">Welcome to Dial-A-Fortune Carnival</h1> 
    </div>    
    <?php if(!$logged_in) : ?>
        <br>
        <div id="data_entry">
        <form action="login.php" method="post">
            Username <input type="text" name="username" placeholder="Username" size="10">
            Password <input type="password" name="password" placeholder="Password"  size="10">
            <input type="checkbox" name="stay_logged_in">Stay logged in?
            <input type="submit" value="Submit">
            <div class="errors"><?=$errors?></div>
        </form>
        </div>
    <?php else: ?>
        <ol>
            <!-- 1. Add the href link to the action controller for each assignment -->
            <li><a href="waiver/index.php">Waiver for minors</a></li>
            <li><a href="fortune/index.php">Fortune Teller</a></li>
            <li><a href="career/index.php">Career Prediction</a></li>
            <li><a href="memero/index.php">Memory Game</a></li>
        </ol>
        <h2><a href="show_progress.php">Show my progress</a></h2>
        <a href="logout.php">Click to logout</a>
    <?php endif; ?>
</body>
</html>