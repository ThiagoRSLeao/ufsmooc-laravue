<template>
  <main>
    <div class="login-background">
      <h1> Faça seu login </h1>
      <div class="login">
        <input id="user" placeholder="E-mail" type="email" v-model="user.email" required/>
        <input id="pass" placeholder="Senha" type="password" v-model="user.password" required/>
      </div>
      <div class="pass-remember">
        <input type="checkbox" id="check-box"/>
        <label for="check-box"> Lembrar minha senha </label>
      </div>
      <button id="login-btn" v-on:click="login()">Entrar</button>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      user: {
        email: "",
        password: "",
      },
    }
  },
  methods:{
    async login(){
      console.log("Tentei logar");
      var res = await axios.post("/api/auth/login", this.user);
      console.log(res);
      this.$store.commit("setToken", res.data);
    },
    teste(){      
      console.log("Tentei logar");
    }
  }
}
</script>

<style>
  main{
    height: 100vh;
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  .login-background{
    margin-top: 3%;
    display: flex;
    align-items: center;
    flex-flow: column;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid #ECECEC;
    border-radius: 20px;
    padding: 3% 5%;
  }
  h1{
    min-width: max-content;
    font-style: normal;
    font-size: 30px;
  }
  .login{
    display: flex;
    align-items: center;
    flex-flow: column;
    margin-top: 20px;
  }
  .login > input{
    width: 350px;
    box-sizing: border-box;
    margin: 5px 0;
    background-color: white;
    border: 1px solid rgba(12, 20, 39, 0.25);
    padding: 10px 15px;
    border-radius: 20px;
  }
  .pass-remember{
    display: flex;
    align-items: center;
    color: #A0A0A0;
    width: 100%;
    margin-left: 10px;
    padding-top: 5px;
    margin-bottom: 15px;
    font-size: 20px;
  }
  input[type="checkbox"]{
    appearance: none;
    border-radius: 4px;
    border: 1px inset gainsboro;
    cursor: pointer;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(156, 156, 156, 0.48);
  }
  input[type="checkbox"]:checked:before{
    font: arial;
    font-style: oblique;
    content: '\2714';
    display: block;
    text-align: center;
    margin-top: -3px;
    margin-left: -3px;
    color: var(--second-color);
    font-weight: bold;
  }
  #login-btn{
    width: 350px;
    color: white;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: var(--second-color);
    padding: 10px 15px;
    box-shadow: 4px 4px 4px gray;
  }
  #login-btn:hover{
    cursor: pointer;
    color: rgb(182, 182, 182);
  }
</style>