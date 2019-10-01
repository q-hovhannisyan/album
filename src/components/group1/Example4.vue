<template>
    <div class="picPage">
      <div class="imgWrapper1">
        <img src="src/assets/img/friends.jpg" class="img1" >
      </div>
      <div class="textWrapper">
        <h2>The feedback from our client has been overwhelming</h2>
      </div>
      <div class="imgWrapper2">
        <img src="src/assets/img/friends.jpg" class="img1" >
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                name: "Example4.vue"
            }
        }
    }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
  .picPage{
    margin-top: 5rem !important;
    width: 600px;
    height: 850px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-image: url("/src/assets/img/images/background3.png");
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    justify-content: space-between;
  }
  .img1{
    width: 80%;
  }
  .imgWrapper1{
    display: flex;
    padding: 20px;
  }
  .imgWrapper2{
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
  .textWrapper{
    background: rgba(255,255,255,0.8);
    padding: 10px;
    font-family: 'Righteous', cursive;
    color: #194254;
  }
</style>
