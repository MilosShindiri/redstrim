import Blits from "@lightningjs/blits"

export default Blits.Component('RestartSection', {

  template: `
    <Element>
      <Text content="Restart App" font="poppinsBold" size="48" color="#ED51F0" />
    
      <Layout direction="vertical" gap="20" y="80">
        <Text content="Logout your account" font="poppinsBold" />
        <Text content="Logout of your Redstrim account on this device" />
      </Layout>
    </Element>
  `,
})