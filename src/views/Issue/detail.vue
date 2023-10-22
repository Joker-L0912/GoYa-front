<script setup
        lang="ts">

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getIssueDetail } from '@/api/issue/list'
const route = useRoute()
const name = route.params.name as string
let issueDetail = ref()
onMounted(async() => {
  const { data }  = await getIssueDetail(name)
  console.log(data)
  issueDetail.value = data
})
</script>

<template>
  {{ issueDetail }}
</template>

<style scoped>

</style>
