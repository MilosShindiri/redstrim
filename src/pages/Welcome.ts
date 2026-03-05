import Blits from '@lightningjs/blits'
import { AppStore } from '../store/AppStore'
import GetStartedButton from '../components/GetStartedButton';
import TestButton from '../components/TestButton';

// #1a002b
export default Blits.Component('Welcome', {
  components: {
     GetStartedButton,
     TestButton,
  },
  template: `
    <Element w="1920" h="1080" color="#1a002b">
      <Layout direction="vertical" align-items="center" gap="32" x="480" y="153">
        <Text content="Discover the Series Streaming" size="56" color="#fff" />
        <Layout direction="horizontal" align-items="center" gap="8">
          <Text content="Experience with" size="56" color="#fff" />
          <Layout direction="vertical" align-items="center">
            <Text content="Redstrim" size="56" color="#c455f9" @loaded="$redstrimLoaded" />
            <Element :w="$w" h="2" :y="$y" color="#c455f9" />
          </Layout>
        </Layout>
        <Text
          content="Our expert team curates top trending series for you to watch anytime – smooth, seamless, and enjoyable."
          color="#ddd"
          maxwidth="960"
          align="center"
          size="32"
          lineheight="40"
        />
        <!-- Spacer -->
        <Element h="48" />
    
        <GetStartedButton ref="btn1" />
        <TestButton ref="btn2" />
      </Layout>
    </Element>
  `,

  state() {
    return {
      w: 0,
      y: 0,
      svgWidth: 240,
      svgHeight: 80,
      focused: 1,
    }
  },

  methods: {
    redstrimLoaded(dimensions: { w: number; h: number; }) {
      this.w = dimensions.w
      this.y = dimensions.h + 6
    },

    buttonTextLoaded(dimensions: { w: number; h: number; }) {
      const paddingX = 100
      const paddingY = 50

      this.svgWidth = dimensions.w + paddingX
      this.svgHeight = dimensions.h + paddingY
      
    }
  },

  hooks: {
    ready() {
      this.$select('btn1')?.$focus()
    }
  },

  watch: {
    focused(v: string | number) {
      this.$select(`btn${v}`)?.$focus()
    }
  },

  input: {
    down() {
      this.focused = Math.min(this.focused + 1, 2)
    },
    up() {
      this.focused = Math.max(this.focused - 1, 1)
    },
    enter() {
      if (this.focused === 1) {
        this.$router.to('/home')
      }
      // if (this.focused === 2) {
      //   this.$router.to('/login')
      // }
    },
    back() {
      return
    }

  },

  computed: {
    movies() {
      return AppStore.movies
    },
    trending() {
      return AppStore.trending
    }
  }
  
})
