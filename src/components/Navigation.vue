<template>
        <div class="bg_color_menu" :class="{ active2: scrolled }">
            <div class="container">
<!--          nav start-->
            <nav class="navbar navbar-expand-lg navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
<!--              links-->
                 <router-link to="/">
                    <a class="navbar-brand" href="#">
                        <!-- Home -->
                        <img src="/src/assets/976.png" width="120" alt="">
                    </a>
                </router-link>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <router-link to="/photo">
                        <li class="nav-item active mr-4">
                            <a class="nav-link1 nav-link2" href="#"> Gallery <span class="sr-only">(current)</span></a>
                        </li>
                    </router-link>
                    <router-link to="/book">
                        <li class="nav-item active mr-4">
                            <a class="nav-link1 nav-link2" href="#">Book <span class="sr-only">(current)</span></a>
                        </li> 
                    </router-link>
                    <router-link to="/group1">
                        <li class="nav-item active mr-4">
                            <a class="nav-link1 nav-link2" href="#">Examples <span class="sr-only">(current)</span></a>
                        </li> 
                    </router-link>
<!--                      dropdown-->
                        <!-- <b-dropdown id="dropdown-1" text="Examples" class="">
                          <b-dropdown-item><router-link to="/first-page">
                            <a class="nav-link" href="#">Wedding <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/baby-first">
                            <a class="nav-link" href="#">Baby <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/travel">
                            <a class="nav-link" href="#">Travel <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/business">
                            <a class="nav-link" href="#">Business <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/tattoo">
                            <a class="nav-link" href="#">Tattoo <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>

                          <b-dropdown-divider></b-dropdown-divider>
                          <b-dropdown-item><router-link to="/example1">
                            <a class="nav-link" href="#">Other Page1 <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/example2">
                            <a class="nav-link" href="#">Other Page2 <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/example3">
                            <a class="nav-link" href="#">Other Page3 <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/example4">
                            <a class="nav-link" href="#">Other Page4 <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/example5">
                            <a class="nav-link" href="#">Other Page5 <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/example6">
                            <a class="nav-link" href="#">Other Page6 <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/example7">
                            <a class="nav-link" href="#">Other Page7 <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/example8">
                            <a class="nav-link" href="#">Other Page8 <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/example9">
                            <a class="nav-link" href="#">Other Page9 <span class="sr-only">(current)</span></a>
                          </router-link></b-dropdown-item>
                          </b-dropdown> -->

                    </ul>
                    <ul class="navbar-nav  mt-2 mt-lg-0">
                    <router-link to="/user"><li class="nav-item active mr-4">
                        <a class="nav-link pt-0 pb-0" id="ico" href="#">{{name}}
                            <img src="/src/assets/icons/user.svg" alt="" class="userIcon ml-2" v-if="token ? logoutUser: ''"> <span class="sr-only">(current)</span></a>
                        <i class="fas fa-user"></i>
                    </li></router-link>
                    </ul>
                        <button class="nav-link1 border-2 mr-2 my-2 my-sm-0" type="submit" @click="logOut" v-if="token ? logoutUser: ''">Log Out</button>
                        <!-- <button class="nav-link1 border-2 mr-2 my-2 my-sm-0" type="submit" @click="reg" v-if="token==null?loginUser : ''">{{msg}}</button> -->
                        <button class="nav-link1 border-2 mr-2 my-2 my-sm-0" type="submit" @click="login" v-if="token==null?loginUser : ''">Login</button>
                    <form class="form-inline my-2 my-lg-0">
                    <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
                    <button class="btn_menu_search my-2 my-sm-0 position-relative d-flex align-items-center" type="submit">
                        <img src="/src/assets/icons/search.png" alt="" @click="open_search">
                    </button>
                    </form>

                </div>
            </nav>
<!--          nav end-->
        </div>
            <div class="search_modal" :class="{open_search_modal : open_s}">
                <div class="s_modal">
                   <input type="text" class="search_input" placeholder="Search ...">
                    <div class="close" @click="closeSearch">&times;</div> 
                </div>
            </div>
        </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            msg: "Sign Up",
            loginUser: true,
            logoutUser: true,
            token: localStorage.getItem('token'),
            name: localStorage.getItem('name'),
            scrolled: false,
            open_s: false,
           }
    },
    methods: {
        handleScroll () {
            this.scrolled = window.scrollY > 50;
        },
        closeSearch(){
            this.open_s = false;
        },
        open_search(){
            this.open_s = true;
        },
        reg(){
            this.$router.push('/registration');
        },
        login(){
            this.$router.push("/login");
        },
        logOut(){
            this.loginUser=true;
            this.logoutUser= true;
            ////////

            alert.$on("clickOn", loginUser =>{
               this.loginUser=loginUser
            })
            axios({
                url: 'http://127.0.0.1:8000/logout',
                method: 'post',
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
                data: {
                    token: this.token
                },
            });
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            if(this.$route.path!=='/'){
                this.$router.push('/')
            }
            else{
                window.location.reload()
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    // mounted(){
    //     if(localStorage.getItem('token')!== null){
    //         // console.log(localStorage.getItem('token'), "token kaaa")
    //         alert.$on("clickOn",loginUser=>{
    //                         this.active = loginUser;
    //                     })
    //     }
    //     else {
    //         console.log(localStorage.getItem('token'), "token chhkaa")
    //         alert.$on("clickOn",loginUser=>{
    //             this.loginUser = loginUser;
    //         })
    //     }
    // },
    watch: {
        loginUser(newVal, oldVal){
            console.log(newVal, oldVal)
        }

    },
    // computed:  {
    //
    //     alert.$on("clickOn", loginUser =>{
    //         this.loginUser=loginUser
    //         console.log(loginUser)
    //     })
    //
    // },


}
</script>
<style scoped>
.search_modal{
    padding: 5px 5px 5px 20px;
    position: fixed;
    background: #fff;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    background-color: rgba(0,0,0,0.9)
    /* transform: scale(0); */
}
.close{
    color: #fff;
    cursor: pointer;
    font-size: 30px;
}
.s_modal{
    padding: 20px 30px;
    display: flex;
    align-items: center;
    background-color: rgb(0, 0, 0);
}
.open_search_modal{
    /* transform: scale(1); */
    visibility: visible;
    opacity: 1;
}
.search_input{
    border: none;
    outline: none;
    width: 300px;
    color: #fff;
    background-color: transparent;
    font-size: 22px;
}
.search_input::placeholder{
    color: rgb(134, 134, 134);
}
.active2{
    background-color: #f1f1f1 !important;
    border-bottom: 1px solid #d4d4d4;
}
.bg_color_menu{
    background-color: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    transition: .4s;
    z-index: 9999;
}
.btn_menu_search{
    background-color: transparent;
    border: none;
}
.nav-link1{
    border: none;
    background-color: transparent;
    color: #15273e;
    font-weight: 900;
    border: 2px solid transparent;
    transition: .4s;
}
.nav-link2{
    padding: 6px 1px;
    border-bottom: 2px solid transparent;
}
.nav-link2:hover{
    border-bottom: 2px solid #15273e;
}
.border-2{
    background-color: #15273e;
    color: #fff;
    border-radius: 5px;    
    word-spacing: 1;
}
.border-2:hover{
    border: 2px solid #15273e;
    color: #15273e;
    background-color: transparent;
}
.container{
    /* display: inline-block; */
    /* position: fixed; */
    /* margin: 0 auto;
    z-index: 10;
    width: 100%; */
}
.navbar{
    width: 100% !important;
}
nav a{
     color: #1a1a1a !important;
}
.container-fluid{
    padding-right: 0;
    padding-left: 0;
    position: fixed;
    z-index: 30;
    top: 0;
}
  #dropdown-1 a{
    color: #0aa095;
  }
    .fas{
        color: #0aa095 !important;
    }
    .userIcon{
        width: 32px;
    }
    #ico{
        color: #0aa095 !important;
        font-weight: 800 !important;
    }
</style>



