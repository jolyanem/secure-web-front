<svelte:head>
    <title> Sign In </title>
</svelte:head>

<div class="login-page">

    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="form">

                    <h1 class="welcome-text">Hello you ! </h1>
                    <p class="register-text">
                        <a href="/login">Log Out</a>
                    </p>
                    <p class = "locations">
                        <a href="/locations"> See locations </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    .welcome-text {
        font-family: Impact;
    }
    .register-text {
        font-family:fantasy;
        font-size: large;
    }
    .locations {
        font-family:fantasy;
        font-size: large;
    }
    .login-page{
        background-color:white;
    }
    .form p {
        margin: 20px 0;
        font-size: 11px;
        color: white;
        text-align: center;
        text-shadow: 0 0.5px #2a85a1;
    }
    .form a{
        color: olive;
        text-decoration: none;
    }
    .form a:hover {
        text-decoration: underline;
    }
    .auth-page {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -150px 0 0 -150px;
        width:300px;
        height:300px;
    }

    .auth-page h1 {
        color: black;
        text-shadow: 0 0 1px
        rgba(0,0,0,0.3);
        letter-spacing:1px;
        text-align:center; }

</style>


