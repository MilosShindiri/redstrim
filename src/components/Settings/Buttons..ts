import Blits from "@lightningjs/blits"

export default Blits.Component('Buttons', {
  props: ['label', 'isActive'],

  state() {
    return {

    }
  },

  template: `
    <Element w="602" h="84" :effects="[ { type: 'radius', props: { radius: 50 } } ]" :color="$backgroundColor">
      <Layout
        direction="horizontal"
        placement="{ x: 'end', y: 'middle' }"
        align-items="center"
        gap="8"
        padding="{ left: 32, right: 32 }"
      >
        <Text :content="$label" size="26" color="#fff" />
      </Layout>
    </Element>
  `,

  hooks: {
    focus() {
      this.hasFocus = true
    },
    unfocus() {
      this.hasFocus = false
    }
  },

    computed: {
      backgroundColor() {
        if (this.hasFocus) return {left:'#ED51F0', right:'#9A33FF'}       // fokus boja
        if (this.isActive) return '#9933FF40'        // selektovana ali nije fokusirana
        return 'transparent'                           // default
      }
  },

})
