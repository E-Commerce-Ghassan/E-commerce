<template>
    <div id="login-container" v-if="!registerationLink">
        <label for="username">اسم المستخدم</label>
        <input class="form-control" id="username" v-model="phoneNumber" placeholder="User Name ..." type="text"/>
        <br>
        <label for="password">كلمة المرور</label>
        <input class="form-control" id="password" v-model="password" placeholder="Password ..." type="password"/>
        <br>
        <button class="btn btn-secondary" type="button" @click="Login($event)">تسجيل الدخول</button>


        <p>لا تمتلك حسايا انشئ؟ حسابا الان</p>
        <p @click="GoToRegestration">انشاء حساب</p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Login",
        data() {
            return {
                phoneNumber:null,
                password:null,
                registerationLink: false,
                loginResponce:null,
            }
        },
        methods: {
            GoToRegestration() {
                this.$router.push({path: '/Store/registration'});
                this.registerationLink = true;
            },
            Login(event){
                event.preventDefault();
                axios.post('http://localhost:13198/api/Authentication/Login',{
                    PhoneNumber: this.phoneNumber,
                    Password: this.password
                })
                    .then(response=>{
                        /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
                    this.loginResponce=response.data;
                        this.$emit('Login', this.loginResponce)}).catch(ex=>{alert(ex)});
            }
        },
    }
</script>

<style scoped>
    #login-container {
        position: absolute;
        background-color: white;
        color: black;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: element(#loagin);
        -webkit-transform: translateY(-100%);
        /* transform: translateY(-100%); */
        top: 400px;
        right: 16px;
        padding: 20px;
        border: 1px solid gray;
        text-align: right;
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    #login-container::after {
        content: '';
        position: absolute;
        left: 77%;
        top: -6%;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 21px solid #ffffff;
        clear: both;
    }

    p:last-child {
        cursor: pointer;
    }

    p:last-child:hover {
        color: #dc3545;
    }
</style>