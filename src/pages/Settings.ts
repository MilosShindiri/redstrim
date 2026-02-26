import Blits from '@lightningjs/blits'
import GoBackButton from '../components/Settings/GoBackButton'
import SideBar from '../components/Settings/SideBar'
import { DeviceInfo, getStoredDeviceInfo } from '../utils/deviceInfo'
import ContentPanel from '../components/Settings/ContentPanel'


export default Blits.Component('Settings', {
  components: {
    GoBackButton,
    SideBar,
    ContentPanel
  },

  template: `
    <Element w="1920" h="1080" color="#000000">
      <Text content="Settings" font="poppinsBold" x="110" y="48"></Text>
      <GoBackButton x="99" y="116" ref="goback" />
      <SideBar ref="sidebar" :selectedSection="$selectedSection" />
      <ContentPanel x="960" y="48" :deviceInfo="$deviceInfo" :section="$selectedSection" />
    </Element>
  `,

    state() {
        return {
            focused: 0,
            selectedSection: 'Device information', // default

            deviceInfo: null as DeviceInfo | null
        }
    },

    watch: {
        focused(v: number) {
            if (v === 0) {
                this.$select('goback')?.$focus()
            } else if (v === 1) {
                this.$select('sidebar')?.$focus()
            }
        },
  },

  hooks: {
  init() {
    this.$listen('sectionSelected', (section: string) => {
      this.selectedSection = section
    })
  },
    ready() {
      this.$select('goback')?.$focus()

      const info = getStoredDeviceInfo(this.$storage)
      this.deviceInfo = info

      // console.log('📦 SETTINGS DEVICE INFO →', info)
    },
    focus() {
      this.$trigger('focused')
    },
  },

  input:{
    down() {
      this.focused = 1
    },
    up() {
      this.focused = 0
    },
  },

  // methods: {
  //   onSectionSelected(section: string) {
  //     this.selectedSection = section
  //   }
  // }

})
