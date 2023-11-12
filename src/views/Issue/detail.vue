<script setup
        lang="ts">

import IssueInfoLeft from '@/components/IssueInfo/IssueInfoLeft.vue'
import IssueInfoRight from '@/components/IssueInfo/IssueInfoRight.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getIssueDetail } from '@/api/issue/list'
const route = useRoute()
const name = route.params.name as string
let issueDetail = ref({
  'createdAt': '2023-09-02 01:58:21',
  'updatedAt': '2023-09-09 09:35:45',
  'createdBy': 'lizihan222',
  'updatedBy': 'lizihan777',
  'id': 72,
  'name': 'TEST-2384',
  'gist': 'GIST-261',
  'typeId': {
    'createdAt': null,
    'updatedAt': null,
    'createdBy': null,
    'updatedBy': null,
    'id': 3,
    'name': 'rdesign',
    'displayName': '',
  },
  'projectId': {
    'createdAt': null,
    'updatedAt': null,
    'createdBy': null,
    'updatedBy': null,
    'id': 1,
    'name': 'TEST',
  },
  'description': 'To successfully establish a new connection to local/remote server - no matter via SSL, SSH or HTTP, set the database login information in the General tab. I destroy my enemies when I make them my friends. Actually it is just in an idea when feel oneself can achieve and cannot achieve.',
  'issuePriority': '高',
  'issueStatus': '开发中',
  'solutionResultId': '2',
  'affectedVersionId': {
    'createdAt': null,
    'updatedAt': null,
    'createdBy': null,
    'updatedBy': null,
    'id': 4,
    'name': 'version4',
    'projectId': 2,
    'status': null,
  },
  'fixVersionId': {
    'createdAt': null,
    'updatedAt': null,
    'createdBy': null,
    'updatedBy': null,
    'id': 4,
    'name': 'version4',
    'projectId': 2,
    'status': null,
  },
  'moduleId': {
    'createdAt': null,
    'updatedAt': null,
    'createdBy': null,
    'updatedBy': null,
    'id': 5,
    'name': 'module5',
    'projectId': 1,
    'avatar': null,
  },
  'epicLinkId': null,
  'epicLinkName': 'Pluots se',
  'reportedBy': 'lizihan888',
  'handledBy': 'lizihan666',
  'developedBy': 'lizihan666',
  'testedBy': 'lizihan777',
})
// onMounted(async() => {
//   const { data }  = await getIssueDetail(name)
//   console.log(data)
//   issueDetail.value = data
// })
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
