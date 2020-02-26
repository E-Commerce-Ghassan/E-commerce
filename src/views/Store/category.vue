<template>
    <div id="app-container">
        <div id="home-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

        </div>
        <p> ❮ 1 2 3 ❯</p>
    </div>

</template>

<script>
    import Card from '../../components/Card.vue'

    export default {
        "name": "Category",
        components: {
            Card,
        },
        data() {
            return {
                topMargin: null,
                obj: null,
            }
        },

        mounted() {

        },
        methods: {}
    }
</script>

<style scoped>
    #home-container {
        display: flex;
        flex-flow: row wrap;
        flex-basis: auto;
        justify-content: space-evenly;
    }
</style>