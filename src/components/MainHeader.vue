<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div v-click-outside="HideLogin" >
                <h4 @click="login=!login" class="user-login-text" v-if="!loggedIn">تسجيل الدخول</h4>
                <img @click="login=!login" id="loagin" src="../assets/login-icon.svg" v-if="loggedIn"/>
                <Login v-if="login" @Login="Login"></Login>
            </div>
            <router-link class="nav-link logo navbar-brand navbar-toggler" to="/Store/HomePage">لوجو</router-link>

            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    class="navbar-toggler"
                    data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active ">
                        <div class="hidden-xs collapse navbar-collapse navbar-left">
                            <router-link class="nav-link logo navbar-brand" to="/Store/HomePage">لوجو</router-link>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <div class="input-group mb-3c search">
                        <div class="input-group-append">
                            <button @click="$router.push({ path: '/Store/Search' ,params:searched})"
                                    class="btn btn-danger search-btn"
                                    type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                        <input class="form-control seach" placeholder="ابحث" type="text" v-model="searched">
                    </div>
                </form>
            </div>
        </nav>
        <partial-header></partial-header>
    </div>
</template>

<script>
    import PartialHeader from '../components/PartialHeader.vue';
    import Login from '../components/Login.vue';
    // eslint-disable-next-line no-unused-vars
    import clickOutside from "../Directives/directive";

    export default {

        name: "MainHeader",
        components: {
            PartialHeader,
            Login,
        },
        data() {
            return {
                login: false,
                loggedIn: false,
                searched: null,
                loginData:null,

            }
        },
        methods: {
            HeaderHeight() {
                return this.$el.clientHeight;
            },
            HideLogin() {
                this.login = false;
            },
            Login(loginData){
                this.loginData=loginData;
                this.$emit('Login', loginData)
            }
        }
    }
</script>

<style scoped>
    .navbar {
        flex-direction: row-reverse;
    }
    @media (min-width: 576px) {
        .form-inline .custom-select, .form-inline .input-group {
            width: auto;
            margin: auto;
        }
    }
    .navbar-nav {
        margin-left: auto;
        margin-right: auto !important;

    }

    #navbarSupportedContent {
        flex-direction: row-reverse;
    }

    #header-container {
        top: 0;
        right: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: fit-content;
        background-color: #aba9a9;
    }

    .seach {
        text-align: end;
        border: none;
    }

    h4 {
        cursor: pointer;
    }

    h4:hover {
        color: rgb(220, 53, 69);

    }

    .user-login-text {
        font-size: 14px;
    }

    .btn-danger > img {
        max-height: 18px;
        max-width: 18px;
    }

    #header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        ALIGN-ITEMS: center;
        position: relative;
        padding-bottom: 25px;
        padding-top: 25px;
        margin: 0 150px;
    }

    h2 {
        cursor: pointer;
        text-align: center;
    }

    .logo::first-letter {
        color: #c82333 !important;
        border: none !important;
    }

    .input-group-append > button {
        height: fit-content;
    }

    .bg-light {
        background-color: #e3e5e6 !important;
        align-items: baseline;
    }

    .navbar-light .navbar-toggler {
        color: rgb(78, 78, 78);
        border-color: #e3e5e6;
    }

    img {
        max-height: 50px;
    }

    h2 {
        flex: 10;
    }

    .search-btn {
        background-color: #dc3545;
        border-top-left-radius: .25rem !important;
        border-bottom-left-radius: .25rem !important;
        border: #dc3545;
    }


    .search > input {
        height: 35px;
    }
</style>