<template>
    <div class="items-container">
        <button type="button" class="btn btn-secondary add-item" @click="newItem=!newItem">اضافة عنصر +</button>
        <NewItem v-if="newItem" :catList="cats" :catId="catId" :token="token"></NewItem>

        <table class="table table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col .col-md-2"></th>
                <th scope="col .col-md-3">التصنيف</th>
                <th scope="col .col-md-3">أسم العتصر</th>


            </tr>
            </thead>
            <tbody>
            <tr v-for="(item) in items" :key="item.id">
                <td  class="minipulate-item">
                    <span @click="DeleteItem(item.id)" class="delete-cat"><i  class="fas fa-trash-alt del-edit-item"></i></span>
                    <span @click="EditItem(item.id,item.name)"><i class="far fa-edit del-edit-item"></i></span>
                </td>
                <td>{{item.cat.name}}</td>
                <td>{{item.name}}</td>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    import NewItem from './NewItem'
    export default {
        name: "Items",components:{
            NewItem
        },
        data() {
            return {
                items: [],
                catId:null,
                newItem:false,
                cats:null,
                itemsUrl:'http://localhost:13198/api/CPProducts/',
                token:null
            }
        },
        methods: {
            DeleteItem(itemId) {
              let temp=  this.items.filter(x=>x.id!=itemId);
                this.items=temp;

            },
            EditItem(Id,Name){
                return Id +Name;
            },
          async GetItems(catId){
                if(catId){
                    var catList;
                    await axios.get(this.itemsUrl+'GetAllByCategoryId?categoryId='+catId,
                        { headers:{UserToken: this.token }})
                        .then(response=>{
                            /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                            console.log(response.data);
                            catList=response.data.categories;
                            /* eslint no-console: ["error", { allow: ["log", "error"] }] */
                            console.log(catList);
                        }).catch(ex=>{alert(ex)});
                }
            }
        },
        created(){
            this.catId=this.$route.params.CatId;
            this.cats=this.$route.params.catList;
            this.token=this.$route.params.loginState.user.userToken;
            this.GetItems(this.catId);
        }
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