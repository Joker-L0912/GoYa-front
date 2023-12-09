<script setup lang="ts">

import { userSnackbarStore } from '@/store/modules/snackbar';
import { computed } from 'vue';
import { mdiCheckCircleOutline, mdiAlertCircleOutline } from '@mdi/js'
const snackStore =  userSnackbarStore()
const visible = computed(() => snackStore.visible)
const color = computed(() => snackStore.color)
const icon = computed(() => snackStore.icon)
</script>

<template>
  <v-snackbar v-model='visible'
              location='top center'
              min-width='0'
              :timeout='2000'
              :color='color'>
    <div class='align-center d-flex flex-row text-shades-white'>
      <v-icon :icon='icon === "success" ? mdiCheckCircleOutline: mdiAlertCircleOutline' />
      <div class='pl-2'>{{ snackStore.msg }}</div>
      <!-- 关闭按钮 -->
    </div>
  </v-snackbar>
</template>

<style lang='sass'>

</style>

