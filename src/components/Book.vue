<template>
    <div class="book">
        <div class="content" >
            <div class="flip-book-container" src="example.pdf">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            images: [],
        }
    },
    props: {
        theme:{
            type: String,
            content: 'content',
        }
    },
    created(){
        alerte.$on("clickOn", images => {
            this.images = images;
            console.log( "Img", this.images)
        })
    },
    beforeCreate() {
        console.log(localStorage.getItem('bull'));
        var bull = !localStorage.getItem('bull');
        localStorage.setItem('bull', bull)
    if (bull) {
          window.location.reload();
    } else {
        localStorage.removeItem('bull');
    }
  },
}
</script>
<style>
.flipbook .viewport {
    width: 90vw;
    height: 90vh;
}
.content{
    max-width: 1200px;
    height: 90vh;
    margin: 0 auto;
}
.flip-book-container{
    width: 100%;
    height: 100%;
}
.book{
    width: 100%;
    padding-top: 4rem;
    background-image: url(/src/assets/img/background_1.jpg);
    background-size: 100%;
    background-position: bottom;
}
</style>
