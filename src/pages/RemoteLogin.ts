import Blits from '@lightningjs/blits'

export default Blits.Component('RemoteLogin', {
  template: `
    <Element>
      <Text content="Email" x="745" y="340" size="28" />
    
      <Element
        x="745"
        y="380"
        w="430"
        h="70"
        color="#00000000"
        :effects="[{ type:'radius', props:{ radius:35 }}]"
        stroke="#ffffff55"
      >
        <Text x="20" y="20" content="Enter your email" />
      </Element>
    
      <Text content="Password" x="745" y="480" size="28" />
    
      <Element
        x="745"
        y="520"
        w="430"
        h="70"
        color="#00000000"
        :effects="[{ type:'radius', props:{ radius:35 }}]"
        stroke="#ffffff55"
      >
        <Text x="20" y="20" content="Enter your password" />
      </Element>
    </Element>
  `
})