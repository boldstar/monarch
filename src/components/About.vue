<template>
    <div class="about-component">
        <div class="about-component-content">
            <h3>About</h3>
            <p>Virtual tours are more important than ever. The ability to view a home without being there can help your income and prospects. Our goal is to help you market your homes with the latest technologies and provide a unique experience for your customers. With Monarch Virtual Tours we will give you the ability to show your home without having to be there. We understand that the real estate industry is fast paced and strive to offer our products with fast turn around, quality and at an affordable price.</p>
            <div class="btn-wrapper">
                <g-link to="/about" class="about-btn">Learn More</g-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutComponent'
    }
</script>

<style scoped>
.about-component {
    position: relative;
    padding: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: white;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
}

.about-component-content {
    box-sizing: border-box;
    text-align: center;
    max-width: 800px;
}

h3 {
    margin-top: 10px;
}

.btn-wrapper {
    justify-self: flex-end;
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
}

.about-btn {
    border-bottom: 2px solid #0077ff;
    font-weight: bold;
}

@media only screen and (max-width: 800px) {
    p {
        font-size: .8em;
    }
}
</style>