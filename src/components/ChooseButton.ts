import Blits from "@lightningjs/blits"

export default Blits.Component('Button', {
  props: ['label'],

  state() {
    return {
      textWidth: 0,
      height: 68,
    }
  },

  computed: {
    width() {
      const paddingX = 32 * 1
      const iconWidth = 24
      const gap = 8
      return this.textWidth + iconWidth + gap + paddingX
    }
  },

  template: `
    <Element
      :w="$width"
      :h="$height"
      :effects="[ { type: 'radius', props: { radius: 35 } } ]"
      :color="$hasFocus ? { left:'#ED51F0', right:'#9A33FF' } : '#2B2B2BFF'"
    >
      <Layout
        direction="horizontal"
        placement="{ x: 'start', y: 'middle' }"
        align-items="center"
        gap="8"
        padding="{ left: 32, right: 32 }"
      >
        <Text :content="$label" size="26" color="#fff" @loaded="$onTextLoaded" />
      </Layout>
    </Element>
  `,

  hooks: {
    // focus() {
    //   this.hasFocus = true
    // },
    // unfocus() {
    //   // console.log('dadadad1')
    //   this.hasFocus = false
    // }
  },

  methods: {
    onTextLoaded({ w }) {
      this.textWidth = w
      this.$size({ w: this.width, h: this.height })
    },
  }
})
