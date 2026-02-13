import Blits from '@lightningjs/blits'
import PlayerManager from '../managers/PlayerManager.js'

export default Blits.Component('SplashPlayer', {
  
  template: `
    <Element />`, 

  hooks: {
    async init() {
      // initializes the video with the source.
      await PlayerManager.init('assets/splashScreenVideo.mp4')
    },
    async ready() {
      PlayerManager.play()
    },
    async destroy() {
      PlayerManager.destroy()
    },
  },
})
