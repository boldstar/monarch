<template>
    <div class="about-component">
        <div class="about-component-content">
            <h3>About</h3>
            <p>Virtual tours are more important than ever. The ability to view a home without being there can help your income and prospects. Our goal is to help you market your homes with the latest technologies and provide a unique experience for your customers. With Monarch Virtual Tours we will give you the ability to show your home without having to be there. We understand that the real estate industry is fast paced and strive to offer our products with fast turn around, quality and at an affordable price.</p>
            <g-link to="/about" class="about-btn">Learn More</g-link>
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
    text-align: center;
    background: white;
    margin-bottom: 50px;
}

h3 {
    margin-top: 10px;
}

.about-btn {
    border-bottom: 2px solid #0077ff;
    font-weight: bold;
}
</style>