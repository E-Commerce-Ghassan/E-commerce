<template>
    <div id="card-container">
        <div id="details">
            <div id="img-cont">
                <img height="400" src="../assets/prod5.jpg" width="400"/>
            </div>
            <div class="desc">
                <h1 class="card-title">Canon EOS كمرا</h1>
                <div class="price-container">
                    <small class="text-muted old-price">{{oldPrice}}</small>
                    <small class="text-muted">{{price}}</small>
                </div>
                <p class="card-text">لحصول على حل تصوير الأفلام المثالي، اجمع بين الكاميرا EOS 80D وعدسة EF-S 18-135mm
                    f/3.5-5.6 IS USM المرنة، فائقة الأداء التي تتميز بتقنية Nano USM، التي توفر تركيزًا بؤريًا سلسًا
                    وهادئًا للأفلام وتركيزًا بؤريًا تلقائيًا فائق السرعة للصور الثابتة. اجمعها كذلك مع محول
                    التكبير/التصغير الكهربائي الاختياري PZ-E1 للحصول على تحكم دقيق في التكبير/التصغير عند تصوير
                    الأفلام.</p>

                <button class="btn btn-outline-danger" type="button">Add to cart</button>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Card",
        data() {
            return {
                price: 100,
                oldPrice: 200,
            }
        },
    }
</script>

<style scoped>
    #card-container {
        height: 100%;
        display: flex;
        flex-direction: column;

    }

    .desc {
        padding: 0px 20px;
    }

    button {
        width: fit-content;
        margin: auto;
        margin-top: 15px;
    }

    #details {
        display: flex;
        justify-content: space-around;
        display: flex;
        text-align: right;
        flex-direction: row-reverse;
        margin-top: 50px;

    }

    .price-container {
        background-color: transparent;
        border: none;
        font-size: 22px;
        font-weight: bold;
    }

    .old-price {
        text-decoration: line-through;
        margin-right: 8px;
    }

    #img-cont {
        max-width: 250px;
        margin-right: 1%;
    }
</style>