<template>
    <div class="photo">
        <Gallery :images="images" >
        </Gallery>
    </div>
</template>
<script>
import Gallery from "vue-cover-gallery"
export default {
    data(){
        return{
            images: [
            {
            title: "title title",
            href: "src/assets/img/lion.jpg"},
            {
             title: "title 2",
            href: "src/assets/img/cars.jpg"
            },
            {
             title: "title 2",
            href: "src/assets/img/friends.jpg"
            },
            {
             title: "title 2",
            href: "src/assets/img/lion.jpg"
            },
            {
             title: "title 2",
            href: "src/assets/img/cars.jpg"
            },
            {
             title: "title 1",
            href: "src/assets/img/lion.jpg"
            },
            {
             title: "title 2",
            href: "src/assets/img/cars.jpg"
            },
     ],
    // images: [],
        }
    },
    components: {
        Gallery,
    },
    methods: {
        send(){
            this.$emit("images", this.images);
        }
    },
    // computed(){
    //   alerte.$on("clickOn", images =>{
    //       this.images = images;
    //       console.log("jfhjfjjhfj", this.images)
    //   })
    // },
}
</script>
<style>
.photo{
    width: 100%;
    padding-top: 3.5rem;
}
</style>

