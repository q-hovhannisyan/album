<template>
    <div>
      <div class="picPage">
        <div class="backdrop">
          <p class="text screen">Taitō</p>
        </div>
        <h3 class="firstTitle">{{arr[0].title}}</h3>
        <div class="content row">
          <div class="pic " v-for="(item, index) in arr" :key="index" >
          <img :src="item.href" alt="img" class="onePic" >
          <div class="itemDescription">
            <h4>{{item.title}}</h4>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                arr:  [
                      {
                          title: "Animals animal  animals ana nnam anamaa na",
                          href: "src/assets/img/friends.jpg"
                      }
                      ],
                name: "Example2.vue"
            }
        },
    }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
  .backdrop {
    background: url("/src/assets/img/friends.jpg") center;
    background-size: 100%;
    width: 100%;
  }
  .text {
    font: bolder 12vw "Alfa Slab One";
    text-align: center;
    margin: 0;
    border: 4px solid;
    padding: 75px 0;
  }
  .multiply {
    color: white;
    mix-blend-mode: multiply;
    background-color: rgba(59, 2, 6, 1);
  }
  .screen {
    color: black;
    mix-blend-mode: screen;
    background-color: rgb(204, 188, 172);
  }
  .picPage{
    margin-top: 5rem !important;
    width: 600px;
    height: 850px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-image: url("/src/assets/img/images/abstract2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .picPage>h3{
    font-family: 'Acme', sans-serif;
    margin: 20px 0;
    color: #865959;
  }
  .itemDescription>h4{
    font-family: 'Acme', sans-serif;
    margin: 20px 0;
    color: #865959;
    text-align: right;
  }
  .pic{
    width: 90%!important;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    left: 1.8rem;
    padding: 90px 0;
  }
  .onePic{
    width: 60%!important;
    height: 100%!important;
    margin: 5px!important;
  }
  .content{
    flex-direction: column;
  }
  .firstTitle{
    margin: 0 auto;
  }
  .itemDescription{
    right: 0;
    width: 40%;
  }
</style>
