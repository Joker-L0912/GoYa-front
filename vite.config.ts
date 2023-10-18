import { URL, fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import env from '@vitejs/plugin-vue'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true,
      }),
      // env(),
    ],
    // define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
    server: {
      port: 6678,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8888/',
          changeOrigin: true,
          rewrite: path => path.replace(/api/, ''),
        },
      },
    },
  }
}
