<?php
    //  Starts or resumes the session so this page can use $_SESSION values.
    session_start();
    //  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    $errors = filter_input(INPUT_GET, 'errors');
    $logged_in = false;
    //  Reads a cookie value that the browser previously stored.
    $username_cookie = filter_input(INPUT_COOKIE, 'username');
    //  Reads a cookie value that the browser previously stored.
    $password_cookie = filter_input(INPUT_COOKIE, 'password');
    $username="";
    //  Checks that required session data exists before trying to use it.
    if( isset($_SESSION['username']) ){
        $logged_in = true;
        //  Reads a value that was saved earlier in the session.
        $username = $_SESSION['username'];
    } elseif( $username_cookie == 'first' && $password_cookie == 'player'){
        //  Stores this value in the session so another PHP page can use it later.
        $_SESSION['username'] = $username_cookie;
        $logged_in = TRUE;
        //  Reads a value that was saved earlier in the session.
        $username = $_SESSION['username'];
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--  Connects this page to the CSS file that controls its appearance. -->
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
        <!--  Starts the form. action= says which file receives the data; method= sends it using POST. -->
        <form action="login.php" method="post">
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            Username <input type="text" name="username" placeholder="Username" size="10">
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            Password <input type="password" name="password" placeholder="Password"  size="10">
            <!--  The name= value is the key PHP uses later with filter_input(). -->
            <input type="checkbox" name="stay_logged_in">Stay logged in?
            <input type="submit" value="Submit">
            <!--  Displays the validation error for this field; the CSS class makes it stand out. -->
            <div class="errors"><?=$errors?></div>
        </form>
        </div>
    <?php else: ?>
        <ol>
            <!-- 1. Add the href link to the action controller for each assignment -->
            <!--  href tells the browser which page to open when this link is clicked. -->
            <li><a href="waiver/index.php">Waiver for minors</a></li>
            <!--  href tells the browser which page to open when this link is clicked. -->
            <li><a href="fortune/index.php">Fortune Teller</a></li>
            <!--  href tells the browser which page to open when this link is clicked. -->
            <li><a href="career/index.php">Career Prediction</a></li>
            <!--  href tells the browser which page to open when this link is clicked. -->
            <li><a href="memero/index.php">Memory Game</a></li>
        </ol>
        <!--  href tells the browser which page to open when this link is clicked. -->
        <h2><a href="show_progress.php">Show my progress</a></h2>
        <!--  href tells the browser which page to open when this link is clicked. -->
        <a href="logout.php">Click to logout</a>
    <?php endif; ?>
</body>
</html>