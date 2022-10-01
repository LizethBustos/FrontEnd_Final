<template>
    <div class="signUp">
        <div class="container_signUp">
            <h2>Registrarse</h2>
            <form @submit.prevent="processSignUp">
                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                <input type="text" v-model="user.nombres" placeholder="Nombre">
                <br>
                <input type="text" v-model="user.apellidos" placeholder="Apellido">
                <br>
                <input type="email" v-model="user.email" placeholder="e-mail">
                <br>
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "../utils/axios"
export default {
    name: "SignUp",
    data: function(){
        return {
            user: {
                username:"",
                nombres:"",
                apellidos:"",
                email:"",
                password:""                
            }
        }
    },
    methods:{
        processSignUp: function(){
            axios.post("user/", this.user, {headers: {}})
            .then( (res) => {
                let dataLogin = {
                    username: this.user.username,
                    token_access: res.data.access,
                    token_refresh: res.data.refresh,
                }

                this.$emit('completedLogin', dataLogin)

            })
            .catch((error) => {
                alert("Error: Fallo en el registro")
            })
        }
    }
}

</script>

<style>
.signUp{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_signUp {
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

.signUp h2 {
    color:#283747
}

.signUp form {
    width: 70%;
}

.signUp input {
    height: 40px;
    width: 100%;

    padding: 10px 20px;
    margin: 5px 0;

    border: 1px solid #283747;
}

.signUp button {
    width: 100%;
    height: 40px;
    color:#283747;
    background: #FFA333;
    border: 1px solid #FFFFFF;

    border-radius: 5px;
}


.signUp button:hover{
    color:#E5E7E9;
    background: #c6c6c6;
    border: 1px solid #283747;
}

</style>