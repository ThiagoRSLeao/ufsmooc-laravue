<template>
    <Navbar />
        <router-view />
    <Footer />
</template>






<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
    name: "app",
    components: {
        Navbar,
        Footer
    }
}
</script>





<style>
*
{
    padding: 0;
    margin: 0;
    font-family: 'Rubik';
    font-size: 15px;
    /*font-family: 'Zapf Humanist BT';*/
}
input:focus
{
    outline: none;
}
html
{
    height: 100%;
}
body
{
    min-height: 600px;
    height: 100%;
    background-color: #F7F9FD;
}

@media (max-width: 600px){
    div {
        
    }
}
</style>
