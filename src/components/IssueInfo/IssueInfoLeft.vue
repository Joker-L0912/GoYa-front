<script setup
        lang="ts">
import { ref, toRefs } from 'vue'

const props = defineProps({
  issueInfo: {
    type: Object,
    default: null,
  },
});
const { issueInfo } = toRefs(props)
const tab =   ref('');
</script>

<template>
  <div v-if='issueInfo'>
    <div class='text-md-body-2 text-grey mb-7'>{{ issueInfo.name }}</div>
    <div class='text-md-h6 font-weight-black'>{{ issueInfo.gist }}</div>
    <v-sheet class='py-md-4 mb-8'>
      <div class='font-weight-bold text-subtitle-1'>描述</div>
      <div class='text-grey text-md-body-2'>{{ issueInfo.description }}</div>
    </v-sheet>
    <v-sheet class='py-md-4 mb-8'>
      <div class='font-weight-bold text-subtitle-1'>附件</div>
    </v-sheet>
    <v-sheet class='py-md-4 mb-8'>
      <div class='font-weight-bold text-subtitle-1'>子问题</div>
    </v-sheet>
    <v-card elevation='0'>
      <v-tabs v-model='tab'
              color='white'
              density='compact'
              selected-class='tab-selected-class'
              slider-color='#505F79'
              align-tabs='start'>
        <v-tab value='all'>全部</v-tab>
        <v-tab value='comments'>评论</v-tab>
        <v-tab value='history'>历史记录</v-tab>
        <v-tab value='workLog'>工作日志</v-tab>
      </v-tabs>
      <v-window v-model='tab'>
        <v-window-item value='all'>
          <v-container :fluid='true'>
            all
          </v-container>
        </v-window-item>
        <v-window-item value='comments'>
          <v-container :fluid='true'>
            comments
          </v-container>
        </v-window-item>
        <v-window-item value='history'>
          <v-container :fluid='true'>history</v-container>
        </v-window-item>
        <v-window-item value='workLog'>
          <v-container :fluid='true'>workLog</v-container>
        </v-window-item>
      </v-window>
    </v-card>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    {{ issueInfo }}
  </div>
</template>

<style scoped lang="scss">
.tab-selected-class{
  background-color: #505F79;
}
</style>
