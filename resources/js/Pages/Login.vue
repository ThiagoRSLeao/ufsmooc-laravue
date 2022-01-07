<template>
  <div id="container">
    <h1> Aq é o Login </h1>
      <input type="email" v-model="user.email">
      <input type="password" v-model="user.password">
    <button v-on:click="login()">Login Seguro</button>
  </div>
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
  h1{
    font-size: 45;
  }
  #container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
</style>