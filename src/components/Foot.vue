<template>
    <!-- Footer -->
    <footer class="foot">
        <div class="container">
            <div class="row">
                <div class="col-12 mt-5 mb-5">
                    <div class="d-flex justify-content-center m-4">
                        <img src="/src/assets/icons/facebook.png" width="40" class="icons mr-4" alt="">
                        <img src="/src/assets/icons/instagram.png" width="40" class="icons mr-4" alt="">
                        <img src="/src/assets/icons/twitter.png" width="40" class="icons" alt="">
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- Copyright Info -->
                    <div class="col-4 text-center">
                        <a class="font-weight-bold small kf-blue kf-links" href="#">Link1</a> |
                        <a class="font-weight-bold small kf-blue kf-links" href="/">Link2</a> |
                        <a class="font-weight-bold small kf-blue kf-links" href="/">Link3</a>
                    </div>
                    <div class="col-4 text-center">
                        <p>© Copyright 2019</p>
                    </div>
                    <div class="col-4 text-center small">
                        Crafted with Love by <a class="font-weight-bold kf-blue kf-links" href="#" target="_blank">Me</a>
                    </div>
                <!-- END Copyright Info -->
            </div>
        </div>
        <div class="end pt-3 pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <img src="/src/assets/976.png" width="120" alt="">
                    </div>
                </div>                
            </div>
        </div>
    </footer>
    <!-- END Footer -->
</template>
<script>
export default {
    data(){
        return{
        }
    }
}
</script>
<style scoped>
.foot{
    background-image: url(/src/assets/img/footer1.jpg);
    /* background-size: 100%; */
    background-position: top center;
    color: #fff;
    margin-top: -1px;
}
.end{
    width: 100%;
    background-color: rgba(90, 106, 130, 0.5);
}
</style>
