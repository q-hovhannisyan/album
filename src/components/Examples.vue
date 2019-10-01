<template>
    <div class="menu-examples">
        <div class="menu">
            <router-link to="/group1">
                <a class="nav-link1 nav-link2" href="#">Group one <span class="sr-only">(current)</span></a>
            </router-link>
            <router-link to="/group2">
                <a class="nav-link1 nav-link2" href="#">Group two <span class="sr-only">(current)</span></a>
            </router-link>
            <router-link to="/example2">
                <a class="nav-link1 nav-link2" href="#">Group tree <span class="sr-only">(current)</span></a>
            </router-link>
            <router-link to="/example2">
                <a class="nav-link1 nav-link2" href="#">Group four <span class="sr-only">(current)</span></a>
            </router-link>
        </div>
      <!-- <router-view name="a"></router-view> -->

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .router-link-active a{
        background-color: #f2f2f2;
    }
    .menu-examples{
        position: sticky;
        width: 250px;
        top: 77px;
        border: 1px solid #d4d4d4;
        overflow: hidden;
        height: 90vh;
    }
    .menu{
        display: flex;
        flex-direction: column;
    }
    .nav-link1{
        /* width: 248px; */
        padding: 10px 15px;
        display: block;
        background-color: rgb(255, 255, 255);
        color: #15273e;
        border-bottom: 1px solid #d4d4d4;
        transition: 0.2s;
    }
    .nav-link1:hover{
        background-color :#f2f2f2;
    }
</style>