<svelte:head>
    <title> Login Page</title>
</svelte:head>

<script>
    import {goto} from '$app/navigation'
    let username = "", password = "";

    async function login() {
        try {
            const response = await fetch("https://locations-backend.onrender.com/users/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password})
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            sessionStorage.setItem("token", data.jwt);
            console.log(data.jwt)
            await goto("/home")

        }
        catch (error) {
            console.error(error);
            alert("Error")
        }

    }
</script>

<div class="login-page">

    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="form">

                    <h1 class="welcome-text">LOGIN</h1>
                    <p class="register-text">
                        <a href="/register">Need an account ?</a>
                    </p>

                    <form on:submit|preventDefault={login}>
                        <input
                                bind:value={username}
                                class="form-username"
                                name="username"
                                type="username"
                                required
                                placeholder="Username"
                        />
                        <input
                                bind:value={password}
                                class="form-password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                        />
                        <button class="form-button" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    .welcome-text{
        font-family: Impact;
    }

    .register-text {
        font-family:fantasy;
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

    .form-username
    {
        width: 100%;
        margin-bottom: 10px;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 13px;
        color:black;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 4px;
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
        -webkit-transition: box-shadow .5s ease;
        -moz-transition: box-shadow .5s ease;
        -o-transition: box-shadow .5s ease;
        -ms-transition: box-shadow .5s ease;
        transition: box-shadow .5s ease;
    }

    .form-password
    {
        width: 100%;
        margin-bottom: 10px;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 13px;
        color: black;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 4px;
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
        -webkit-transition: box-shadow .5s ease;
        -moz-transition: box-shadow .5s ease;
        -o-transition: box-shadow .5s ease;
        -ms-transition: box-shadow .5s ease;
        transition: box-shadow .5s ease;
    }

    .form-button {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        background-color: #328f8a;
        background-image: linear-gradient(45deg,#800080, #7f00ff);
        width: 106.7%;
        border: 0;
        border-radius: 4px;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        cursor: pointer;
    }
</style>
