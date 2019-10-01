<template>
<div>
<div class="book">
  <div class="container">
    <div class="content">
      <div class="flip-book-container" src="example.pdf">
      </div>
    </div>
  </div>
</div>
    <div style="width: 1px; height: 2000px">

    </div>
</div>

</template>
<script>
export default {
  data() {
    return {
    //   isActive: "flip-book-container",
    };
  },
  props: {
    theme: {
      type: String,
      content: "content"
    }
  },
  beforeCreate() {
    console.log(localStorage.getItem("bull"));
    var bull = !localStorage.getItem("bull");
    localStorage.setItem("bull", bull);


    if (bull) {
      window.location.reload();
    } else {
      localStorage.removeItem("bull");
    }
  },


};
</script>
<style >
.flipbook .viewport {
  width: 90vw;
  height: 90vh;
}
.content {
  max-width: 1200px;
  height: 90vh;
  margin: 0 auto;
  padding-top: 3rem;
  margin-bottom: 1rem;
}
.flip-book-container {
  width: 100%;
  height: 100%;
}
.book{
    background-image: url(/src/assets/img/background_1.png);
    background-size: 100%;
    background-position: bottom;
}
</style>

