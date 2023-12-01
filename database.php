<?php
    $host="localhost";   //variable is declared using $ sign
    $user="root";
    $password="";
    $database="project";  //give the project name as you have given in the database server

    $link=mysqli_connect($host,$user,$password,$database);  //this is used to connect the database
?>