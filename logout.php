<?php
session_start();
$_SESSION['id']="";     //The give email id should get null to start for new user
session_destroy();          
header("location:login-htm.php");       //It will direct to the login page
?>