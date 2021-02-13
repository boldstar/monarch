<template>
    <Layout>
    <div class="services-page">
        <h2>Services</h2>
        <div class="services-page-content">
            <ul class="services-page-list">
                <li><font-awesome :icon="['fas', 'home']"/> 360&deg; Virtual Tour <p>Virtual home tour to allow you to show your home without being there.</p></li>
                <li><font-awesome :icon="['fas', 'camera-retro']"/> 2D Render <p>Displaying a 2D render to give a better idea of what the home looks like</p></li>
                <li><font-awesome :icon="['fas', 'shapes']"/> Photography <p>The photos you need to post on the different real estate platforms for marketing purposes</p></li>
                <li><font-awesome :icon="['fas', 'video']"/> Floor Plan <p>Show what the home looks like from a above view perspective</p></li>
                <li><font-awesome :icon="['far', 'square']"/> Drone Shots <p>Add extra style to your marketing with quick footage of the home from different outdoor angles</p></li>
            </ul>
        </div>
    </div>
    </Layout>
</template>

<script>
    export default {
        name: 'ServicesPage'
    }
</script>

<style scoped>
    .services-page {
        padding: 20px;
        max-width: 1120px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    ul {
        list-style: none;
    }

    li {
        font-size: 1.5em;
        margin-bottom: 15px;
    }

    .svg-inline--fa {
        color: #0077ff;
    }

    p {
        font-size: .8em;
    }
</style>