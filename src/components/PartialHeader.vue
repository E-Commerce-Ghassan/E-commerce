<template>
    <div id="partial-header-container">

        <div :key="cat.catID" @click="$router.push({ path: 'Category' ,params:cat.catName})" CLASS="cat-container"
             v-for="cat in categories">
            <a class="catigory-name">{{cat.catName}}</a>
        </div>
        <div @click="$router.push({ path: 'Category' ,params:cat.catName})" CLASS="cat-container">
            <a class="catigory-name">الرئيسية</a>
        </div>
    </div>
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
    #partial-header-container {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        background-color: #C0C0C0;
        padding-left: 100px;
        border-bottom: 2px solid rgba(171, 169, 169, 0.388);
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