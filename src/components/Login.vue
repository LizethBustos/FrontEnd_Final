<template>
    <div class="login_user">
        <div class="container_login_user">
            <h2>Iniciar sesión</h2>
            <form @submit.prevent="processLoginUser">
                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "../utils/axios"
export default {
    name: "Login",
    data: function(){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },
    methods:{
        processLoginUser: function(){
            console.log(this.user)
            //axios.post("login/", this.user, {headers: {}})
            .then( (res) => {
                let dataLogin = {
                    username: this.user.username,
                    token_access: res.data.access,
                    token_refresh: res.data.refresh,
                }

                this.$emit('completedLogin', dataLogin)

            })
            .catch((error) => {
                if (error.responde.status == "401")
                    alert("ERROR 401: Credenciales Incorrectas")
            })
        }
    }
}

</script>

<style>
.login_user{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_login_user {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
}

.login_user h2 {
    color:#283747
}

.login_user form {
    width: 70%;
}

.login_user input {
    height: 40px;
    width: 100%;

    padding: 10px 20px;
    margin: 5px 0;

    border: 1px solid #283747;
}

.login_user button {
    width: 100%;
    height: 40px;
    color:#283747;
    background: #FFA333;
    border: 1px solid #FFFFFF;

    border-radius: 5px;
}


.login_user button:hover{
    color:#E5E7E9;
    background: #c6c6c6;
    border: 1px solid #283747;
}

</style>