<template>
  <div class="main-container">    
    <main>
      <h1> O que você gostaria de aprender?</h1>
      <p> Faça cursos online gratuitamente e receba certificados pela Universidade Federal de Santa Maria </p>
      <div class="courses-btn-wrapper">
        <router-link class="courses-btn" to="/courses"> Ver cursos </router-link>
      </div>
    </main>
      <img class="ufsm-people" src="..\..\img\landing/ufsmPeople.png" alt="UFSM photo" />
  </div>
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

<style scoped>
.main-container{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
main{
  float: left;
  height: 600px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column;
}
main > *{
  margin-bottom: 25px;
}
h1{
  max-width: 70%;
  /*padding-top: 10%;
  padding-left: 10%;*/
  font-size: 50px;
  font-weight: bold;
}
p{
  max-width: 70%;
  line-height: 24px;
  font-size: 20px;
  /*padding-left: 10%;
  padding-top: 5%;*/
}
.courses-btn{  
  color: white;
  background-color:#395EB7;
  padding: 16px 20px;
  text-decoration: none;    
  height: auto;
  border-radius: 15px;   
  box-shadow: 4px 4px 4px black;
}
.courses-btn:hover{
  cursor: pointer;
  color: rgb(182, 182, 182);
}
.courses-btn-wrapper{
  margin: 16px 0px;
}
.ufsm-people {
  height: 350px;
  /*padding-top: 25%;
  padding-right: 25%;*/
  float: right;
}
@media (max-width: 600px){
    div {
        
    }
}
</style>
