<template>
    <div class="bg_img">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="reg" data-aos="fade-down">
                        <!-- <button type="button" class="close btn-outline-danger" data-dismiss="modal" @click="closeModal">&times;</button> -->
                        <h1>Registration User</h1>

                        <div class="boxx">
                            <div class="form-group row labs">
                                <label for="Input Name" class=" col-form-label col-form-label-lg">Name</label>
                                <div class="inputDiv">
                                    <input type="text" class="logInput" :class="{ danger_inp: danger_n }"  placeholder="Input Name" v-model="name">
                                    <p class="danger-text" v-show="danger_n">{{danger_name}}</p>
                                </div>
                            </div>
                            <div class="form-group row labs">
                                <label for="Input email" class=" col-form-label col-form-label-lg">Email</label>
                                    <div class="inputDiv">
                                        <input type="email" class="logInput" :class="{ danger_inp: danger_e }" placeholder="Input email" v-model="email">
                                        <p class="danger-text" v-show="danger_e">{{danger_email}}</p>
                                    </div>
                            </div>
                            <div class="form-group row labs">
                                <label for="Input Password" class=" col-form-label col-form-label-lg">Password</label>
                                    <div class="inputDiv">
                                        <input type="password" class="logInput" :class="{ danger_inp: danger_p }"  placeholder="Input Password" v-model="password">
                                        <p class="danger-text" v-show="danger_p">{{danger_pass}}</p>
                                    </div>
                            </div>
                            <div class="form-group row labs">
                                <label for="Confirm Password" class=" col-form-label col-form-label-lg">ConfirmPass</label>
                                    <div class="inputDiv">
                                        <input type="password" class="logInput" :class="{ danger_inp: danger_cp }" placeholder="Confirm Password" v-model="password_confirmation">
                                        <p class="danger-text" v-show="danger_cp">{{danger_confp}}</p>
                                    </div>
                            </div>
                            <button type="button" class="sub mr-4" @click="signup">Sign Up</button>
                        </div>
                        <div class="creat" @click="login"> Login an account</div>
                        <!-- <button type="button" class="sub" @click="login">Login</button> -->
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
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            danger_name: 'Enter your Name',
            danger_email: 'Enter email address',
            danger_pass: 'Enter your password',
            danger_confp: 'Confirm your password',
            danger_e: false,
            danger_n: false,
            danger_p: false,
            danger_cp: false,
            reg: '',
            token: '',
        }
    },
    methods: {
        signup(){
            if (!this.name) {
                this.danger_n=true;
            } else {
                this.danger_n=false;
            }
            if (!this.email) {
                this.danger_e=true;
            } else if (!this.validateEmail()){
                this.danger_e = true;
                this.danger_email = 'Enter valid email';
            } else {
                this.danger_e = false;
            }
            if (!this.password){
                this.danger_p=true;
            } else {
                this.danger_p=false;
            }
            if(!this.password_confirmation){
                this.danger_cp=true;
            } else if (this.password_confirmation!== this.password){
                this.danger_confp = 'Enter valid password';
            } else {
                this.danger_cp=false;
            axios({
                    url: 'http://127.0.0.1:8000/register',
                    method: 'post',
                    headers: {'Content-Type': 'text/plain ; charset=utf-8'},
                    data: {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    },
                })
                .then((response)=>{
                    this.reg=response;
                    this.token=response.data.Token;
                    this.$router.push("/user");
                    localStorage.setItem("token", this.token);
                    localStorage.setItem("name", response.data.name);
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        },
        validateEmail() {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(this.email).toLowerCase());
        },
        login(){
            this.$router.push("/login");
        },
        closeModal(){
            this.$router.push("/");
        }
    }
}
</script>
<style scoped>
.row{
    margin-right: 0 !important;
    margin-left: 0 !important    
}
.bg_img{
    background-image: url(/src/assets/img/bg_login.jpg);
    background-size: 100%;
    background-position: top center;
}
.labs{
    display: flex;
    flex-direction: column;
}
.labs label{
    font-size: 16px;
}
.danger-text{
    color: #f76565;
    text-align: start;
    width: 250px;
}
.reg{
    margin-top: 12vh !important;
    margin-bottom: 12vh !important;
    margin: 0 auto;
    position: relative;
    background-color: #fff;
    padding: 40px;
    width: 50%;
    border: 1px solid #f6f9fe;
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
.sub{
    background-color: #00afef;
    color: #fff;
    border: none;
    padding: 5px 24px;
    font-size: 18px;
    margin-top: 30px;
}
.inputDiv{
    /* margin: 0 auto; */
}
.boxx{
    margin: 0 auto;
    padding: 0 40px;
}
label{
    color: darkslategrey;
    width: 200px;
}
.btn{
    margin-top: 20px;
}
.reg>h1{
    font-size: 34px;
    color: #345a62;
    margin-bottom: 20px;
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

