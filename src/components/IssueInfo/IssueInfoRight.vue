<script setup
        lang='ts'>

import { ref } from 'vue'

const param = defineProps({
  issueInfo: {
    type: Object,
    default: null,
  },
});
const issueInfo = ref(param.issueInfo);

const isAttention = ref<boolean>(true)
const islike = ref<boolean>(true)
const panel = ref<string[]>([])
const changAttention = () => {
  isAttention.value = !isAttention.value
}
const changeLike = () => {
  islike.value = !islike.value
}
</script>

<template>
  <div class='d-flex justify-end mb-6'>
    <v-sheet class='ma-2 pa-2 icon-container'
             :onclick='changAttention'>
      <v-icon icon='mdi-eye-outline'
              :color='isAttention ? "#0C66E4" : ""' />
    </v-sheet>
    <v-sheet class='ma-2 pa-2 icon-container'
             @click='changeLike'>
      <v-icon icon='mdi-thumb-up-outline'
              :color='islike ? "#0C66E4" : ""' />
    </v-sheet>
    <v-sheet class='ma-2 pa-2 icon-container'>
      <v-icon icon='mdi-share-variant-outline' />
    </v-sheet>
    <v-sheet class='ma-2 pa-2 icon-container'>
      <v-menu location='bottom'>
        <template #activator='{ props }'>
          <div v-bind='props'
               class='text-body-1 px-2'>
            <div class='d-flex justify-center align-center'>
              <div>
                <v-icon icon='mdi-dots-horizontal '
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
  <div class='d-flex mb-6'>
    <v-btn :elevation='0'
           class='status-btn'
           append-icon='mdi-chevron-down'>
      {{ issueInfo.issueStatus }}
    </v-btn>
  </div>
  <div class='mb-6'>
    <v-card>
      <v-expansion-panels variant='accordion'
                          :multiple='true'>
        <v-expansion-panel value='default-info'>
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
                           value='custom-info' />
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<style scoped>
.icon-container:hover {
  background-color: #F1F2F4;
}

.icon-action {
  color: #0C66E4;
}
.status-btn{
  background-color: #E4E4E4;
}
.status-btn:hover{
  background-color: #DCDFE4;
}
</style>
