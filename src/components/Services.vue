<template>
    <div class="services" id="services">
        <h3>Services</h3>
        <div class="services-content">
            <div class="services-content-section">
                <div class="services-content-item">
                    <font-awesome :icon="['fas', 'home']"/>
                    <h5>360&deg; Home Virtual Tour</h5>
                </div>
                <div class="services-content-item">
                    <font-awesome :icon="['fas', 'camera-retro']"/>
                    <h5>Photography</h5>
                </div>
                <div class="services-content-item">
                    <font-awesome :icon="['fas', 'shapes']"/>
                    <h5>2D Render</h5>
                </div>
            </div>
            <div class="services-content-section">
                <div class="services-content-item">
                    <font-awesome :icon="['fas', 'video']"/>
                    <h5>Drone Shots</h5>
                </div>
                <div class="services-content-item">
                    <font-awesome :icon="['far', 'square']"/>
                    <h5>Floor Plan</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Services'
    }
</script>

<style scoped>
    .services {
        background: #0077ff;
        color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .services-content {
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .services-content-section {
        display: flex;
        justify-content: space-around;
        margin: 20px;
    }

    .services-content-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h3 {
        align-self: center;
    }

    .svg-inline--fa {
        font-size: 2em;
    }

    @media only screen and (max-width: 600px){
        .services-content-section {
            flex-direction: column;
            align-items: center;
        }

    }
</style>