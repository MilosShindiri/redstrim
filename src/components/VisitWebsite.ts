import Blits from "@lightningjs/blits"
import CircleButton from "./CircleButton"

export default Blits.Component('VisitWebsite', {
    components: {
        CircleButton,
    },

      props: [
    {
      key: 'steps',
      default: () => []   // da nikad ne bude undefined
    }
  ],

  template: `
    <Element>
      <Text content="Visit website" size="48" font="poppinsSemiBold" />
    
      <Layout y="100" direction="vertical" gap="128">
        <CircleButton :for="(step, index) in $steps" :key="$index" :number="$index + 1" :label="$step" />
      </Layout>
    </Element>
  `,
    state() {
    return {
      numbers: [1, 2, 3],
    }
  },


})