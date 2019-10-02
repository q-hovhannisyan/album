<template>
  <div id="app">
      <navigation></navigation>
      <router-view></router-view>
      <foot class="foo"></foot>
    </div>
</template>
<script>
import Navigation from "./components/Navigation.vue"
import Foot from "./components/Foot.vue"
export default {
  name: 'app',
  data () {
    return {
      // portfolioPosts,
     }
  },
 components : {
   Navigation,
   Foot
 },
}
</script>
<style>
.no-scroll{
  overflow: hidden;
}
#app{
  margin: 0 auto;
  justify-content: center;
  /*text-align: center;*/
  /* background-color: rgb(157, 170, 184);  */
    position: relative;
    height: auto;
  display: flex;
  flex-direction: column;
  /* background: url("assets/img/back.jpg") no-repeat; */
}
a, button{
  outline: none !important;
}
a:hover{
  text-decoration: none !important;
}
ul {
  list-style-type: none;
  padding: 0;
}
  .foo{
    position: relative;
    bottom: 0;
    /* top: 20px; */
  }
</style>
