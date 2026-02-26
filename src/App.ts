import Blits from '@lightningjs/blits'

import { routes } from './router';

export default Blits.Application({
  template: `
    <Element w="1920" h="1080">
      <RouterView w="100%" h="100%" />
    </Element>`,

  state() {
    return {

    }
  },

  hooks: {
    ready() {
      console.log('App ready')
    }
  },

  input: {
    $enter() {
      console.log('ENTER pressed')
    },
    $focus() {
      console.log('FOCUS event')
    },
    // back(e) {
    //   console.log('🔥 GLOBAL BACK TRIGGERED 🔥')


    //     this.$router.back()


    //   // return true
    // },
    // back() {
    //     const currentRoute = this.$router.currentRoute.path
    //     console.log('🔥 BACK pressed on', currentRoute)

    //     // Ako smo na home, ne radimo ništa
    //     if (currentRoute === '/home' || currentRoute === '/') {
    //       console.log('Already at Home, cannot go back further')
    //       return true // stop event
    //     }

    //     // Inače idi nazad
    //     this.$router.back()
    //     return true
    // },

    // escape() {
    //   console.log("🔥 GLOBAL BACK FIRED 🔥")
   
    //   this.$router.back()

    //   return true
    // }
  },

  routes: routes
});