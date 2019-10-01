<template>
  <div>
    <div class="all">
      <h1>Wedding</h1>
      <img :src="url" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      url: './src/assets/img/images/wed.jpg'
    }
  }
}
</script>
<style >
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
  .all{
    margin: 4rem auto;
    width: 600px;
    height: 850px;
    background-image: url('/src/assets/img/images/wedding-background.jpg');
    background-repeat: no-repeat;
    text-align: center;
  }
  .all h1{
    margin-top: 1rem;
    text-align: center;
    font-size: 4rem;
    font-family: 'Pacifico', cursive;
    position: absolute;
    margin: 0 auto;
    top: 17rem;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 7;
  }
  .all img{
    width: 30%;
    height: 35%;
    top: 13.5rem;
    position: relative;
  }
</style>
