<template>
  <div>
    <div class="baby">
      <img src="/src/assets/img/images/baby-word.png" alt="">
      <div class="babyDown">
      <h3 class="downTitle">Photo Gallery</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        counter: 0
    }
  }
}
</script>
<style lang="">
  .baby{
    margin: 4rem auto;
    width: 600px;
    height: 850px;
    background-image: url('/src/assets/img/images/baby-pic.jpg');
    background-repeat: no-repeat;
    z-index: 2;
    border: 0.3px dashed lightblue;
    position: relative;
  }
  .baby img{
    position: relative;
    top: 5rem;
    width: 100%;
    height: 70%;
  }
  .downTitle{
    position: relative;
    font-size: 3rem;
    font-weight: 800;
    color: darkturquoise;
    bottom: 0;
    text-shadow: 2px 2px 8px #222222;
  }
  .babyDown{
    width: 200px;
    height: 120px;
    position: absolute;
    bottom: 0;
    left: 2rem;
  }
</style>
