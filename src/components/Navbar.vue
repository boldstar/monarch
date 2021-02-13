<template>
    <header class="header">
        <g-link  to="/"><g-image class="logo" src="~/images/mvt_logo.png"/></g-link>
        <font-awesome style="align-self: center" :icon="['fas', 'bars']" @click="showNav"/>
        <nav class="nav" :class="{'mobile-nav': show}">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about/">How It Works</g-link>
            <g-link class="nav__link" to="/services/">Services</g-link>
            <button @click="scrollTo" class="free-tour-btn">Free Tour</button>
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
            },
            scrollTo() {
                var elmnt = document.getElementById("contact");
                elmnt.scrollIntoView();
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

.free-tour-btn {
    border: 3px solid #0077ff;
    font-weight: bold;
    background: white;
    border-radius: 3px;
    margin-left: 10px;
    align-self: center;
    padding: 5px;
    cursor: pointer;
    font-size: 1em;
}

a {
    align-self: center;
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