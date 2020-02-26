<template>
    <!--    <div id="partial-header-container">-->
    <!--        <div class="hidden-xs collapse navbar-collapse navbar-left">-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light " style="{ 'background-color': '#C0C0C0 !important '}">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li :key="cat.catID" class="nav-item active" v-for="cat in categories">
                    <div @click="$router.push({ path: '/Store/Category' ,params:cat.catName})"
                         CLASS="cat-container"
                    >
                        <a class="catigory-name">{{cat.catName}}</a>
                    </div>
                </li>
                <li class="nav-item active">

                    <div @click="$router.push({ path: '/Store/HomePage'})" CLASS="cat-container">
                        <a class="catigory-name">الرئيسية</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    <!--        </div>-->
    <!--        <ul class="navbar-nav mr-auto navbar-toggler">-->
    <!--            <li class="nav-item dropdown">-->
    <!--                <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"-->
    <!--                   id="navbarDropdown" role="button">-->
    <!--                    التصنيفات-->
    <!--                </a>-->
    <!--                <div aria-labelledby="navbarDropdown" class="dropdown-menu">-->
    <!--                    <router-link :key="cat.catID" to="{ path: '/Store/Category' ,params:cat.catName}"-->
    <!--                                 v-for="cat in categories">{{cat.catName}}-->
    <!--                    </router-link>-->
    <!--                    <div class="dropdown-divider"></div>-->
    <!--                    <router-link to="/Store/HomePage">الرئيسية</router-link>-->
    <!--                </div>-->
    <!--            </li>-->
    <!--        </ul>-->
    <!--    </div>-->

</template>

<script>
    export default {
        name: "PartialHeader",
        data: function () {
            return {
                categories: [
                    {catName: "عروض", catID: 1},
                    {catName: "حواسيب", catID: 2},
                    {catName: "هواتف", catID: 3},
                    {catName: "اكسسوارات", catID: 4},
                    {catName: "كمرات", catID: 5}]
            }

        },
    }

</script>

<style scoped>
    .bg-light {
        padding: 0px !important;
    }

    #navbarSupportedContent {
        background-color: #C0C0C0 !important;

    }

    #partial-header-container {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        background-color: #C0C0C0;
        padding-left: 100px;
        border-bottom: 2px solid rgba(171, 169, 169, 0.388);
    }

    .mr-auto, .mx-auto {
        margin: auto !important;
    }

    .cat-container:last-child {
        border-right: none;
    }

    .catigory-name {
        text-align: center;
    }

    p {
        margin: 0px;

    }

    .cat-container {
        height: fit-content;
        padding: 15px;
        border-right: 1px solid #ffffff;
    }

    .cat-container:hover {
        cursor: pointer;
        color: #dc3545 !important;
        background-color: #ffffff;

    }

    .catigory-name:active, .catigory-name:focus {
        color: #dc3545 !important;
        background-color: #ffffff;
    }
</style>