<script lang="ts" setup>
import Toast from '@/utils/toast';

const notify = () => {
  Toast.success('123')
}
</script>

<template>
  123
  <v-btn @click='notify()'>asd</v-btn>
</template>

<style scoped>

</style>
