<template>
<div>
    <div class="body-form d-flex justify-content-center">
        <form>
            <h1 class="h5 mb-3 fw-normal">Identificate</h1>
            <div class="my-2">
                    <img src="@/assets/logoempire.png" alt="Carrito Vacío" style="width: 100px; height: 100px;">
                </div>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox my-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesion</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'componentes-login-login',
    components: {

    }

}
</script>

<style>
.body-form {
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
    height: 50em;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
