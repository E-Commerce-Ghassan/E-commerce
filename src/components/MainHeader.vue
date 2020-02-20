<template>
    <div id="header-container">
        <div id="header">
            <div class="input-group mb-3c search">
                <div class="input-group-append">
                    <button @click="$router.push({ path: 'Search' ,params:searched})" class="btn btn-danger search-btn"
                            type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <input class="form-control seach" placeholder="ابحث" type="text" v-model="searched">

            </div>
            <h2 @click="$router.push({ path: '/' })" class="logo">لوجو</h2>
            <div v-click-outside="HideLogin">
                <h4 @click="login=!login" class="user-login-text" v-if="!loggedIn">تسجيل الدخول</h4>
                <img @click="login=!login" id="loagin" src="../assets/login-icon.svg" v-if="loggedIn"/>
                <Login v-if="login"></Login>
            </div>

        </div>
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

            }
        },
        methods: {
            HeaderHeight() {
                return this.$el.clientHeight;
            },
            HideLogin() {
                this.login = false;
            },

        }
    }
</script>

<style scoped>
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
        color: #c82333;
    }

    .input-group-append > button {
        height: fit-content;
    }

    .search {
        flex: 3;
        max-width: 30%;
        margin-left: 20px;
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