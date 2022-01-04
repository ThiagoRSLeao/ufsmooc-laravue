<template>
    <footer id="footer">
        <div id="footer-btns">
            <span><router-link to="/privacy"> Política de privacidade </router-link></span>
            ●
            <span><router-link to="/terms"> Termos de uso </router-link></span>
            ●
            <span><router-link to="/contact"> Contatos </router-link></span>
        </div>
    </footer>
</template>

<script>
export default{
    name: "Footer"
}
</script>

<style>
#footer
{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 80px;
    background-color: #21376B;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
}
footer > #footer-btns{
    
    margin-left: 25px;
    color: #FFFFFF;
    position: relative;
    float: left;
}
footer > #footer-btns > span
{
    padding-right: 20px;
    padding-left: 20px; 
    transition: 0.25s 0s ease;
}
footer > #footer-btns > span:hover
{
    color: rgb(182, 182, 182);
}
</style>