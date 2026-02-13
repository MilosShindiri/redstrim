/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import blitsVitePlugins from '@lightningjs/blits/vite'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    base: '/', // Set to your base path if you are deploying to a subdirectory (example: /myApp/)
    plugins: [
      ...blitsVitePlugins,
      // legacy({
      //   targets: 'chrome >= 57 and chrome < 63',
      //   renderModernChunks: false,
      // }),
    ],
    resolve: {
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'],
    },
    server: {
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
      },
      fs: {
        allow: ['..'],
      },
    },
    worker: {
      format: 'es',
    },
    build: {
      target: 'es2015',
      rollupOptions: {
        output: {
          format: 'iife',
        },
      },
    },
  }
})
