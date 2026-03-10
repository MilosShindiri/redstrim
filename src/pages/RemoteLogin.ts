import Blits from '@lightningjs/blits'
import InputField from '../components/InputField'
import Button from '../components/Button'

export default Blits.Component('RemoteLogin', {
  components: { InputField, Button },

  state() { return { focusedIndex: 0 } },

  template: `
    <Element>
      <InputField ref="email" x="610" y="340" label="Email" placeholder="Enter your email" />
      <InputField ref="password" x="610" y="520" label="Password" placeholder="Enter your password" password="true" />
      <Button x="826" y="780" label="Sign In" :w="268" />
      <Button x="558" y="915" label="Forgot Password" :w="350" />
      <Button x="956" y="915" label="Don't have an account?" :w="408" />
    </Element>
  `,

hooks: {
  init() {
    // slušamo emit 'next'
    this.$listen('next', () => this.focusNext())

    // Dodajemo hidden HTML input
    const input = document.createElement('input')
    input.type = 'text'
    input.style.position = 'absolute'
    input.style.top = '-1000px' // sakrij
    document.body.appendChild(input)
    this.nativeInput = input

    // Sinhronizacija sa Blits inputom
    input.addEventListener('input', () => {
      const fieldRef = this.focusableRefs()[this.focusedIndex]
      const field = this.$select(fieldRef)
      if (field) field.value = input.value
    })

    input.addEventListener('blur', () => {
      const fieldRef = this.focusableRefs()[this.focusedIndex]
      const field = this.$select(fieldRef)
      if (field) {
        field.caretPos = field.value.length
      }
    })
  },

  focus() {
    this.setFocus()
  }
},

  methods: {
    focusableRefs() { return ['email', 'password'] },

    focusNext() {
      const max = this.focusableRefs().length - 1
      this.focusedIndex = Math.min(this.focusedIndex + 1, max)
    },

    focusPrev() {
      this.focusedIndex = Math.max(this.focusedIndex - 1, 0)
    },

    setFocus() {
      const ref = this.focusableRefs()[this.focusedIndex]
      const field = this.$select(ref)
      if (!field) return
      field.$focus()

      // Ne aktiviramo tastaturu odmah
    },

    activateNativeInput() {
      const ref = this.focusableRefs()[this.focusedIndex]
      const field = this.$select(ref)
      if (!field || !this.nativeInput) return
      this.nativeInput.value = field.value || ''
      this.nativeInput.focus()
    }
  },

  watch: {
    focusedIndex() { this.setFocus() }
  },

  input: {
    down() { this.focusNext() },
    up() { this.focusPrev() }
  },


})