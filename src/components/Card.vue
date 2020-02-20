<template>
    <div @click="$router.push({ path: 'Card' })" class="card">
        <div :style="{backgroundImage:`url(${imageLocation})`}" class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">واصل التقاط الصور شديدة الوضوح باستخدام نظام التركيز البؤري التلقائي عند استخدام
                مجموعات وموسّعات عدسات مختلفة بفضل 27 نقطة تركيز بؤري تلقائي تدعم التركيز البؤري بمعدل f/8.</p>
        </div>
        <div class="card-footer">
            <div class="price">السعر : <span class="text-muted price-num old-price-num">200</span>
                <span class="text-muted price-num"> 100 </span></div>
            <button class="btn btn-danger" type="button">التفاصيل</button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            imageLocation: {
                type: String,
            }, title: {
                type: String,
            },
        },
    }
</script>

<style scoped>
    .card {
        width: fit-content;
        height: fit-content;
    }

    .btn-danger {
        flex: 1;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .card-img-top {
        width: 100%;
        height: 180px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .card-footer {
        display: flex;
        padding: 0;
        flex-direction: row-reverse;
    }

    .old-price-num {
        text-decoration: line-through;
    }

    .card {
        max-width: 300px;
        margin-top: 20px;
    }

    .price {
        flex: 1;
        padding: 12px 15px 12px 0px;
    }
</style>