<template>
  <div id="main">
    <h1> O que você gostaria de aprender?</h1>
    <p> Faça cursos online gratuitamente e receba certificados pela Universidade Federal de Santa Maria </p>
    <div id="show-courses">
      <span><router-link to="/courses"> Ver cursos </router-link></span>
    </div>
  </div>
  <img id= "ufsm-People" src="..\..\img\landing/ufsmPeople.png" alt="UFSM photo"/>
</template>

<script>
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title);
  }
}
</script>

<style>
#main{
  float: left;
}
h1{
  max-width: 70%;
  padding-top: 10%;
  padding-left: 10%;
  font-size: 50px;
  font-weight: bold;
}
p{
  max-width: 70%;
  line-height: 24px;
  font-size: 20px;
  padding-left: 10%;
  padding-top: 5%;
}
#show-courses{
  color: white;
  position: relative;
  padding-top: 8%;
  padding-left: 10%;
}
#show-courses > span{ 
  background-color:#395EB7;
  padding: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  text-decoration: none;    
  height: auto;
  border-radius: 15px;   
  box-shadow: 4px 4px 4px black;
}
#show-courses > span:hover{
  color: rgb(182, 182, 182);
}
#ufsm-People {
  height: 800px;
  padding-top: 25%;
  padding-right: 25%;
  float: right;
}
@media (max-width: 600px){
    div {
        
    }
}
</style>
