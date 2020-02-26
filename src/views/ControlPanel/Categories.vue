<template>
    <div class="items-container">
        <button @click="addNewCat=!addNewCat" class="btn btn-secondary add-item" type="button">اضافة تصنيف +</button>
        <table class="table table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col "></th>
                <th scope="col ">أالتصنيف</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="addNewCat">

                <td>
                    <button @click="AddCat" class="btn btn-secondary " type="button">تاكبد</button>
                </td>
                <td>
                    <input class="form-control" name="catName" type="text" placeholder="اسم التصنيف" v-model="catName">
                    <span v-if="ShowMassage">الرجاء تعبئة اسم التصنيف</span>
                </td>
            </tr>
            <tr :key="cat.categoryId" v-for="(cat) in cats">
                <td v-if="cat.categoryId!=editID" class="minipulate-item">
                   <span @click="DeleteCat(cat.categoryId)" class="delete-cat"><i  class="fas fa-trash-alt del-edit-item"></i></span>
                   <span @click="EditCat(cat.categoryId,cat.categoryName)"><i class="far fa-edit del-edit-item"></i></span>
                </td>
                <td v-if="cat.categoryId!=editID"><router-link :to="{ name: 'Items', params: { CatId: cat.categoryId ,catList:cats,loginState:loginData}}">{{cat.categoryName}}</router-link></td>
                <td v-if="cat.categoryId==editID">
                    <button @click="UpdateCat(cat.categoryId)" class="btn btn-secondary " type="button">تاكبد</button>
                </td>
                <td v-if="cat.categoryId==editID"><input class="form-control" :text="newCatName" v-model="newCatName">
                    <span v-if="ShowUpdateMassage">الرجاء تعبئة اسم التصنيف</span>
                </td>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "Categories",

        data() {
            return {
                addNewCat: false,
                catName: null,
                cats: null,
                errorMassage:false,
                editID:null,
                editedName:null,
                newCatName:null,
                loginData:null,
                catUrl:'http://localhost:13198/api/CPCategories/',
                token:null,
            }
        },
        methods: {
         async   DeleteCat(catId) {
             /* eslint no-console: ["error", { allow: ["log", "error"] }] */
             console.log(catId);
                var result;
                await axios.get(this.catUrl+'Delete?categoryId='+catId,
                    { headers:{UserToken: this.token}})
                    .then(response=>{
                        /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                        console.log(response.data);
                        result=response.data;
                    }).catch(ex=>{alert(ex)});
                if(result==true){
                    alert("تم حذف التصنيف بنجاح");
                }
                else{
                    alert("حصلت خطا اثناء حذف التصنيف الرجاء المحاولة في وقت لاحق");
                }
            },
            EditCat(catId,catName){
                this.editID=catId;
                this.newCatName=catName;
            },
            async   UpdateCat(catId){
                if(this.newCatName){
                    var result;
                    await axios.post(this.catUrl+'Update',{categoryId:catId,categoryName:this.newCatName},
                        { headers:{UserToken: this.token }})
                        .then(response=>{
                            /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                            console.log(response.data);
                            result=response.data;
                        }).catch(ex=>{alert(ex)});
                    if(result.updateResult==true){
                        alert("تم تعديل  التصنيف بنجاح");
                    }
                    else{
                        alert("حصلت خطا اثناء تعديل التصنيف الرجاء المحاولة في وقت لاحق");
                    }
                    this.editID=null;
                    this.newCatName=null;
                }

            },
         async   AddCat() {
                if (this.catName) {
                    var result;
                  await axios.post(this.catUrl+'Create',{categoryName:this.catName},
                      { headers:{UserToken: this.token }})
                      .then(response=>{
                          /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                          console.log(response.data);
                          result=response.data;
                      }).catch(ex=>{alert(ex)});
                    if(result.createResult==true){
                        alert("تم انشاء التصنيف بنجاح");
                    }
                    else{
                        alert("حصلت خطا اثناء انشاء التصنيف الرجاء المحاولة في وقت لاحق");
                    }
                    this.catName = null;
                }else{
                    this.errorMassage=true;
                }
            },
          async  GetAllCats(){
                var catList;
                await axios.get(this.catUrl+'GetAll',
                    { headers:{UserToken: this.token }})
                    .then(response=>{
                        /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                        console.log(response.data);
                        catList=response.data.categories;
                        /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                        console.log(catList);
                    }).catch(ex=>{alert(ex)});
                /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                console.log(catList);
                this.cats=catList;
                /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                console.log(this.cats);
            }
        },
        computed: {
            ShowMassage() {
                return this.catName?false:true;
            }, ShowUpdateMassage() {
                return this.newCatName?false:true;
            }
        },

      created(){
            this.loginData=this.$route.params.loginData;
            this.token=this.loginData.user.userToken;
            this.GetAllCats();
        }
        // created(){
        //     axios.get('http://localhost:13198/api/CPProducts/GetAllByCategoryId?categoryId=1',
        //         { headers:{UserToken: "RXBIWFJSdkViZkpaQnVSc20zclcrZENwanRiZ3FaVWtkK3ZqU041blVKY1dLQ2wzQ3ZBaHF4OFRqQzhlbkNmbXI5SmFsSG03enJia1YzekRQZ2tGbFE9PQ=="}})
        //         .then(response=>{alert(response)}).catch(ex=>{alert(ex)});
        // }

    }
</script>

<style scoped>
    .del-edit-item {
        font-size: 17px;
    }
    .delete-cat{
        border-right: 1px solid #c0c0c0;
        padding-right: 7px;
        margin-right: 7px;
    }


</style>