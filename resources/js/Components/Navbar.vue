<template>
    <header>
        <router-link to="/home"> <img src="..\..\img\landing/universityEmblem.png" id="universityEmblem" alt="Emblema UFSM" /> </router-link>
        <div class='nav-container'>
            <div class='nav-box-pages'> 
                <span><router-link to="/panel"> Painel </router-link></span> 
                <span><router-link to="/courses"> Cursos </router-link></span>
                <span><router-link to="/about"> Sobre </router-link></span>
                <span><router-link to="/doubts"> Dúvidas </router-link></span>
            </div>
            <div class='nav-box-login'>            
                <span><router-link to="/login"> Entrar </router-link></span>
                <span class='register-btn' ><router-link  to="/register"> Cadastrar </router-link></span>
            </div>
        </div>
    </header>
</template>

<script>
export default{
    name: "Navbar"
}
</script>

<style>
#universityEmblem
{
    margin-left: 25px;
    width: 120px;
    padding-top: 6px;
}
header
{
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    background: #21376B;
    margin-left: 0px;
}
header > .nav-container
{
    margin-left: 20px;
    height: 100px;
    width: inherit; 
}
header > .nav-container > .nav-box-pages
{
    padding-top: 38px;
    height: 55px;
    float: left;
}
header > .nav-container > .nav-box-login
{
    padding-top: 30px;
    height: 75px;
    width: 180px;
    display: flex;
    align-items: center;    
    float: right;
}
header > .nav-container > .nav-box-login > .register-btn
{
    border-radius: 15px;    
    background-color:#395EB7;
    padding: 20px;
    padding-top: 2px;
    padding-bottom: 2px;
    text-decoration: none;    
    height: auto;
}     
header > .nav-container > .nav-box-pages > span
{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    font-size: 14pt;
    text-decoration: none;    
    height: auto;
    color: white;
    transition: 0.25s 0s ease;
    position: relative;
}
header > .nav-container > .nav-box-pages > span::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0px;
    left: 50%;
    background-color: #FFFFFFFF;
    transition: all 0.3s ease;
    border-radius: 207px;
  }
header > .nav-container > .nav-box-pages > span:hover::after 
{
    opacity: 100%;
    left: 15%;
    height: 5px;
    width: 68%;
}
header > .nav-container > .nav-box-login > span
{
    padding-right: 10px;
    padding-left: 10px;
    font-size: 14pt;
    text-decoration: none;    
    height: auto;
    color: white;
    transition: 0.25s 0s ease;
}
header > .nav-container > .nav-box-login > span:hover
{    
    color: rgb(182, 182, 182);
}
</style>
