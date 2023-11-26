<script setup
        lang="ts">

import IssueInfoLeft from '@/components/IssueInfo/IssueInfoLeft.vue'
import IssueInfoRight from '@/components/IssueInfo/IssueInfoRight.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getIssue, Issue } from '@/api/issue/list'
const route = useRoute()
const name = route.params.name as string
let issueDetail = ref<Issue>()
onMounted(async() => {
  const { data }  = await getIssue(name)
  console.log(data)
  issueDetail.value = data
})
</script>

<template>
  <!--  <v-container class='bg-surface-variant'>-->
  <v-row no-gutters>
    <v-col class='v-col-8'>
      <v-card class='detail-card overflow-y-auto'>
        <IssueInfoLeft :issue-info='issueDetail' />
      </v-card>
    </v-col>
    <v-col class='v-col-4'>
      <v-card class='detail-card'>
        <IssueInfoRight :issue-info='issueDetail' />
      </v-card>
    </v-col>
  </v-row>
<!--  </v-container>-->
</template>

<style scoped>
.detail-card{
  min-height: calc(100vh - 64px);
  max-height: calc(100vh - 64px);
  padding: 20px;
}
</style>
