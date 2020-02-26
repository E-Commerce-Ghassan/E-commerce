<template>
    <div id="app">
        <router-view @Login="Login" :login="loginData"/>
    </div>
</template>
<script>
    import UUID from 'vue-uuid';
    import axios from 'axios';
    import router from './router'
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css'
    export default {
        name: 'App',
        UUID,
        axios,
        router,
        components: {},
        data() {
            return {
                topMargin: null,
                obj: null,
                loginData:null

            }
        },
        mounted() {
            this.$router.push({path: '/Store/HomePage'});
        },
        methods: {
            Login(LoginData){
                this.loginData=LoginData;
            }
        },
    }
</script>
<style>
    @import url("http://www.fontstatic.com/f=flat-jooza");
input{
     text-align: end;
}
    *{
        text-align: end;
    }
    #app {
        font-family: 'flat-jooza' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #4e4e4e;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    .items-container {
        padding: 15px;
    }

    .minipulate-item {
        font-size: 14px;
        width: 200px;
    }

    .del-edit-item {
        cursor: pointer;
    }

    .del-edit-item:hover {
        color: #dc3545;
    }

    .add-item {
        margin: 10px 0px;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
    }
</style>
