import Blits from '@lightningjs/blits'
import { language, storage } from '@lightningjs/blits/plugins'
import { SCREEN_W, SCREEN_H } from './constants/Resolution'


import App from './App'
import keymapping from './keymapping'


import { detectDeviceInfo } from './utils/deviceInfo'

// window.addEventListener('keydown', (e) => {
//   console.log('RAW KEY DOWN →', {
//     keyCode: e.keyCode,
//     key: e.key,
//   })
// })

Blits.Plugin(language)
Blits.Plugin(storage)

const initDeviceInfo = async () => {
  // detect device info i spremi u storage
  const info = await detectDeviceInfo()
  console.log('🔥DEVICE INFO →', info)
}

initDeviceInfo()

Blits.Launch(App, 'app', {
  w: SCREEN_W,
  h: SCREEN_H,
  debugLevel: 1,
  inspector: false,
  holdTimeout: 500,
  inputThrottle: 300,
  defaultFont: 'poppins',
  keymap: {
   ...keymapping()
  },
  fonts: [
    {
      family: 'poppins',
      type: 'msdf',
      file: 'fonts/Poppins-Regular.ttf',
    },
    {
      family: 'poppinsBold',
      type: 'msdf',
      file: 'fonts/Poppins-Bold.ttf',
    },
    {
      family: 'poppinsSemiBold',
      type: 'msdf',
      file: 'fonts/Poppins-SemiBold.ttf',
    },
    {
      family: 'poppinsItalic',
      type: 'msdf',
      file: 'fonts/Poppins-Italic.ttf',
    },
    {
      family: 'lato',
      type: 'msdf',
      file: 'fonts/Lato-Regular.ttf',
    },
    {
      family: 'raleway',
      type: 'msdf',
      file: 'fonts/Raleway-ExtraBold.ttf',
    },
    // {
    //   family: 'opensans',
    //   type: 'web',
    //   file: 'fonts/OpenSans-Medium.ttf',
    // },
  ],
  
})
