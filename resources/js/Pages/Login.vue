<template>
  Olá sou a Login!
  <input type="email" v-model="user.email">
  <input type="password" v-model="user.password">
  <button v-on:click="login()">Login Seguro</button>
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
      var res = await axios.post("/api/auth/login", this.user);
      this.$store.commit("setToken", res.data);
    }
  }
}
</script>

<style>

</style>