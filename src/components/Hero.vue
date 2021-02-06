<template>
    <div class="hero">
        <div class="hero-content">
            <h1 class="hero-header">Virtual Home Tours</h1>
            <p class="hero-slogan">Selling your home just got easier</p>
            <div>
                <button class="hero-btn">Get my FREE tour</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.hero {
    padding: 50px;
    padding-bottom: 10px;
    max-height: calc(100vh - 200px);
    height: calc(100vh - 200px);
    background-image: url('../images/home_photo.jpeg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
}

.hero-header {
    margin-bottom: 5px;
    font-weight: bolder;
    font-size: 5vw;
}

.hero-slogan {
    margin: 20px;
}

.hero-btn {
    display: block;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 5px 5px rgba(0,0,0,.2);
}

@media only screen and (max-width: 1150px) {
    .hero {
        height: inherit;
        max-height: calc(100vh - 500px);
        height: calc(100vh - 300px);
    }
    
    .hero-header {
        margin-top: 0;
    }
}
</style>