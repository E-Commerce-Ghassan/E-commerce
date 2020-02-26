<template>
    <div id="store">
        <div>
            <Header @Login="Login" ></Header>
        </div>
        <router-view>
        </router-view>
    </div>
</template>

<script>
    import Header from '../components/MainHeader'

    export default {
        name: "Store",
        components: {
            Header
        },
        data() {
            return {
                loginData: null
            }
        },
        methods:{
            Login(loginData){
                this.loginData=loginData;
                this.$emit('Login', loginData);
            }
        }, props: {
            login: {},
        }
    }
</script>

<style scoped>
#store{
        font-family: 'flat-jooza' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color:#4e4e4e;
        height: 100%;
        display: flex;
        flex-direction: column;

}
</style>