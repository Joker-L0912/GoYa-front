import type { App } from 'vue'
import router from '../router'
import vuetify from './vuetify'
import { createPinia } from 'pinia'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const pinia = createPinia();
export function registerPlugins(app: App) {
  app.use(pinia)
    .use(vuetify)
    .use(router)
    .use(
      Vue3Toasity,
      {
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
        transition: toast.TRANSITIONS.SLIDE,
        dangerouslyHTMLString: true,
        theme: 'light',
        hideProgressBar: true,
      } as ToastContainerOptions,
    )
}
