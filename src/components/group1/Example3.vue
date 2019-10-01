<template>
    <div>
      <div class="picPage">
        <div class="upImgWrapper">
          <img src="src/assets/img/friends.jpg" alt="" class="upImg">
        </div>
        <div>
          <img src="src/assets/img/images/design2.png" class="design">
        </div>
        <div class="downImg">
          <div class="downImgWrapper">
            <img src="src/assets/img/friends.jpg" class="img1" >
            <h2 class="textPosition">A great place to wor</h2>
          </div>
          <div class="text">
            <h2>Create your free account</h2>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                name: "Example3.vue",
                href: "src/assets/img/design2.png"
            }
        }
    }
</script>
<style scoped>
  .picPage{
    margin-top: 5rem !important;
    border: 1px solid #ececec;
    width: 600px;
    height: 850px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: right;
    justify-content: space-between;
    position: relative;
  }
  .upImgWrapper{
    width: 100%;
  }
  .upImg{
    width: 100%;
  }
  .design, .textPosition{
    position: absolute;
    top: 46%;
    width: 100%;
    left: 0;
    transform: translateY(-50%);
  }
  .textPosition{
    color: #fff;
    font-family: 'Courgette', cursive;
  }
  .downImg{
    display: flex;
    margin: 20px 10px;
  }
  .downImgWrapper{
    width: 60%;
  }
  .text{
    padding: 0 10px;
    width: 40%;
    display: flex;
    align-items: center;
  }
  .text>h2{
    color: #46a5af;
    font-family: 'Courgette', cursive;
  }
  .img1{
    width: 100%;
  }
</style>
