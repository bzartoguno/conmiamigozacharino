<?php
    //  Starts or resumes the session so this page can use $_SESSION values.
    session_start();
    $logged_in = false;
    //  Reads a value sent using GET (usually from the URL/form). The quoted field name must match the form field.
    $errors = filter_input(INPUT_GET, 'errors');
    //  Reads a cookie value that the browser previously stored.
    $username_cookie = filter_input(INPUT_COOKIE, 'username');
    //  Reads a cookie value that the browser previously stored.
    $password_cookie = filter_input(INPUT_COOKIE, 'password');

    //  Checks that required session data exists before trying to use it.
    if( isset($_SESSION['username']) && isset($_SESSION['logged_in']) ){
        $logged_in = true;
    } elseif( $username_cookie == 'first' && $password_cookie == 'player'){
        //  Stores this value in the session so another PHP page can use it later.
        $_SESSION['username'] = $username_cookie;
        //  Stores this value in the session so another PHP page can use it later.
        $_SESSION['logged_in'] = TRUE;
        $logged_in = TRUE;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Memero</title>
</head>
<body>
    <?php include('header.php'); ?>

<h3>Test your memory and math mind with Memero.</h3>

<?php if(!$logged_in) : ?>
        <div id="data_entry">
            <!--  Starts the form. action= says which file receives the data; method= sends it using POST. -->
            <form action="login.php" method="post">
                <!--  The name= value is the key PHP uses later with filter_input(). -->
                Username <input type="text" name="username" placeholder="Username" size = "10">
                <!--  The name= value is the key PHP uses later with filter_input(). -->
                Password <input type="password" name="password" placeholder="Password" size = "10">
                <!--  The name= value is the key PHP uses later with filter_input(). -->
                <input type="checkbox" name="stay_logged_in">Stay logged in?
                <input type="submit" value="Submit">
                <!--  Displays the validation error for this field; the CSS class makes it stand out. -->
                <div class="errors"><?=$errors?></div>
            </form>
        </div>
    <?php else : ?>
        <!--  href tells the browser which page to open when this link is clicked. -->
        <a href="enter_nums.php">Click to begin</a> <br>
        <!--  href tells the browser which page to open when this link is clicked. -->
        <a href="logout.php">Click to logout</a>
    <?php endif; ?>

</body>
</html>