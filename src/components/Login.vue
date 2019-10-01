<template>
    <div class="bg_img">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="log" data-aos="fade-down">
                        <!-- <button type="button" class="close btn-outline-danger" data-dismiss="modal" @click="closeModal">&times;</button> -->
                        <h1>Login</h1>
                        <div class="inputbox">
                            <div class="form-group row labs">
                                <label for="Input Name" class="col-form-label col-form-label-lg mr-4 ">Username </label>
                                <div class="inp">
                                <input type="text" class="logInput" :class="{ danger_inp: danger_em }"  placeholder="Input email address" v-model="email">
                                <p class="danger-text" v-show="danger_em">{{danger_e}}</p>
                                </div>
                            </div>
                            <div class="form-group row labs">
                                <label for="Input Password" class="col-form-label col-form-label-lg mr-4 ">Password </label>
                                <div class="inp">
                                <input type="password" class="logInput" :class="{ danger_inp: danger_pas }"  placeholder="Input Password" v-model="password">
                                <p class="danger-text" v-show="danger_pas">{{danger_password}}</p>
                                <p class="danger-text" >{{userError}}</p>
                                </div>
                            </div>
                            <button type="button" class="sub" @click="loginTo">Login</button>
                        </div>
                        <div class="creat" @click="signun"> Create an account</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            reg: '',
            email: null,
            password: null,
            danger_em: false,
            danger_pas: false,
            danger_e: 'Enter email address',
            danger_password: 'Enter your password',
            loginUser: false,
            userError: '',
        }
    },
    methods: {
        loginTo(){
            if(!this.email){
                this.danger_em=true;
            } else if (!this.validateEmail()){
                this.danger_em=true;
                this.danger_e= 'Enter valid email';
            } else{
                this.danger_em=false;
            }
            if(!this.password){
                this.danger_pas=true;
            } else{
                this.danger_pas=false;

                axios({
                    url: 'http://127.0.0.1:8000/login',
                    method: 'post',
                    headers: {'Content-Type': 'application/json ; charset=utf-8'},
                    data: {
                        email: this.email,
                        password: this.password,
                    },
                })
                .then((res)=>{
                    this.reg=res;
                    if(res){
                        localStorage.setItem('name', res.data.name);
                        localStorage.setItem('token', res.data.token);
                        alert.$emit("clickOn", this.loginUser);
                        this.$router.push("/user")
                        console.log(res)
                    }
                })
                .catch((error)=>{
                    this.danger_pas=true;
                    this.userError="Username could not be found."

                })
            }
        },
        signun(){
            this.$router.push("/registration");
        },
        closeModal(){
            this.$router.push("/");
        },
        validateEmail() {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(this.email).toLowerCase());
        },
    }
}
</script>
<style scoped>
.fl-login{
    width: 80%;
    margin-top: 25vh
}
.bg_img{
    background-image: url(/src/assets/img/bg_login.jpg);
    background-size: 100%;
    background-position: bottom;
}
.danger-text{
    color: #f76565;
    text-align: start;
    width: 220px;
}
.log{
    margin-top: 25vh !important;
    margin-bottom: 25vh !important;
    margin: 0 auto;
    position: relative;
    background-color: #fff;
    padding: 40px;
    width: 50%;
    border: 1px solid #f6f9fe;
}
.log>h1{
    font-size: 34px;
    color: #345a62;
    margin-bottom: 20px;
}
.sub{
    background-color: #00afef;
    color: #fff;
    border: none;
    padding: 5px 24px;
    font-size: 18px;
}
.logInput{
    width: 100%;
    border: none;
    border-bottom: 2px solid #00afef;
    outline: none;
    padding: 10px 0;
    transition: .3s;
}
.danger_inp{
    border-bottom: 2px solid #f76565;
}
.inputbox{
    margin: 0 auto;
    padding: 0 40px;
}
.row{
    margin-right: 0 !important;
    margin-left: 0 !important    
}
label{
    color: darkslategrey;
}
.inp{
    /* left: 15px; */
    justify-content: flex-end;
}
.labs{
    display: flex;
    flex-direction: column;
}
.labs label{
    font-size: 16px;
}
.close{
    position: relative;
    right: 10px;
    width: 30px;
    height: 25px;
    border-radius: 5px;
}
.creat{
    margin-left: -40px;
    margin-right: -40px;
    margin-bottom: -40px;
    margin-top: 30px;
    background-color: #ecf8fc;
    color: #444;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    font-weight: 900;
}
</style>
