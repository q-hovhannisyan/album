<template>
    <div class="cont">
        <div class="all">
            <H1>Photo Gallery</H1>
            <div class="upload-btn-wrapper">
                <div @click="onUpload()" class="upButton"></div>
                <label for="files" class="chooseLable"> Choose Files </label>
                <input type="file" id="files" ref="files" multiple @change="handleFileUploads()" style="display: none">
            </div>
            <div :class="[ counter == 10 ? 'green' : 'counter']">
                {{counter}}
            </div>
        </div>
        <div class="all-content container">
            <div class="card-deck row  " >
<!--           images and id           -->
                <draggable @start="drag=true" @end="drag=false" >
                    <transition-group>
                <div class="col-lg-4 col-sm-6  oneItem position-relative" v-for="(item1, index) in arr" :key="item1"  >
                    <div class="card item-content ">
                        <div class="images_wrapper">
                            <img  :src="`http://127.0.0.1:8000/getImages?token=${token}&imageId=${item1}`" class="card-img-top" :alt="item1.title" @click="toggle">
                        </div>
                        <div class="delete" @click="del(item1)">
                            <img src="/src/assets/icons/cancel.png" width="120" alt="">
                        </div>
                        <div class="card-body d-flex justify-content-between">
                            <input class=" position-static ml-1 check" type="checkbox"  :value="item1" v-model="images"  aria-label="...">
                            <div  class="descript_view">
                                <p class="position-absolute te">Description</p>
                                <button @click="edit($event)" class="edit_btn" :value="item1">Edit</button>
                            </div>
                                <div class="d-flex justify-content-center  editable" >
                                <div class="description_modal">
                                    <b-textarea rows="2" placeholder="Text here..."  v-model="arr[index].description" class=" textar" :value="item1"></b-textarea>
    <!--                             <input type="text" v-model="newText" class="hide" @keyup.enter="keyPressed(index, item, $event)" autocomplete="off">-->
    <!--                             <h6 @click="myFunction">Title{{item1.title}}</h6>-->
                                    <div class="downbtn">
                                        <button class="btn btn-success btnPic" @click="addText(arr[index])">Save</button>
                                        <button class="btn btn-danger btnPic" @click="cancle($event)">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </transition-group>
                </draggable>
            </div>
            <!-- // -->
            <b-button block variant="dark" class="generate" @click="gen"><h1>GENERATE</h1></b-button>
        </div>
<!--        <div class="pictures" v-if="open">-->
<!--           <div class="row ">-->
<!--               <div v-for="(item, index) in images" :key="index"  class="col-lg-3 downItem ">-->
<!--                    <img :src="`http://127.0.0.1:8000/getImages?token=${token}&imageId=${item}`" alt="">-->
<!--                    <div class="card-body d-flex justify-content-between generated">-->
<!--                        <h6>title{{item.title}}</h6>-->
<!--                    </div>-->
<!--                </div>-->
<!--           </div>-->
<!--       </div>-->
    </div>
</template>
<script>
import axios from 'axios'
import draggable from 'vuedraggable'
export default {
    components: {
        draggable,
    },
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
            editable: false,
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
              console.log(this.images, "imagess")
          }
      },
    },
    methods: {
        edit(a){
            let el=a.target.parentNode.parentNode.lastElementChild.classList;
            el.add('open_editable')
        },
        cancle(a){
            let elem=a.target.parentElement.parentElement.parentNode.classList;
            elem.remove('open_editable')
        },
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
        //         item.title=this.newText;
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
            console.log(this.images)
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
        del(e){
          console.log(e)
            axios.post(`${host}user/image/delete?token=+${this.token}+&id=+ ${e} `, this.token, e,
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
    .edit_btn{
        position: inherit;
        bottom: 5px;
        right: 5px;
        background: linear-gradient(48.67deg, #52C1FF 0%, #3eff9e 100%);
    }
    .descript_view{
        position: absolute;
        width: 85%;
        height: 16%;
        right: 0;
        bottom: 0;
    }
    .editable{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        transform: translateY(100%);
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
    }
    .open_editable{
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
    }
    .delete{
        position: absolute;
        right: 10px;
        top: 10px;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    .delete>img{
        width: 100%;
    }
    .oneItem:hover .delete{
        opacity: 1;
        visibility: visible;
    }
    .images_wrapper{
        width: 100%;
        height: 250px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .images_wrapper>img{
        height: 100%;
        width: auto;
    }
    .chooseLable{
        /*background-color: #0ad3c8;*/
        width: 110px;
        border-radius: 10px;
        /*border: 5px groove lightseagreen;*/
        margin-bottom: 0;
        cursor: pointer;
        background: linear-gradient(48.67deg, #3eff9e 0%, #52C1FF 100%);
    }
    .upButton{
        width: 50px;
        height: 50px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/src/assets/icons/cloud-computing.svg");
        position: absolute;
        right: 5px;
        top: 0;
        cursor: pointer;
    }
@media screen and (max-width: 1070px){
    .cardGrid{
        align-items: center;
        margin: 0 auto;
    }
}
.oneItem{
    width: auto !important;
    margin: 10px 0 !important;
}
.cont{
    width: 100%;
    margin-top: 5rem;
    position: relative;
}
.card-deck span{
    display: flex !important;
    flex-wrap: wrap !important;
}
.card item-content{
    margin: 20px 0 !important;
}
.counter{
    width: 30px;
    height: 30px;
    border: 1px solid grey;
    border-radius: 50%;
    background-color: #f0687e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    position: fixed;
    right: 20px;
    top: 60px;
}
.green{
    background-color: green;
    width: 30px;
    height: 30px;
    border: 1px solid grey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    position: fixed;
    right: 20px;
    top: 60px;
}
.upload-btn-wrapper {
    /*overflow: hidden;*/
    display: flex;
    align-items: center;
    width: 190px;
    position: relative;
}
/*.upload-btn-wrapper input[type=file] {*/
/*    left: 0;*/
/*    bottom: 0;*/
/*}*/
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
    color: #0aa095;
}
.all-content{
    width: 90%;
    /*height: 24rem;*/
    margin: 0 auto;
    border: 1px solid lightgray;
    /*background-image: url("/src/assets/img/images/images.jpg");*/
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
    /*margin-left: 13px;*/
    /*margin-right: 4.5rem;*/
    resize: none;
    overflow: auto;
}
.description_modal{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    /*bottom: 7px;*/
    /*border: 0.2px solid gainsboro;*/
    margin: 10px 0;
}
.card-deck{
    width: 98%;
    margin: 0 auto;
}
.card img{
    /*width: 100%;*/
    /*height: 30vh;*/
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
    width: 80%;
    display: flex;
    justify-content: space-around;
    padding: 20px 0 0 0;
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
