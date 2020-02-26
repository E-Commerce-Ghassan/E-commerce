<template>
    <div id="app-container">
        <div id="home-container" >
            <Card :imageLocation="require('@/assets/p.png')" title="sss"></Card>
            <Card :imageLocation="require('@/assets/prod2.png')" :title="'aaa'"></Card>
            <Card :imageLocation="require('@/assets/prod3.jpg')" :title="'كمرا'"></Card>
            <Card :imageLocation="require('@/assets/prod4.jpg')" :title="'كمرا'"></Card>
            <Card :imageLocation="require('@/assets/prod5.jpg')" :title="'كمرا'"></Card>
            <Card :imageLocation="require('@/assets/prod6.jpg')" :title="'كمرا'"></Card>
        </div>
    </div>
</template>

<script>
    import Card from '../../components/Card.vue'

    export default {
        "name": "HomePage",
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