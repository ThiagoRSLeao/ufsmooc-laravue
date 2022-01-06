<template>
    <header>
        <button id="nav-menu"> /// </button>
        <div class="img-wrapper">
            <router-link to="/home"> <img src="..\..\img\landing/universityEmblem.png" id="universityEmblem" alt="Emblema UFSM" /> </router-link>
        </div>
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
        <button id="teste"> User </button>
    </header>
</template>

<script>
export default{
    name: "Navbar"
}

/*const btn = document.getElementById('nav-menu');

btn.addEventListener("click", function(){
    var nav = document.getElementById("nav-container");

    if(nav.style.display === "none"){
        nav.style.display = "block";
    }
    else{
        nav.style.display = "none";
    }
})*/
</script>

<style>
#universityEmblem
{
    margin-left: 50px;
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
.nav-container
{
    margin-left: 20px;
    height: 100px;
    width: inherit; 
}
.nav-box-pages
{
    padding-top: 38px;
    height: 55px;
    float: left;
}
.nav-box-login
{
    margin-right: 50px;
    padding-top: 30px;
    height: 75px;
    width: 180px;
    display: flex;
    align-items: center;    
    float: right;
}
.register-btn
{
    border-radius: 15px;    
    background-color:#395EB7;
    padding: 20px;
    padding-top: 2px;
    padding-bottom: 2px;
    text-decoration: none;    
    height: auto;
}     
.nav-box-pages > span
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
.nav-box-pages > span::after {
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
.nav-box-pages > span:hover::after 
{
    opacity: 100%;
    left: 15%;
    height: 5px;
    width: 68%;
}
.nav-box-login > span
{
    padding-right: 10px;
    padding-left: 10px;
    font-size: 14pt;
    text-decoration: none;    
    height: auto;
    color: white;
    transition: 0.25s 0s ease;
}
.nav-box-login > span:hover
{    
    color: rgb(182, 182, 182);
}
#nav-menu{
    margin: 0 20px;
    display: none;
}
#teste{
    margin: 0 20px;
    display: none;
}
@media (max-width: 860px){
    .nav-container{
        display: none;
    }
    .img-wrapper{
        width: 100%;
        text-align: center;
    }
    #universityEmblem{
        margin-left: 0;
    }
    #nav-menu{
        display: block;
    }
    #teste{
        display: block;
    }
}
</style>
