<template>
  <div id="app" class="app">
    <div class="header">
      <h1>Tu Tienda</h1>
      <nav v-if="is_auth">
        <button @click="loadHome">Inicio</button>
        <button >Cuenta</button>
        <button @click="logout">Cerrar sesión</button>        
      </nav>

      <nav v-else> 
        <button @click="loadLogin">Iniciar sesión</button>
        <button @click="loadSignUp">Registrarse</button>
        <button @click="loadProductos">Productos</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view
        @completedLogin="completedLogin"
      >
      </router-view>
    </div>

    <div class="footer">
      <h2>Tu tienda amiga</h2>
    </div>
  
  </div>  
  
</template>

<script>
import { assertLogicalExpression } from '@babel/types'

export default {
  name: 'App',
  data: function() {
    return {
      is_auth: false,
    }
  },
  //métodos
  methods: {
    verifyAuth: function(){
      this.is_auth = localStorage.getItem("isAuth") || false;
      if(this.is_auth)
        this.$router.push({name:"home"})
      else
        this.$router.push({name:"Login"})
    },
    loadLogin: function(){
      this.$router.push({name:"Login"})
    },
    loadSignUp: function(){
      this.$router.push({name:"SignUp"})
    },
    loadHome: function(){
      this.$router.push({name:"home"})
    },
    logout: function(){
      localStorage.clear();
      alert("Sesion Cerrada");
    },
    loadProductos: function(){
      this.$router.push({name:"Productos"})
      this.verifyAuth();
    },
    completedLogin: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa")
      this.verifyAuth()
    }

  },
  crated: function() {
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto');
  
  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Roboto', 'sans serif';
    background-color: #ffe8cd;
  }
  
  .header {
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #ffffff;
    color:#283747;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    width: 50%;
    text-align: center;
  }

  .header nav {
    height: 100%;
    width: 20%;
    font-size: 20px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .header nav button {
    color:#283747;
    background-color:#ffa333;
    border:1px solid #ffffff;
    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover {
      color: #283747;
      background-color: #E5E7E9;
  }

  .main-component {
    height: 75vh;
  }

  .footer {
    width: 100%;
    height: 10vh;
    min-height: 88px;
    background-color: #FFFFFF;
    color:#283747;
  }

  .footer h2 {
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>