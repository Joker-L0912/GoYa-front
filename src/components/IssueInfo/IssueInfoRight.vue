<script setup
        lang='ts'>

import { ref, toRefs } from 'vue'
import { mdiEyeOutline, mdiThumbUpOutline, mdiShareVariantOutline, mdiDotsVertical } from '@mdi/js';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { getProcessIssueStatusApi, taskComplete } from '@/api/activiti/activiti';
import { mdiChevronDown } from '@mdi/js';

const route = useRoute()
const issueName = route.params.name
const issueProcessStatus = ref();
// const panelFirstOpen = true
// const panelSecondOpen = true
onMounted(() => {
  getProcessIssueStatusApi({
    issueName,
  }).then(res => {
    issueProcessStatus.value = res.data
  })
})
const param = defineProps({
  issueInfo: {
    type: Object,
    default: null,
  },
});
const { issueInfo } = toRefs(param)

const isAttention = ref<boolean>(true)
const isLike = ref<boolean>(true)
const issueStautsBtnLoading = ref<boolean>(false)
const changAttention = () => {
  isAttention.value = !isAttention.value
}
const changeLike = () => {
  isLike.value = !isLike.value
}

const complete = (item: any) => {
  if (issueStautsBtnLoading.value) return
  issueStautsBtnLoading.value = true
  taskComplete({
    'issueName': issueInfo.value.name,
    'selectedNode': {
        'id': item.id,
    },
  }).then(res => {
    console.log(res)
    getProcessIssueStatusApi({
    issueName,
  }).then(res => {
    issueProcessStatus.value = res.data
  })
  }).finally(() => {
    issueStautsBtnLoading.value = false
  })
  console.log(item)
  console.log(issueInfo.value)
}

</script>

<template>
  <div v-if='issueInfo'>
    <!-- 问题详情页 右上角 -->
    <div class='d-flex justify-end mb-6'>
      <v-sheet class='ma-2 pa-2 icon-container'
               :onclick='changAttention'>
        <v-icon :icon='mdiEyeOutline'
                :color='isAttention ? "#0C66E4" : ""' />
      </v-sheet>
      <v-sheet class='ma-2 pa-2 icon-container'
               @click='changeLike'>
        <v-icon :icon='mdiThumbUpOutline'
                :color='isLike ? "#0C66E4" : ""' />
      </v-sheet>
      <v-sheet class='ma-2 pa-2 icon-container'>
        <v-icon :icon='mdiShareVariantOutline' />
      </v-sheet>
      <v-sheet class='ma-2 pa-2 icon-container'>
        <v-menu location='bottom'>
          <template #activator='{ props }'>
            <div v-bind='props'
                 class='text-body-1 px-2'>
              <div class='d-flex justify-center align-center'>
                <div>
                  <v-icon :icon='mdiDotsVertical'
                          size='20'
                          h-100 />
                </div>
              </div>
            </div>
          </template>
          <v-card min-width='300'>
            <v-list :nav='true'>
              <v-list-item v-for='(item, index) in [1,2,3]'
                           :key='index'
                           :value='index'>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-divider />
          </v-card>
        </v-menu>
      </v-sheet>
    </div>
    <div class='btn-container my-2'>
      <v-sheet class='d-flex'>
        <v-menu transition='slide-y-transition'>
          <template #activator='{ props }'>
            <v-btn v-bind='props'
                   :loading='issueStautsBtnLoading || !issueProcessStatus'
                   :append-icon='mdiChevronDown'>
              {{ issueProcessStatus?.currentNodeName }}
            </v-btn>
          </template>
          <v-list density='compact'>
            <v-list-item v-for='(item, i) in issueProcessStatus?.nextLines'
                         :key='i'
                         :value='i'
                         @click='complete(item)'>
              {{ item.name }}
              <!-- <v-list-item-title class='text-md-button'>{{ item.name }}</v-list-item-title> -->
            </v-list-item>
          </v-list>
        </v-menu>
      </v-sheet>
    </div>
    <div class='mb-6'>
      <v-card>
        <v-expansion-panels variant='accordion'
                            :model-value='["defaultInfo", "customInfo"]'
                            :multiple='true'>
          <v-expansion-panel value='defaultInfo'>
            <v-expansion-panel-title>详细信息</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card :elevation='0'>
                <v-sheet class='d-flex py-3'>
                  <div class='w-25'>经办人</div>
                  <div class='pl-6'>{{ issueInfo.handledBy }}</div>
                </v-sheet>
                <v-sheet class='d-flex py-3'>
                  <div class='w-25'>报告人</div>
                  <div class='pl-6'>{{ issueInfo.reportedBy }}</div>
                </v-sheet>
                <v-sheet class='d-flex py-3'>
                  <div class='w-25'>标签</div>
                  <div class='pl-6'>无</div>
                </v-sheet>
                <v-sheet class='d-flex py-3'>
                  <div class='w-25'>优先级</div>
                  <div class='pl-6'>{{ issueInfo.issuePriority }}</div>
                </v-sheet>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel title='更多字段'
                             text=''
                             value='customInfo' />
        </v-expansion-panels>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.icon-container:hover {
  background-color: #F1F2F4;
}
</style>
