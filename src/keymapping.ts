// tip za akcije dugmadi
export type KeyAction = 
  | 'back'
  | 'exit'
  | 'playPause'
  | 'pause'
  | 'play'
  | 'stop'
  | 'rewind'
  | 'fastForward'
  | 'channelUp'
  | 'channelDown';

// tip za mapu keycode → akcija
export type KeyMap = Record<string | number, KeyAction>;

// tip za jedan device keymapping
interface DeviceKeyMapping {
  test: () => boolean;
  mapping: KeyMap;
}

// svi uređaji
interface KeyMappingConfig {
  sky: DeviceKeyMapping;
  webos: DeviceKeyMapping;
  tizen: DeviceKeyMapping;
}

// query param helper
const queryParam = (param: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// definicija keymapping
const keymapping: KeyMappingConfig = {
  sky: {
    test() {
      return navigator.userAgent.indexOf('WPE Sky') > -1 || queryParam('keymapping') === 'sky';
    },
    mapping: {
      Escape: 'back',
      27: 'back',
    },
  },
  webos: {
    test() {
      return navigator.userAgent.indexOf('WebOS') > -1 || queryParam('keymapping') === 'webos';
    },
    mapping: {
      19: 'pause',
      33: 'channelUp',
      34: 'channelDown',
      412: 'rewind',
      413: 'stop',
      415: 'play',
      417: 'fastForward',
      461: 'back',
    },
  },
  tizen: {
    test() {
      return navigator.userAgent.indexOf('Tizen') > -1 || queryParam('keymapping') === 'tizen';
    },
    mapping: {
      10009: 'back',
      10252: 'playPause',
      19: 'pause',
      412: 'rewind',
      413: 'stop',
      415: 'play',
      417: 'fastForward',
      427: 'channelUp',
      428: 'channelDown',
    },
  },
};

// funkcija koja vraća aktivnu mapu
export default (): KeyMap => {
  let mapping: KeyMap = {};

  // Type assertion: svaki target je ključ KeyMappingConfig
  (Object.keys(keymapping) as Array<keyof KeyMappingConfig>).forEach((target) => {
    if (keymapping[target].test()) {
      mapping = keymapping[target].mapping;
    }
  });

  return mapping;
};