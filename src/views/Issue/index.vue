<script lang="ts" setup>
import SideBar from '@/components/SideBar/index.vue'
</script>

<template>
  <v-app>
    <v-layout class='rounded rounded-md'>
      <SideBar />
      <v-main style='min-height: 300px;'>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>
</style>
