<template>
  <div>
    <div class="business">
      <h1>Business</h1>
    </div>
  </div>
</template>
<script>
    export default {
        name: "Business.vue"
    }
</script>

<style scoped>
  .business{
    margin: 4rem auto;
    width: 600px;
    height: 850px;
    background-image: url('/src/assets/img/images/business3.jpg');
    background-repeat: no-repeat;
    z-index: 2;
    border: 0.3px solid lightblue;
    position: relative;
    background-size: cover;
  }
  .business h1{
    margin-top: 1rem;
    text-align: center;
    font-size: 8rem;
    position: absolute;
    top: 12rem;
    bottom: 0;
    left: 0;
    right: 0;
    color: #3a3a3a;
    z-index: 5;
    text-shadow: 2px 2px 8px #FF0000;
  }
</style>
