import Blits from '@lightningjs/blits'

import { routes } from './router';

export default Blits.Application({
  template: `
    <Element w="1920" h="1080">
      <RouterView w="100%" h="100%" />
    </Element>`,

  state() {
    return {

    }
  },

  hooks: {

  },

  routes: routes
});