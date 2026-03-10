import Blits from '@lightningjs/blits'

export default Blits.Component('InputField', {
  props: [
    { key: 'label' },
    { key: 'placeholder' },
    { key: 'password', default: false }
  ],

  state() {
    return {
      value: '',
      focused: false,
      caretVisible: true,
      caretInterval: null as any,
      caretPos: 0,
    }
  },

computed: {
  displayText() {
    let text = this.password ? '*'.repeat(this.value.length) : this.value
    if (!this.focused) return text || this.placeholder

    // Caret uvek na caretPos
    const caret = this.caretVisible ? '|' : ''
    return text.slice(0, this.caretPos) + caret + text.slice(this.caretPos)
  }
},


  template: `
    <Element>
      <Text :content="$label" size="28" font="poppinsBold" y="-10" />
      <Element
        y="40"
        w="700"
        h="100"
        color="#00000000"
        :stroke="$focused ? '#ffffff' : '#ffffff55'"
        :effects="[{ type:'radius', props:{ radius: 50 }}, { type: 'border', props: { width: 4, color: '#8F8F8F' } }]"
      >
        <Text x="20" y="26" :content="$displayText" :alpha="$value ? 1 : 0.5" />
      </Element>
    </Element>
  `,

  hooks: {
    focus() {
      this.focused = true
      this.caretInterval = setInterval(() => {
        this.caretVisible = !this.caretVisible
      }, 500)
    },

    unfocus() {
      this.focused = false
      clearInterval(this.caretInterval)
      this.caretVisible = false
      this.caretPos = this.value.length
    }
  },

input: {
  any(e: any) {
    const key = e.key
    if (!key) return

    if (key === 'Backspace' && this.caretPos > 0) {
      this.value =
        this.value.slice(0, this.caretPos - 1) +
        this.value.slice(this.caretPos)
      this.caretPos--
      return
    }

    if (key.length === 1) {
      this.value =
        this.value.slice(0, this.caretPos) +
        key +
        this.value.slice(this.caretPos)
      this.caretPos++
    }
  },

  left() {
    if (this.caretPos > 0) this.caretPos--
  },

  right() {
    if (this.caretPos < this.value.length) this.caretPos++
  },

  enter() {
    this.$emit('activateNativeInput')
    this.$emit('next')
  },

  down() { this.$emit('next') },
  up(e) { if (this.parent) this.parent.$input(e) }
}
})