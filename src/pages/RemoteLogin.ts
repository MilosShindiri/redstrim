import Blits from '@lightningjs/blits'
import InputField from '../components/InputField'

export default Blits.Component('RemoteLogin', {
  components: { InputField },

  state() {
    return { focusedIndex: 0 }
  },

  template: `
    <Element>
      <InputField ref="email" x="610" y="340" label="Email" placeholder="Enter your email" />
      <InputField ref="password" x="610" y="520" label="Password" placeholder="Enter your password" password="true" />
    </Element>
  `,

  hooks: {
    init() {
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
        // Kad izgubi fokus, vrati caret poziciju
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
    focusableRefs() {
      return ['email', 'password']
    },

    focusNext() {
      const maxIndex = this.focusableRefs().length - 1
      this.focusedIndex = Math.min(this.focusedIndex + 1, maxIndex)
    },

    focusPrev() {
      this.focusedIndex = Math.max(this.focusedIndex - 1, 0)
    },

    setFocus() {
      const ref = this.focusableRefs()[this.focusedIndex]
      const el = this.$select(ref)
      if (el) el.$focus()

      // Aktiviraj nativnu tastaturu
      if (this.nativeInput) {
        this.nativeInput.value = el.value || ''
        this.nativeInput.focus()
      }
    }
  },

  watch: {
    focusedIndex() {
      this.setFocus()
    }
  },

  input: {
    down() { this.focusNext() },
    up() { this.focusPrev() }
  }
})