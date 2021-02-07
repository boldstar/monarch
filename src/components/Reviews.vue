<template>
    <div class="reviews">
        <div class="reviews-content">
            <h3>Reviews</h3>
            <ClientOnly>
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
            </ClientOnly>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
    export default {
        name: 'Reviews',
        components: {
            Carousel,
            Slide
        }
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

    .VueCarousel-slide {
        box-sizing: border-box;
        max-width: 400px;
    }
</style>