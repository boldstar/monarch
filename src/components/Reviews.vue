<template>
    <div class="reviews">
        <div class="reviews-content">
            <h3>Reviews</h3>
            <ClientOnly>
            <div class="reviews-carousel">
            <carousel 
            :per-page="1" 
            :paginationEnabled="false" 
            :mouse-drag="false" 
            :loop="true" 
            :autoplay="true"
            :speed="1000"
            :autoplayTimeout="5000"
            >
                <slide>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius consequuntur, eligendi architecto expedita eaque amet illum.</p>
                    <span>- John</span>
                </slide>
                <slide>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius consequuntur, eligendi architecto expedita eaque amet illum.</p>
                    <span>- Mary</span>
                </slide>
                <slide>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius consequuntur, eligendi architecto expedita eaque amet illum.</p>
                    <span>- Greg</span>
                </slide>
                <slide>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius consequuntur, eligendi architecto expedita eaque amet illum.</p>
                    <span>- Sarah</span>
                </slide>
            </carousel>
            </div>
            </ClientOnly>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Reviews',
        components: {
            Carousel: () =>
                import ('vue-carousel/src/index')
                .then(m => m.Carousel)
                .catch(),
            Slide: () =>
                import ('vue-carousel/src/index')
                .then(m => m.Slide)
                .catch()
        },
    }
</script>

<style scoped>
    .reviews {
        text-align: center;
        min-height: 400px;
        background: lightgray;
        color: white;
        padding-top: 20px;
    }

    .reviews-content {
        box-sizing: border-box;
        overflow: hidden;
        max-width: 600px;
        margin: auto;
    }

    .reviews-carousel {
        width: auto;
        box-sizing: border-box;
    }
</style>