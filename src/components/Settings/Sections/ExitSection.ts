import Blits from "@lightningjs/blits"

export default Blits.Component('ExitSection', {

  template: `
    <Element>
      <Text content="Exit App" font="poppinsBold" size="48" color="#ED51F0" />
    
      <Layout direction="vertical" gap="20" y="80">
        <Text content="Are you sure you want to exit the app?" />
      </Layout>
    </Element>
  `,
})