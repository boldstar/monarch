<template>
    <footer class="footer">
        <div class="footer-content-left">
            <h5>Monarch Virtual Tours</h5>
            <h5>(936) 537-3674</h5>
            <h5>thomasweems3@gmail.com</h5>
        </div>
        <div class="footer-content-right">
            <span>&copy; 2021 Monarch Virtual Tours</span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .footer {
            background: lightgray;
            display: flex;
            justify-content: space-between;
            padding: 20px;
        }
    
    h5 {
        margin: 5px;
    }

    @media only screen and (max-width: 800px) {
        .footer {
            font-size: .8em;
            padding: 10px;
        }
    }
</style>