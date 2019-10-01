<template>
  <div class="picPage-a">
    <img src="src/assets/img/images/bg1.png" alt="" class="position1">
    <img src="src/assets/img/images/bg2.png" alt="" class="position2">
    <div class="top">
      <h1>Happy Day</h1>
      <img class="imagesPage" src="src/assets/img/friends.jpg" alt="">
    </div>
    <div class="center1">
      <img class="imagesPage" src="src/assets/img/friends.jpg" alt="">
      <p>To embed your selected</p>
    </div>
    <div class="bottom">
      <img class="imagesPage" src="src/assets/img/friends.jpg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "Example7.vue"
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .picPage-a{
    margin-top: 5rem !important;
    width: 600px;
    height: 850px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid rgb(235, 235, 235);
    position: relative;
  }
  .position1{
    position: absolute;
    width: 63%;
    right: 0;
  }
  .position2{
    position: absolute;
    width: 48%;
    left: 0;
    bottom: 0;
  }
  .top, .center1, .bottom{
    width: 100%;
    padding: 20px 30px;
  }
  .center1{
    padding: 0 30px;
  }
  .top>h1{
    font-family: 'Comfortaa', cursive;
    color: #004e5e;
    margin-bottom: 10px;
  }
  .center1>img{
    width: 100%;
    border: 10px double #3a5656;
  }
  .center1>p{
    text-align: right;
    font-size: 20px;
    color: #003749;
  }
  .imagesPage{
    width: 45%;
  }
  .bottom{
    display: flex;
    justify-content: flex-end;
  }

</style>
