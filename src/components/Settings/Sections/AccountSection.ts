import Blits from "@lightningjs/blits"

export default Blits.Component('AccountSection', {

  template: `
    <Element>
      <Text content="Account information" font="poppinsBold" size="48" color="#ED51F0" />
    
      <Layout direction="vertical" gap="20" y="80">
        <Text content="Profile name" font="poppinsBold" />
        <Text content="Loai" />
        <Element h="20" />
        <Text content="Account Email" font="poppinsBold" />
        <Text content="example@email.com" />
        <Element h="20" />
        <Text content="Country / Language" font="poppinsBold" />
        <Text content="AU / en-AU" />
      </Layout>
    </Element>
  `,
})