<template>
  <div>
    <div class="picPage-a">
      <div class="pic-a" v-for="(item, index) in arr" :key="index" :class="index %2==0 ? 'central': ''">
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
    return {
        arr: [
              {
                  title: "Animals animal  animals",
                  href: "src/assets/img/friends.jpg"
              },
              {
                  title: "Baby  baby beby beby",
                  href: "src/assets/img/friends.jpg",
              },
              {
                  title: "Travel traveling travellers",
                  href: "src/assets/img/friends.jpg",
              },
            ],
        }
    },
}
</script>
<style scoped>
.picPage-a{
    margin-top: 5rem !important;
    width: 600px;
    height: 850px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-image: url("/src/assets/img/images/background1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .pic-a{
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 1.3rem 1rem;
  }
  .onePic{
    width: 22rem;
    height: 13rem;
    margin: 1rem 0;
    border-radius: 0 90px;
  }
.central{
 justify-content: flex-start;
 flex-direction: row-reverse;
}
.picPage-a h5{
  padding: 2rem;
  word-wrap: wrap;
  font-family: 'Courgette', cursive;
}
  .itemDescription{
    width: 16rem;
    height: 13rem;
    align-items: center;
    display: flex;
  }
</style>
