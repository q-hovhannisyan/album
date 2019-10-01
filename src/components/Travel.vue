<template>
  <div class="travel">
    <h1>Travel and Tour</h1>
    <img src="/src/assets/img/images/santorini.jpg" alt="" class="first">
    <img src="/src/assets/img/images/travel.jpg" alt="" class="second">
  </div>
</template>
<script>
    export default {
        name: "Travel.vue"
    }
</script>
<style scoped>
  .travel{
    margin: 4rem auto;
    width: 600px;
    height: 850px;
    z-index: 2;
    border: 0.3px solid lightblue;
    position: relative;
  }
  .first, .second {
    width: 100%;
    height: 50%;
  }
  .travel h1{
    position: absolute;
    font-size: 4.5rem;
    align-items: center;
    top: 24rem;
    text-shadow: 10px 6px 6px #2a2a2a;
    color: khaki;
    margin: auto 8%!important;
  }
</style>

