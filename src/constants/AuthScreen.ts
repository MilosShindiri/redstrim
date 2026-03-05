import Blits from '@lightningjs/blits'

type ContentType = {
  title: string
  qrText: string
  steps: string[]
}

export const CONTENT: Record<string, ContentType> = {
  signIn: {
    title: 'Choose how to sign in',
    qrText: 'Scan the QR code with your phone or tablet to sign in or create '+' a new account Or go to Redstrim.com/ devices and enter code H33DBC',
    steps: [
      'Go to www.Redline.com/devices',
      'Enter your code H33DBC',
      'Then pair your device'
    ]
  },
  forgotPassword: {
    title: 'Forgot Password',
    qrText: 'Use your phone camera to reset your password.',
    steps: [
      'Go to www.Redline.com/reset',
      'Enter your reset code H33DBC',
      'Set a new password and confirm it'
    ]
  },
  createAccount: {
    title: 'Create an account',
    qrText: 'Scan the QR code with your phone or tablet to     sign in or create a new account Or go to Redstrim.com/Createaccount and follow the interactions',
    steps: [
      'Go to www.Redline.com/createaccount',
      'Enter your Email and password',
      'Then follow the instructions'
    ]
  }
}

export type Mode = keyof typeof CONTENT

export default Blits.Component('AuthScreen', {
  props: [
    {
      key: 'mode',
      default: 'signIn' as Mode
    }
  ],

  computed: {
    content(): ContentType {
      return CONTENT[this.mode as Mode]
    }
  },

  template: `
    <Element w="1920" h="1080">
      <Element src="/assets/logo.png" x="878" y="48" w="164" h="42" />
      <Text :content="$content.title" fontSize="48" x="735" y="137" font="poppinsBold" size="48" color="#c455f9" />
    
      <Text content="Scan the QR code" x="120" y="340" font="poppinsSemiBold" size="48" />
    
      <Text :content="$content.qrText" x="120" y="413" w="600" maxwidth="734" maxlines="4" size="28" />
    
      <!-- <Element y="300" x="1000"> -->
      <!-- <Text :for="(step, index) in $content.steps" :key="$index" :content="$step" :y="$index * 70" /> -->
      <!-- </Element> -->
    </Element>
  `
})