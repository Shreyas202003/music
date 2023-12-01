<?php
session_start();
include "database.php";    //To cinnect with the data base
if(isset($_POST['submit'])){     //without entering any thing in login page it will not processed
 $em=$_POST['email'];
 $pa=$_POST['password'];

 $query="select * from tbllogin where Email='$em' and Password='$pa'";     //It will check and fetch the email and password from the database
 $result=mysqli_query($link,$query);
 if(mysqli_num_rows($result)>0){
    $_SESSION['id']=$em;
    header("location:index.php");         //path for index file
 }
 else{
    header("location:login-htm.php?m=1");
    
 }
}

?>