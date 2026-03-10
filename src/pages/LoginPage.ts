import Blits from '@lightningjs/blits'
import AuthScreen, { Mode, CONTENT } from '../constants/AuthScreen'
import { generateQR } from '../utils/qrCode'
import VisitWebsite from '../components/VisitWebsite'
import VerticalLine from '../components/VerticalLine'
import ChooseButton from '../components/ChooseButton'
import { choose } from '../constants/choose'
import RemoteLogin from './RemoteLogin'


export default Blits.Component('LoginPage', {

  components: {
    AuthScreen,
    VisitWebsite,
    VerticalLine,
    ChooseButton,
    RemoteLogin
  },

  state() {
    return {
      loginMethod: 'phone' as 'phone' | 'remote',
      currentMode: 'signIn' as Mode,
      showAuthScreen: false,
      imgSrc: '',
      buttons: choose,
      width: 0,
      focused: 0
    }
  },

    computed: {
    steps() {
      return CONTENT[this.currentMode].steps
    },
    qrUrl() {
      return CONTENT[this.currentMode].url
    },
    filteredButtons() {
      if (this.currentMode === 'forgotPassword' || this.currentMode === 'createAccount') {
        return []
      }
      return this.buttons
    },
    showQR() {
      return this.loginMethod === 'phone'
    },
    // qrY() {
    //   return this.filteredButtons.length === 0 ? 460 : 600
    // },
    contentY() {
      return this.currentMode === 'signIn' ? 0 : - 50
    },

    qrY() {
      if (this.currentMode === 'signIn') return 600
      if (this.currentMode === 'forgotPassword') return 460
      if (this.currentMode === 'createAccount') return 600
    },

    // qrY() {
    //   const map = {
    //     signIn: 600,
    //     forgotPassword: 460,
    //     createAccount: 600
    //   }

    //   return map[this.currentMode]
    // }


    // qrY() {
    //   return this.currentMode === 'forgotPassword' ? 460 : 600
    // }

    // qrY() {
    //   return this.currentMode === 'signIn' ? 600 : 460
    // }
  },


  template: `
    <Element w="1920" h="1080" color="#1a002b">
      <Element
        :show="$showQR"
        x="120"
        :y="$qrY"
        w="369"
        h="369"
        ref="qrContainer"
        :src="$imgSrc"
        :effects="[
                { type: 'radius', props: { radius: 25 } },
            
            ]"
      />
      <Element
        x="745"
        y="207"
        :w="$width"
        height="84"
        color="#2B2B2BFF"
        :effects="[ { type: 'radius', props: { radius: 50 } } ]"
      >
        <Layout
          direction="horizontal"
          gap="8"
          placement="{ y:'middle'}"
          padding="{ left: 8, right: 8 }"
          @updated="$onLayoutUpdated"
        >
          <ChooseButton
            :for="(button, index) in $filteredButtons"
            :ref="'btn-' + $index"
            :label="$button.label"
            :key="$button"
          />
        </Layout>
      </Element>
      <!-- <ChooseButton  label="Use phone" /> -->
    
      <AuthScreen :mode="$currentMode" :offsetY="$contentY" :loginMethod="$loginMethod" />
    
      <RemoteLogin :show="$loginMethod === 'remote'" ref="RemoteLogin" />
      <VerticalLine x="961" y="339" width="4" height="380" :show="$loginMethod === 'phone'" />
      <Text content="OR" x="944" y="723" size="28" :show="$loginMethod === 'phone'" />
      <VerticalLine x="961" y="767" width="4" height="250" :show="$loginMethod === 'phone'" />
      <VisitWebsite x="1072" y="339" :show="$loginMethod === 'phone'" :steps="$steps" :offsetY="$contentY" />
    </Element>
  `,

  hooks: {
    async ready() {
      const img = await generateQR(this.qrUrl)
      this.imgSrc = img
      console.log('asdf img: ', img)
    },
    focus() {
      this.$select('btn-0')?.$focus()
    },
  },

  watch: {
    async currentMode() {
      const img = await generateQR(this.qrUrl)
      this.imgSrc = img
    },

    hasFocus(isFocused) {
      if (isFocused) this.$trigger('focused')
    },

    focused(value) {
      const focusItem = this.$select(`btn-${value}`)
      if (focusItem && focusItem.$focus) {
        focusItem.$focus()
      }
    }
  },

  input: {
    left() {
      if (this.focused === 0) {
        // console.log('asdf parent: ', this.parent)
        this.parent.focused = 1 //set the parent focused index in order to properly shift to search button
        this.parent.$focus()
      }
      this.focused = Math.max(this.focused - 1, 0)
    },
    right() {
      this.focused = Math.min(this.focused + 1, this.buttons.length - 1)
    },
    down() {
      if (this.loginMethod === 'remote') {
        this.$select('RemoteLogin')?.$focus()
      }
    },
    enter() {
      if (this.focused === 0) {
        this.loginMethod = 'phone'
      }

      if (this.focused === 1) {
        this.loginMethod = 'remote'
      }
    }
  },

  methods: {
    goToSignIn() {
      this.currentMode = 'signIn'
      this.showAuthScreen = true
    },

    onLayoutUpdated({ w }) {
      this.width = w
      this.$size({ w, h: 80 })
    }
  }
})