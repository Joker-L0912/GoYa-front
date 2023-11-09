<script lang="ts" setup>
import SideBar from '@/components/SideBar/index.vue';
</script>

<template>
  <v-layout class='rounded rounded-md'>
    <SideBar />
    <v-main style='min-height: 300px;'>
      <router-view />
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
