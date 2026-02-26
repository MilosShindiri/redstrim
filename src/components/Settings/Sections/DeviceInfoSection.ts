import Blits from "@lightningjs/blits"

export default Blits.Component('DeviceInfoSection', {
  props: ['deviceInfo'],

  template: `
    <Element>
      <Text content="Device information" font="poppinsBold" size="48" color="#ED51F0" />
    
      <Layout direction="vertical" gap="18" y="80">
        <Text content="OS Version" font="poppinsBold" />
        <Text :content="$deviceInfo?.osVersion || '-'" />
        <Element h="10" />
        <Text content="TV Model Number" font="poppinsBold" />
        <Text :content="$deviceInfo?.tvModel || '-'" maxwidth="840" maxlines="1" />
        <Element h="10" />
        <Text content="UDID" font="poppinsBold" />
        <Text :content="$deviceInfo?.udid || '-'" />
        <Element h="10" />
        <Text content="App Version" font="poppinsBold" />
        <Text :content="$deviceInfo?.appVersion || '-'" />
        <Element h="10" />
        <Text content="User ID" font="poppinsBold" />
        <Text :content="$deviceInfo?.userId || '-'" />
        <Element h="10" />
        <Text content="Android App Version:" font="poppinsBold" />
        <Text :content="$deviceInfo?.androidAppVersion || '-'" />
      </Layout>
    </Element>
  `,
})