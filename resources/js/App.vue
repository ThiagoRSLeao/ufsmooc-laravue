<template>
    <router-link to="/home"> Home </router-link>
    <router-link to="/panel"> Painel </router-link>
    <router-link to="/register"> Cadastro </router-link>
    <router-link to="/login"> Login </router-link>
    <router-view></router-view>
</template>

<script>
export default {
    name: "app",
    components: {
        
    },
}
</script>

<style>

</style>