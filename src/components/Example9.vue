<template>
  <div class="picPage-a">
    <div class="topWrapper">
      <div class="topContainer">
        <div class="imagesWrapper">
          <img src="src/assets/img/friends.jpg" alt="" class="images1">
          <h1>A design is a plan</h1>
        </div>
        <div class="element1"></div>
        <div class="element2"></div>
      </div>
    </div>
    <div class="bottomWrapper">
      <div class="bottomImagesWrapper">
        <div class="imagesBt">
          <img src="src/assets/img/friends.jpg" alt="" class="images2">
          <div class="text">

          </div>
          <div class="text2">
            A design is a plan
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Example9.vue"
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  *{
    margin: 0;
    padding: 0;
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
    background-image: url("/src/assets/img/images/images.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 1px solid rgb(235, 235, 235);
  }


  .images1{
    width: 100%;
  }
  .topWrapper{
    display: flex;
    justify-content: center;
    padding-top: 50px;
  }
  .topContainer{
    width: 70%;
    position: relative;
    z-index: 20;
    background-color: #fff;
  }
  .imagesWrapper>h1{
    margin: 15px;
    color: #32626b;
    /* font-family: 'Ubuntu', sans-serif; */
  }
  .element1{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: aliceblue;
    top: 40px;
    right: -40px;
    z-index: 2;
    box-shadow: 0px 0px 41px -26px rgba(0,0,0,0.75);
  }
  .element2{
    content: '';
    position: absolute;
    width: 119px;
    height: 130%;
    background: rgb(147, 169, 187);
    top: -21px;
    left: -40px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 8px;
    color: #fff;
    /* font-family: 'Ubuntu', sans-serif; */
  }
  .imagesWrapper{
    box-shadow: 0px 0px 35px -26px rgba(0,0,0,0.75);
    position: relative;
    z-index: 20;
    background-color: #fff;
    height: 100%;
    width: 100%;
  }
  .images2{
    width: 70%;
    position: relative;
    z-index: 1;
    box-shadow: 0px 0px 41px -26px rgba(0,0,0,0.75);
  }
  .imagesBt{
    padding: 3rem 0;
    position: absolute;
    bottom: 0;
  }
  .text{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 55%;
    padding: 15px;
    background-color: #3d7884;
    background-image: url("/src/assets/img/images/11.jpg");
    background-size: cover;
    background-position: right;
    color: #fff;
    margin: 0 20px 20px 0;
  }
  .text2{
    position: absolute;
    right: 0;
    background-color: #fff;
    padding: 30px 10px;
    top: 120px;
    width: 200px;
    z-index: 22;
    box-shadow: 0px 0px 41px -26px rgba(0,0,0,0.75);
  }
</style>
