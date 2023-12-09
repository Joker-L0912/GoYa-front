import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import '@/styles/main.scss'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from 'vuetify/labs/VDataTable'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
})
