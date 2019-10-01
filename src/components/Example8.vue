<template>
    <div class="picPage-a">
      <img src="src/assets/img/images/design-wave.png" alt="" class="wave">
      <div class="wraper">
        <h3 class="firstH3">A great place to wor</h3>
        <img src="src/assets/img/friends.jpg" alt="">

        <img src="src/assets/img/friends.jpg" alt="">
        <h3 class="secondH3">Party day today</h3>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Example8.vue"
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap');

  .picPage-a{
    margin-top: 5rem !important;
    width: 600px;
    height: 850px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-image: url("/src/assets/img/images/background4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 1px solid lightcyan;
  }
  .wraper{
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin: 20px 15px;
  }
  .wraper>img{
    width: 70%;
    border-width: 5px;
    border-style: ridge;
    border-color: lightblue;
  }

  .wraper img:nth-child(2){
    bottom: 0;
    right: 0;
    position: absolute;
  }
  .firstH3{
    margin: 2rem 1rem;
    font-family: 'Patrick Hand', cursive;

  }
  .secondH3{
    position: absolute;
    top: 55%;
    right: 4rem;
    font-family: 'Patrick Hand', cursive;
  }
  .wave{
    position: absolute;
    width: 100%;
    top: 45%;
  }
</style>
