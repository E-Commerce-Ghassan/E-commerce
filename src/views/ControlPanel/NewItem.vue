<template>
    <div class="new-item-container">


        <form class="item-form" enctype="multipart/form-data">
            <div class="form-group">
<!--                <input @change=uploadImage accept="image/jpeg" text="ضافة صورة" type="file">-->
<!--                <img :src="newItem.previewImage" class="uploading-image"/>-->
                <div class="container">
                    <div class="large-12 medium-12 small-12 cell">
                        <label>File
                            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                        </label>
                    </div>
                </div>

            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="Price">السعر</label>
                    <input class="form-control" id="Price" placeholder="السعر" type="text" v-model="newItem.price">
                </div>

                <div class="form-group col-md-6">
                    <label for="ItemName">اسم العنصر</label>
                    <input class="form-control" id="ItemName" placeholder="سم العنصر" type="text"
                           v-model="newItem.name">
                </div>
            </div>
            <div class="form-group ">
                <label for="ShortDesc">الوصف</label>
                <input class="form-control" id="ShortDesc" placeholder="رالوصف" type="text" v-model="newItem.shortDesc">
            </div>
            <div class="form-group">
                <label for="LongDesc">لوصف المطول</label>
                <textarea class="form-control" id="LongDesc" placeholder="الوصف المطول" rows="3"
                          v-model="newItem.longDesc"></textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <div class="">
                        <label for="ShowInHomePage" style="margin-right: 10px">اظهار في الصفحة اللائيسية</label>
                        <input aria-label="Checkbox for following text input" id="ShowInHomePage" type="checkbox"
                               v-model="newItem.showOnHomePage">
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <div class="">
                        <label for="Avaliable" style="margin-right: 10px">متوفر</label>
                        <input aria-label="Checkbox for following text input" id="Avaliable" type="checkbox"
                               v-model="newItem.available">
                    </div>
                </div>
            </div>
            <div class="form-group ">
                <label for="cat">التصنيف</label>
                <select class="form-control form-control-sm" id="cat" v-model="newItem.categoryId">
                    <option :key="cat.categoryId" :value="cat.categoryId" v-for="cat in catList">{{cat.categoryName}}</option>
                </select>
            </div>
            <div class="form-group col-md-8">
                <button @click="AddNewItem($event)" class="btn btn-secondary">تاكيد</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "NewItem",
        data() {
            return {
                newItem: {
                    previewImage: null,
                    name: null,
                    price: null,
                    shortDesc: null,
                    longDesc: null,
                    available: null,
                    showOnHomePage: null,
                    categoryId: null,
                    file: ''

                },
                newItemUrl:'http://localhost:13198/api/CPProducts/'

            }
        },
        props: {
            catList: {
                type: Array,
            }, catId: {
            },token: {
            },
        },
        methods: {
            handleFileUpload(){
                this.newItem.file = this.$refs.file.files[0];
            },

            uploadImage(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.newItem.previewImage = e.target.result;
                    //console.log(this.previewImage);
                };
            },

            AddNewItem(event) {
                event.preventDefault();

                var bodyFormData = new FormData();
                bodyFormData.append("AvailableQuantity",this.newItem.available);
                bodyFormData.append("ShowInHomePage",this.newItem.showOnHomePage);
                bodyFormData.append("CategoryId",this.newItem.categoryId);
                bodyFormData.append("Price",this.newItem.price);
                bodyFormData.append("Name",this.newItem.name);
                bodyFormData.append("LongDescription",this.newItem.longDesc);
                bodyFormData.append("SmallDescription",this.newItem.shortDesc);
                bodyFormData.append("ImageData",this.file);
                // var item = {
                //     id: 1,
                //     imageeData: this.newItem.previewImage,
                //     smallDescription: this.newItem.shortDesc,
                //     longDescription: this.newItem.longDesc,
                //     name: this.newItem.name,
                //     price: this.newItem.price,
                //     categoryId: 1,
                //     showInHomePage: this.newItem.showOnHomePage,
                //     availableQuantity:this.newItem.avilable,
                // };
                axios({
                    method: 'post',
                    url: this.newItemUrl+'Create',
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data' ,UserToken: this.token}
                })
                    .then(function (response) {
                        //handle success
                        alert(response.data);
                        /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                        console.log(response.data)
                    })
                    .catch(function (error) {
                        //handle error
                        alert(error.response);
                        alert(error);
                    });



            }
        },
        mounted(){
            this.newItem.categoryId=this.catId
        }

    }
</script>

<style scoped>
    .uploading-image {
        display: flex;
        max-width: 250px;
        max-height: 250px;
        margin: auto;
    }

    .item-form {
        padding: 10px;
        border: 1px solid silver;
    }

    .new-item-container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
</style>