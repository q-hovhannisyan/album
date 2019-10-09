import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import BootstrapVue from 'bootstrap-vue'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueImg from 'v-img'
import fullscreen from 'vue-fullscreen'
import Muuri from 'muuri'

import AOS from 'aos'
import 'aos/dist/aos.css'

// import Sortable from 'vue-sortable'
global.$ = jQuery
global.jQuery = jQuery
window.host = "http://127.0.0.1:8000/";
window.alert=new Vue();
window.alerte=new Vue();
Vue.use(BootstrapVue);
// Vue.use(VueImg);
Vue.use(fullscreen);

new Vue({
  el: '#app',
  created () {
    AOS.init({
      duration: 800,
    })
  },
  router,
  render: h => h(App)
})

// const vueImgConfig = {
//   // Use `alt` attribute as gallery slide title
//   altAsTitle: true,
//   // Display 'download' button near 'close' that opens source image in new tab
//   sourceButton: false,
//   // Event listener to open gallery will be applied to <img> element
//   openOn: 'click',
//   // Show thumbnails for all groups with more than 1 image
//   thumbnails: false,
// }

// Vue.use(Sortable);
// const grid = new Muuri('.grid', {dragEnabled: true});

