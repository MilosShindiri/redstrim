import Blits from '@lightningjs/blits'

export default Blits.Component('GetStartedButton', {
  template: `
    <Element w="$svgWidth" h="$svgHeight" :effects="[ { type: 'radius', props: { radius: 40 } } ]">
      <Element src="/assets/getStarted.svg" :w="$svgWidth" :h="$svgHeight" placement="{x:'center', y:'middle'}">
        <Element
          :w="$svgWidth"
          :h="$svgHeight"
          :alpha="$hasFocus ? 1 : 0"
          color="{left:'#ED51F0', right:'#9A33FF'}"
          :effects="[ { type: 'radius', props: { radius: 40 } } ]"
        />
      </Element>
      <Text
        content="Get Started"
        color="#fff"
        size="28"
        mount="{x:0.5, y:0.5}"
        x="50%"
        y="50%"
        @loaded="$buttonTextLoaded"
      />
    </Element>
  `,

  state() {
    return {
      hasFocus: false,
      svgWidth: 240,
      svgHeight: 80
    }
  },

  hooks: {
    focus() {
      this.hasFocus = true
    },
    unfocus() {
      this.hasFocus = false
    }
  },

  methods: {
    buttonTextLoaded(dimensions: { w: number; h: number }) {
      const paddingX = 100
      const paddingY = 50

      this.svgWidth = dimensions.w + paddingX
      this.svgHeight = dimensions.h + paddingY
    }
  }
})
