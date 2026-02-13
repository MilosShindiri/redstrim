import Blits from '@lightningjs/blits'

export default Blits.Component('TestButton', {
  template: `
    <Element
      w="240"
      h="80"
      :color="$hasFocus ? '#ff0000' : '#0000ff'"
      :effects="[ { type: 'radius', props: { radius: 40 } } ]"
    >
      <Text content="Second Button" color="#fff" size="24" mount="{x:0.5, y:0.5}" x="50%" y="50%" />
    </Element>
  `,

  state() {
    return {
      hasFocus: false
    }
  },

  hooks: {
    focus() {
      this.hasFocus = true
    },
    unfocus() {
      this.hasFocus = false
    }
  }
})
