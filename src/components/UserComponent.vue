<template>
    <div class="cont">
        <div class="all">
            <H1>Photo Gallery</H1>
            <div class="upload-btn-wrapper">
                <input type="file" id="files" ref="files" multiple @change="handleFileUploads()">
                <button class="btn btn-danger" @click="onUpload()">Upload Images</button>
            </div>
            <div :class="[ counter == 10 ? 'green' : 'counter']">
                {{counter}}
            </div>
        </div>
        <div class="all-content container">
            <div class="card-deck row " >
<!--           images and id           -->
                <div class="col-lg-4 col-sm-6 photo-item  " v-for="(item, index) in arr" :key="index">
                    <div class="card item-content">
                        <img  :src="`http://127.0.0.1:8000/getImages?token=${token}&imageId=${item}`" class="card-img-top" :alt="item.title" @click="toggle">
                        <div class="card-body d-flex justify-content-between">
                            <input class=" position-static ml-1 check" type="checkbox"  :value="item" v-model="images"  aria-label="...">
                            <b-textarea rows="2" placeholder="Text here..."  v-model="arr[index].value" class=" textar" :value="item"></b-textarea>
                            <!-- <input type="text" v-model="newText" class="hide" @keyup.enter="keyPressed(index, item, $event)" autocomplete="off"> -->
                            <!-- <h6 class="card-title show" @click="myFunction">{{item.title}}</h6> -->
                            <div class="downbtn">
                                <button class="btn btn-success btnPic" @click="addText(arr[index])">Save</button>
                                <button class="btn btn-danger btnPic" @click="arr[index].value='' , arr[index].title=''">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- // -->
            <b-button block variant="dark" class="generate" @click="gen"><h1>GENERATE</h1></b-button>
        </div>
        <div class="pictures" v-if="open">
<!--           <div class="row">-->
<!--               <div v-for="(item, index) in images" :key="index"  class="col-lg-3">-->
<!--                    <div class="card">-->
<!--                            &lt;!&ndash; image click &ndash;&gt;-->
<!--                        <img v-img:group-1 :src="`http://127.0.0.1:8000/getImages?token=${token}&imageId=${item}`" alt="">-->
<!--                        <div class="card-body d-flex justify-content-between generated">-->
<!--                            <h6>{{item.title}}</h6>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--           </div>-->
       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            arr: [
                // {
                //     title: "Animals ",
                //     href: "src/assets/img/lion.jpg"
                // },

            ],
            event: '',
            newText: "",
            images: [],
            href: [],
            open: false,
            selectedFile: null,
            fullscreen: false,
            files: '',
            counter: 0,
            user: localStorage.getItem('name'),
            token: localStorage.getItem('token'),
            email: localStorage.getItem('email'),
        }
    },
    watch: {
      images: function (val) {
          this.counter = val.length;
          if(this.counter == 10 ){
              document.getElementById('counter').style.backgroundColor = green;
          }
      },
    },
    methods: {
        addText(e){
            e.title=e.value;
        },
        toggle () {
            this.$fullscreen.toggle(this.$el.querySelector('.example'), {
                wrap: false,
                callback: this.fullscreenChange
      })
    },
        fullscreenChange (fullscreen) {
            this.fullscreen = fullscreen
    },
        // keyPressed(index, item, event){
        //     if(event.keyCode === 13 ) {
        //         item.title=this.newText;sudo npm
        //         // item.title.appendChild(this.newText);
        //         this.myFunction(event);
        //     }
        // },
        // myFunction(event){
        //     var el1 = event.target.parentElement.getElementsByClassName("hide")[0];
        //     var el2 = event.target.parentElement.getElementsByClassName("show")[0];
        //     el2.classList.remove("show");
        //     el2.classList.add("hide");
        //     el1.classList.remove("hide");
        //     el1.classList.add("show");
        //     this.newText = event.target.innerText;
        // },
        gen(){
            this.open=true;
            alerte.$emit("clickOn", this.images);
        },
        reg(){
            this.$router.push('/registration');
        },
        login(){
            this.$router.push("/login");
        },
        onUpload(){
            // this.selectedFile=event.target;
            let formData = new FormData();
            formData.append('token', this.token);
            formData.append('description', '');
            for( var i = 0; i < this.files.length; i++ ){
                let file = this.files[i];
                formData.append('files[' + i + ']', file);
            }
            axios.post( `${host}upload`, formData,{
                 headers: {
                     'Content-Type': 'multipart/form-data'
                     }
                })
                .then((response)=>{
                    window.location.reload();
                    // this.arr=response;
                    console.log(response, "responce")
                })
                .catch((error)=>{
                    console.log(error);
                })
        },
        handleFileUploads(){
            this.files = this.$refs.files.files;
        },
        // onUpdate: function (event) {
        //     this.arr.splice(event.newIndex, 0, this.arr.splice(event.oldIndex, 1)[0])
        // }
    },
    beforeCreate() {
        var bull = !localStorage.getItem('bull');
        localStorage.setItem('bull', bull)
        if (bull) {
            window.location.reload();
        } else {
            localStorage.removeItem('bull');
        }
    },
    created () {
        axios.get(`${host}getImgId?token=`+this.token, this.token,
            {
                headers: {
                    'Content-Type': 'text/plain'
                }
            }
        )
            .then((response)=>{
                this.arr= response.data.imgId;
            })
            .catch((error)=>{
                console.log(error);
            })
    }
}
</script>
<style scoped>
@media screen and (max-width: 1070px){
    .cardGrid{
        align-items: center;
        margin: 0 auto;
    }
}
.cont{
    width: 100%;
    margin-top: 5rem;
    position: relative;
}
.counter{
    width: 60px;
    height: 60px;
    border: 1px solid grey;
    border-radius: 50%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    position: fixed;
    right: 20px;
    top: 60px;
}
.green{
    background-color: green;
    width: 60px;
    height: 60px;
    border: 1px solid grey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    position: fixed;
    right: 20px;
    top: 60px;
}
.upload-btn-wrapper {
    overflow: hidden;
}
.upload-btn-wrapper input[type=file] {
    left: 0;
    bottom: 0;
}
.card-body{
    padding: 0.5rem;
    text-align: center;
    align-items: center;
    padding-right: 0;
}
.all{
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin-top: 1rem;;
    margin-bottom: 1rem;
}
.all h1{
    color: #28A745;
}
.all-content{
    width: 90%;
    /*height: 24rem;*/
    margin: 0 auto;
    border: 2px solid lightgray;
    background-image: url("/src/assets/img/images/images.jpg");
    margin-bottom: 2rem;
}
.photo-item{
    margin-top: 1.5rem;
    padding-top: 10px;
    box-shadow: 1px 5px 5px grey;
    padding-right: 40px;
}
.generate{
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 4rem;
}
/*.hide {*/
/*    display: none;*/
/*}*/
/*.show {*/
/*    display: block;*/
/*}*/
.textar{
    overflow-y: scroll;
    width: 80%;
    margin-left: 13px;
    margin-right: 4.5rem;
    resize: none;
    overflow: auto;
}
.pictures{
    width: 75%;
    background-color: beige;
    overflow: hidden;
    margin: 0 auto;
}
.card-body{
    padding-bottom: 10px;
}
.card{
    bottom: 7px;
    border: 0.2px solid gainsboro;
}
.card-deck{
    width: 98%;
    margin: 0 auto;
}
.card img{
    width: 100%;
    height: 25vh;
}
.row{
    justify-content: center;
}
.grid{
    position: relative;
}
.item{
    display: block;
    position: absolute;
    z-index: 10;
}
.item.muuri-item-dragging{
    z-index: 3;
}
.item.muuri-item-releasing{
    z-index: 2;
}
.item.muuri-item-hidden{
    z-index: 0;
}
.item-content{
    position: relative;
    width: 100%;
    height: 100%;
}
/* ////// */
input[type=checkbox] {
    cursor: pointer;
    font-size: 15px;
    visibility: hidden;
    transform: scale(1.5);
}
input[type=checkbox]:after {
    content: " ";
    background-color: #fff;
    display: inline-block;
    color: #00BFF0;
    width: 14px;
    height: 14px;
    visibility: visible;
    border: 1px solid #a9e4ff;
    border-radius: 8px;
    /* box-shadow: 0 0 15px 0 rgba(0,0,0,0.08), 0 0 2px 0 rgba(0,0,0,0.16); */
}
input[type=checkbox]:checked:after {
    content: "\2714";
    display: unset;
}
.downbtn{
    width: 80px;
    height: 60px;
    position: absolute;
    right: 0px;
}
.btnPic{
    width: 60px;
    margin-bottom: 8px;
    height: 25px;
    font-size: 14px;
    text-align: center;
    padding: 0;
}
.generated h6{
    margin: 0 auto;
}

</style>
