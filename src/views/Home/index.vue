<script lang="ts" setup>
import MessageUtil from '@/utils/message'
</script>

<template>
  123
  <v-btn @click='MessageUtil.success("操作成功")' />
  <v-btn @click='MessageUtil.error("操作失败")' />
</template>

<style scoped>

</style>
