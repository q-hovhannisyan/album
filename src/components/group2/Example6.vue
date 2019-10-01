<template>
    <div class="picPage-a">
      <div class="pic-a">
        <img src="src/assets/img/friends.jpg" class="img-a" >
        <h2 class="firstH2">Happy end</h2>
        <h2 class="secondH2">Good day</h2>
      </div>

      <img src="src/assets/img/images/abstract-background.png" alt="" class="back_img">
      <div class="pic-b">
        <img src="src/assets/img/friends.jpg" class="img-b" >

      </div>
    </div>
</template>
<script>
    export default {
        name: "Example6.vue"
    }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Neucha&display=swap');
  .picPage-a{
    margin-top: 5rem !important;
    width: 600px;
    height: 850px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-image: url("/src/assets/img/images/background3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .pic-a{
    width: 100%;
    position: absolute;
  }
  .pic-a>img{
    width: 100%;
    clip-path: circle(50%);
    margin: 20px 0;
  }
  .pic-b{
    position: relative;
    width: 80%;
    height: 75%;
  }
  .pic-b>.img-b{
    width: 90%;
    position: absolute;
    bottom: 10px;
  }
  .back_img{
    z-index: 10;
    width: 100%;
    height: 90%;
  }
  .firstH2{
    text-align: right;
    margin: 0 20px;
  }
  .secondH2{
    margin: 0 20px;
  }
  h2{
    font-family: 'Neucha', cursive;
  }
</style>
