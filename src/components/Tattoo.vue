<template>
  <div>
    <div class="tattoo">
      <h1>Tattoo</h1>
    </div>

  </div>
</template>
<script>
    export default {
        name: "Tattoo.vue"
    }
</script>
<style scoped>
  .tattoo{
    margin: 4rem auto;
    width: 600px;
    height: 850px;
    background-image: url('/src/assets/img/images/tattoo-1.jpg');
    background-repeat: no-repeat;
    z-index: 2;
    border: 0.3px solid lightblue;
    position: relative;
    background-size: cover;
  }
  .tattoo h1{
    margin-top: 1rem;
    text-align: center;
    font-size: 8rem;
    position: absolute;
    top: 12rem;
    bottom: 0;
    left: 0;
    right: 0;
    color: #FF0000;
    z-index: 5;
    letter-spacing: 23px;
    text-shadow: 10px 6px 6px #2a2a2a;
  }
</style>
