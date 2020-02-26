<template>
    <div class="control-panel-container">
        <div class="control-panel-body">
            <router-view></router-view>
        </div>
        <div class="side-bar">
            <h1 class="control-panel-title">لوحة التحكم </h1>
            <router-link :key="link.name" :to="{ name:link.pathName, params: { loginData:login}}"  class="link" v-for="link in links">
                {{link.name}}
            </router-link>
            <div class="btn-group dropleft">
                <button aria-expanded="false" aria-haspopup="true" class="link " data-toggle="dropdown" type="button">
                    المستخدمين
                </button>
                <div class="dropdown-menu">
                    <router-link :key="link.name" :to="link.path" v-for="link in userLinks">
                        {{link.name}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ControlPanel",
        data() {
            return {
                links: [],
                userLinks: [],
            }
        },
        props: {
            login: {
            },
        },
        created() {
            this.links = [{name: 'التصنيفات', path: "/ControlPanel/Categories",pathName:'Categories'}, {name: 'الطلبيات', path: "/ControlPanel/Orders",pathName:'Orders',}];
            this.userLinks = [{name: 'مستخدمين جدد', path: "/ControlPanel/NewUsers",pathName:'NewUsers'}, {
                name: 'مستخدمين مثبتين',
                path: "/ControlPanel/Users"   ,
                pathName:'Users'
            }]
        }
    }
</script>

<style scoped>
    .panel-section {

    }
.control-panel-title{
    color: #dc3545;
    margin-bottom: 15px;
    font-size: 22px;
    margin-top: 10px;
}
    .control-panel-container {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .side-bar {
        flex: 2.5;
        padding: 15px;

        height: 100%;
        background-color: #C0C0C0;
        display: flex;
        flex-direction: column;
    }

    .control-panel-body {
        flex: 20;
    }

    .dropdown-menu.show {
        text-align: right;
    }

    a {
        color: #000000;
    }

    a:hover {
        color: #dc3545 !important;
        text-decoration: none !important;
    }

    .link {
        padding: 5px;
        width: 100%;
        border: none;
        background-color: silver;
    }

    .link:hover {
        color: #dc3545;
        text-decoration: none;
    }
</style>