<?php
session_start();

setcookie('username', 'first', time() - 3600, '/');
setcookie('password', 'player', time() - 3600, '/');

session_destroy();

header('Location:index.php');

?>