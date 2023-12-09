<script lang="ts" setup>
import Snackbar from '@/components/Snackbar/index.vue';
</script>

<template>
  <v-app>
    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>
