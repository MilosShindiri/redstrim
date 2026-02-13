import Blits from '@lightningjs/blits'

import Player from '../components/SplashPlayer'
import { bootstrapApp } from '../services/api/AppBootstrap'

export default Blits.Component('SplashScreen', {
  components: {
    Player,
  },

  template: `
    <Element w="1920" h="1080">
      <Player />
    </Element>
  `,

  hooks: {
    async ready() {
      let navigated = false
      const MIN_SPLASH_TIME = 5000 // minimalno trajanje splash ekrana (ms)
      const MAX_WAIT_TIME = 5000   // fallback max čekanje za bootstrap(api) (ms)

      const startTime = Date.now()

      const goNext = () => {
        if (navigated) return
        navigated = true
        this.$router.to('/welcome')
      }

      // fallback posle MAX_WAIT_TIME
      const fallbackTimeout = setTimeout(() => {
        console.warn('Bootstrap timeout — nastavljamo dalje')
        goNext()
      }, MAX_WAIT_TIME)

      try {
        await bootstrapApp()

        // koliko je prošlo od prikaza splash
        const elapsed = Date.now() - startTime
        const remaining = MIN_SPLASH_TIME - elapsed

        // čekaj da splash traje minimalno
        if (remaining > 0) {
          setTimeout(goNext, remaining)
        } else {
          goNext()
        }

      } catch (e) {
        console.error('Greška pri bootstrapu:', e)
        goNext()
      } finally {
        clearTimeout(fallbackTimeout)
      }
    }
  }
})
