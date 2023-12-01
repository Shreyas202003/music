<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login || Sign_up</title>
    <link rel="stylesheet" href="login_css.css">
</head>
<body style="background: rgb(42 39 39)">
    <br>
<br>
    <div class="cont">
        <div class="form sign-in">
            <h2>Welcome</h2>
            <form action="login.php" method="post">
            <label>
                <span>Email</span>
                <input type="email" name="email"/>
            </label>
            <label>
                <span>Password</span>
                <input type="password" name="password" />
            </label>
            <p class="forgot-pass">Forgot password?</p>
            <button type="submit" name="submit" class="submit">LogIn</button>
        </form>
        </div>
        <div class="sub-cont" style="background: #50697e;">
            <div class="img">
                <div class="img__text m--up">
                 
                    <h3>Don't have an account? Please Sign up!<h3>
                </div>
                <div class="img__text m--in">
                
                    <h3>If you already has an account, just login.<h3>
                </div>
                <div class="img__btn">
                    <span class="m--up">Sign Up</span>
                    <span class="m--in">LogIn</span>
                </div>
            </div>
            <form action="register.php" method="post">
            <div class="form sign-up">
                <h2>Create your Account</h2>
                <label>
                    <span>Name</span>
                    <input type="text" name="name" />
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" name="email"/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name="pass"/>
                </label>
                <button type="submit" name="sub" class="submit">Sign Up</button>
                
            </div>
        </form>
       
        </div>
    </div>
   <?php
   if(isset($_GET['m'])){
    echo "<script> alert('Invalid Email/Password');</script>";
   }
   ?>
    <script>
        document.querySelector('.img__btn').addEventListener('click', function() {
            document.querySelector('.cont').classList.toggle('s--signup');
        });
    </script>
</body>
</html>