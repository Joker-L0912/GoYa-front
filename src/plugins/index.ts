import type { App } from 'vue'
import router from '../router'
import vuetify from './vuetify'
import { createPinia } from 'pinia'

const pinia = createPinia();
export function registerPlugins(app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)

}
