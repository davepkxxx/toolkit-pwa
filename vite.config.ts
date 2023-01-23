import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/toolkit-pwa',
  build: {
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      mode: 'development',
      minify: false,
      injectRegister: 'inline',
      registerType: 'autoUpdate',
      manifest: {
        name: 'Toolkit App',
        short_name: 'ToolkitApp',
        start_url: '/toolkit-pwa/index.html',
        description: 'Toolkit Application',
        theme_color: '#000000',
        icons: [
          {
            src: '/toolkit-pwa/logo-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/toolkit-pwa/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
