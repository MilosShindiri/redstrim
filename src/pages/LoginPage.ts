import Blits from '@lightningjs/blits'
import AuthScreen, { Mode, CONTENT } from '../constants/AuthScreen'
import { generateQR } from '../utils/qrCode'
import VisitWebsite from '../components/VisitWebsite'
import VerticalLine from '../components/VerticalLine'
import ChooseButton from '../components/ChooseButton'
import { choose } from '../constants/choose'


export default Blits.Component('LoginPage', {

  components: {
    AuthScreen,
    VisitWebsite,
    VerticalLine,
    ChooseButton
  },

  state() {
    return {
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
    filteredButtons() {
    if (this.currentMode === 'forgotPassword' || this.currentMode === 'createAccount') {
      return []
    }
    return this.buttons
  }
  },


  template: `
    <Element w="1920" h="1080" color="#1a002b">
      <Element
        x="120"
        y="600"
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
      <AuthScreen :visible="$showAuthScreen" :mode="$currentMode" />
      <VerticalLine x="961" y="339" width="4" height="380" />
      <Text content="OR" x="944" y="723" size="28" />
      <VerticalLine x="961" y="767" width="4" height="250" />
      <VisitWebsite x="1072" y="339" :steps="$steps" />
    </Element>
  `,

  hooks: {
    async ready() {
      const img = await generateQR('https://redline.com.tr/en/')
      this.imgSrc = img
      console.log('asdf img: ', img)
    },
    focus() {
      this.$select('btn-0')?.$focus()
    },
  },

    watch: {
    hasFocus(isFocused) {
      if (isFocused) this.$trigger('focused')
    },
    focused(value) {
      const focusItem = this.$select(`btn-${value}`)
      if (focusItem && focusItem.$focus) {
        focusItem.$focus()
      }
    },
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
  enter() {
        if (this.focused === 1) {
            this.$router.to('/pinKeyboard')
        }
    },
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