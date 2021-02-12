<template>
    <header class="header">
        <g-link  to="/"><g-image class="logo" src="~/images/mvt_logo.png"/></g-link>
        <font-awesome style="align-self: center" :icon="['fas', 'bars']" @click="showNav"/>
        <nav class="nav" :class="{'mobile-nav': show}">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about/">How It Works</g-link>
        </nav>
    </header>
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                show: false
            }
        },
        methods: {
            showNav() {
                this.show = !this.show
            }
        }
    }
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: white;
    z-index: 1;
    position: relative;
}

.fa-bars {
    display: none;
}

.nav {
    display: flex;
}

.logo {
    align-self: center;
    max-height: 25px;
    height: 100%;
    width: auto;
}

@media only screen and (max-width: 600px) {
        .fa-bars{
            display: block;
        }

        .nav {
            display: none;
        }

        .mobile-nav{
            position: absolute;
            right: 0;
            top: 50px;
            display: flex!important;
            flex-direction: column;
            flex-basis: flex-end;
            background: white;
            padding: 20px;
        }
    }
</style>