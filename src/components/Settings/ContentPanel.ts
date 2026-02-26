import Blits from "@lightningjs/blits";
import DeviceInfoSection from "./Sections/DeviceInfoSection";
import AccountSection from "./Sections/AccountSection";
import ContactSection from "./Sections/ContactSection";
import RestartSection from "./Sections/RestartSection";
import ExitSection from "./Sections/ExitSection";
import LogoutSection from "./Sections/LogoutSection";

export default Blits.Component('ContentPanel', {
  props: ['deviceInfo', 'section'],

  components: {
    DeviceInfoSection,
    AccountSection,
    ContactSection,
    RestartSection,
    ExitSection,
    LogoutSection
  },

  template: `
    <Element>
      <DeviceInfoSection :show="$section === 'Device information'" :deviceInfo="$deviceInfo" />
    
      <AccountSection :show="$section === 'Account information'" />
    
      <ContactSection :show="$section === 'Contact us'" :deviceInfo="$deviceInfo" />
    
      <RestartSection :show="$section === 'Restart App'" :deviceInfo="$deviceInfo" />
    
      <ExitSection :show="$section === 'Exit App'" :deviceInfo="$deviceInfo" />
    
      <LogoutSection :show="$section === 'Logout'" :deviceInfo="$deviceInfo" />
    </Element>
  `,
})