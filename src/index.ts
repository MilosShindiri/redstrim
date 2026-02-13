import Blits from '@lightningjs/blits'
import { language } from '@lightningjs/blits/plugins'
import { SCREEN_W, SCREEN_H } from './constants/Resolution'

import App from './App'

Blits.Plugin(language)

Blits.Launch(App, 'app', {
  w: SCREEN_W,
  h: SCREEN_H,
  debugLevel: 1,
  inspector: false,
  holdTimeout: 500,
  inputThrottle: 300,
  defaultFont: 'poppins',
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
