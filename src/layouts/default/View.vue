<script lang='ts' setup>
import Header from '@/components/Header/index.vue'
</script>

<template>
  <v-app>
    <v-layout class='rounded rounded-md'>
      <Header />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped lang='less'>

</style>
