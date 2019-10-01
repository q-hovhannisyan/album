<template>
    <div class="container" style="margin-top: 77px;">
        <div class="row">
             <div class="col-3">
                <examples></examples>
            </div>
            <div class="col-9 examples">
                <baby-first></baby-first>
                <hr>
                <example1></example1>
                <hr>
                <example2></example2>
                <hr>
                <example3></example3>
                <hr>
                <example4></example4>
            </div>
        </div>
    </div>
</template>

<script>
import BabyFirst from "../group1/BabyFirst"
import Example1 from "../group1/Example1"
import Example2 from "../group1/Example2"
import Example3 from "../group1/Example3"
import Example4 from "../group1/Example4"
import Examples from "../Examples"

export default {
   components: {
       Example1,
       Example2,
       Example3,
       Example4,
       Examples,
       BabyFirst
   } 
}
</script>

<style  scoped>
    .examples{
        border: 1px solid #d4d4d4;
        /* margin-top: 77px; */
    }
</style>