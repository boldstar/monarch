<template>
    <div class="filler-img-container"> 
        <g-image class="filler-img" src="~/images/people_photo.jpeg" />
    </div>
</template>

<script>
    export default {
        name: 'Filler'
    }
</script>

<style scoped>
    .filler-img-container {
        width: 100%;
        height: 300px;
        position: relative;
        display: block;
        overflow: hidden;
    }

    .filler-img {
        position: absolute;
        box-sizing: border-box;
        top: -100px;
        left: -100px;
    }
</style>