// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import VueCarousel from 'vue-carousel';

import DefaultLayout from '~/layouts/Default.vue'
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Reviews from '~/components/Reviews.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

config.autoAddCss = false;
library.add(faBars)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Navbar', Navbar)
  Vue.component('Hero', Hero)
  Vue.component('About', About)
  Vue.component('Reviews', Reviews)
  Vue.component('Contact', Contact)
  Vue.component('Footer', Footer)
  Vue.component('font-awesome', FontAwesomeIcon)

  // Plugins
  Vue.use(VueCarousel);
}
