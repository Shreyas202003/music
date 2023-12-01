<?php
        include "database.php";
        if(isset($_POST['sub'])){           //"isset"= it is use to check the data entered or not before submiting
        $n=$_POST['name'];
        $e=$_POST['email'];
        $p=$_POST['pass'];
        
        $query="insert into tbllogin values('$n','$e','$p')";       //This query is use to insert in the created table
        $result=mysqli_query($link,$query);
        if($result){
          echo "<script> alert('Data inserted succesfully')</script>";
          header("location:login-htm.php");
          echo "<script> alert('login with email and password')</script>";
        } 
        else{
            echo "<script> alert('Data not inserted ')</script>";  
        } 
    }            
 ?>