<template>
    <div>
      <div class="picPage">
        <img src="src/assets/img/images/design1.png">
        <div class="pic-b" v-for="(item, index) in arr" :key="index" :class="index %2==0 ? 'central': ''">
          <img :src="item.href" alt="img" class="onePic" >
          <div class="itemDescription">
            <h5>{{item.title}}</h5>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                name: "Example1.vue",
                arr:  [
                    {
                        title: "Animals animal  animals",
                        href: "src/assets/img/baby.jpg"
                    },
                    {
                        title: "Baby  baby beby beby",
                        href: "src/assets/img/baby.jpg",
                    },
                    ]
                }
            }
        }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');
  .picPage{
    margin-top: 5rem !important;
    width: 600px;
    height: 850px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-image: url("/src/assets/img/images/background2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: right;
    justify-content: space-between;
    position: relative;
  }
  .picPage>img{
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .pic-b{
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 2rem 1rem;
  }
  .onePic{
    width: 22rem;
    margin: 3rem 0;
  }
  .central{
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
  .picPage h5{
    padding: 1rem;
    word-wrap: wrap;
  }
  .itemDescription{
    width: 16rem;
    height: 17rem;
    display: flex;
    align-items: center;
    font-family: 'Courgette', cursive;
  }
</style>
