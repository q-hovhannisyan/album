<template>
    <div class="container" style="margin-top: 77px;">
        <div class="row">
             <div class="col-3">
                <examples></examples>
            </div>
            <div class="col-9 examples">
                <first-page></first-page>
                <hr>
                <example5></example5>
                <hr>
                <example6></example6>
            </div>
        </div>
    </div>
</template>

<script>
import FirstPage from "../group2/FirstPage"
import Example5 from "../group2/Example5"
import Example6 from "../group2/Example6"

import Examples from "../Examples"

export default {
   components: {
       FirstPage,
       Example5,
       Example6,
       Examples,
   } 
}
</script>

<style  scoped>
    .examples{
        border: 1px solid #d4d4d4;
    }
</style>