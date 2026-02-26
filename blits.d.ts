import type { StoragePlugin } from '@lightningjs/blits/plugins/storage'

declare module '@lightningjs/blits' {
  interface CustomComponentProperties {
    $storage?: StoragePlugin
  }
}