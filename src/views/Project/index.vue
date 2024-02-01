<script setup
        lang='ts'>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('mounted');
});
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped>

</style>
