import { URL, fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import type { ConfigEnv, UserConfig } from 'vite';
import { loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const proxyObj = {};
  if (mode === 'development' && env.VITE_APP_BASE_API_DEV && env.VITE_APP_BASE_URL_DEV) {
    proxyObj[env.VITE_APP_BASE_API_DEV] = {
      target: env.VITE_APP_BASE_URL_DEV,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_BASE_API_DEV}`), ''),
    };
  }
  return {
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      vuetify({
      }),
      // env(),
    ],
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
        '/api/workflow': {
          target: 'http://127.0.0.1:8040/',
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        },
        '/api/auth': {
          target: 'http://192.168.159.133:8010/',
          // target: 'http://127.0.0.1:8010/',
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        },
        ...proxyObj,
        // [env.VITE_APP_BASE_API]: {
        //   target: env.VITE_APP_BASE_URL,
        //   changeOrigin: true,
        //   rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        // },
      },
    },
  };
};
