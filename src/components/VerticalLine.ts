import Blits from "@lightningjs/blits"

//#FFFFFF1F
export default Blits.Component('VerticalLine', {
    props: ['width', 'height'],


  template: `
    <Layout direction="vertical">
      <Element :w="$width" :h="$height" color="#FFFFFF33" />
    </Layout>
  `
})