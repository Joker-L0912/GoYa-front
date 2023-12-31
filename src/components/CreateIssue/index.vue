<script setup
        lang='ts'>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { getProjectList } from '@/api/project/project';
import { getIssueType, getIssuePriority, getProjectVersion, getProjectModule, postIssue } from '@/api/issue/list'
import Toast from '@/utils/toast';
const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
const valid = ref<boolean>(false)
const projectList = ref()
const issueTypeList = ref()
const issuePriorityList = ref()
const projectVersionList = ref()
const projectModuleList = ref()
// 获取项目列表
onMounted(async() => {
  const { data } = await getProjectList({
    pageNum: 0,
    pageSize: 999,
  })
  projectList.value = data.content
})
// 获取类型
onMounted(async() => {
  const { data } = await getIssueType()
  issueTypeList.value = data
})
// 获取优先级
onMounted(async() => {
  const { data } = await getIssuePriority()
  issuePriorityList.value = data
})
// 获取优先级
onMounted(async() => {
  const { data } = await getProjectVersion()
  projectVersionList.value = data
})
// 获取模块
onMounted(async() => {
  const { data } = await getProjectModule()
  projectModuleList.value = data
})
const projectId = ref<string>('')
const gist = ref<string>('')
const issueTypeId = ref<string>('')
const description = ref<string>('')
const issuePriority = ref<string>('')
// const issueStatus = ref<string>('')
// const solutionResult = ref<string>('')
const affectedVersionId = ref<string>('')
const fixVersionId = ref<string>('')
const projectModuleId = ref<string>('')
const testedBy = ref<string>('')
const handledBy = ref<string>('')
const developedBy = ref<string>('')
const createIssueBtnLoading = ref<boolean>(false)
const dialog = ref<boolean>(false)

const createIssue = async() => {
  if (createIssueBtnLoading.value) return
  createIssueBtnLoading.value = true
  postIssue({
    projectId: projectId.value,
    gist: gist.value,
    issueTypeId: issueTypeId.value,
    description: description.value,
    issuePriority: issuePriority.value,
    // issueStatus: issueStatus.value,
    // solutionResult: solutionResult.value,
    affectedVersionId: affectedVersionId.value,
    fixVersionId: fixVersionId.value,
    projectModuleId: projectModuleId.value,
    testedBy: testedBy.value,
    handledBy: handledBy.value,
    developedBy: developedBy.value,
  }).then(res => {
    Toast.success(res.message)
  }).finally(() => {
    createIssueBtnLoading.value = false
    dialog.value = false
  })
}
</script>
<template>
  <v-dialog width='800'
            v-model='dialog'>
    <template #activator='{ props }'>
      <v-btn v-bind='props'
             class='bg-white mx-1'
             text='创建' />
    </template>
    <template #default>
      <v-card>
        <v-card-title class='bg-grey-darken-1'>
          创建问题
        </v-card-title>
        <v-card-item>
          <v-form v-model='valid'>
            <v-container>
              <v-col cols='6'>
                <v-row>
                  <v-select label='项目'
                            v-model='projectId'
                            :items='projectList'
                            item-title='keyword'
                            item-value='id'
                            variant='solo'
                            @update:model-value='console.log(projectId)' />
                </v-row>
                <v-row>
                  <v-select label='问题类型'
                            v-model='issueTypeId'
                            :items='issueTypeList'
                            item-title='name'
                            item-value='id'
                            variant='solo' />
                </v-row>
              </v-col>
              <v-divider class='border-opacity-75' />
              <br>
              <v-col>
                <v-row>
                  <v-text-field label='摘要'
                                v-model='gist'
                                variant='solo' />
                </v-row>
                <v-row>
                  <v-textarea auto-grow
                              v-model='description'
                              variant='solo'
                              label='描述' />
                </v-row>
                <v-row>
                  <v-select label='优先级别'
                            v-model='issuePriority'
                            :items='issuePriorityList'
                            item-title='name'
                            item-value='name'
                            variant='solo' />
                </v-row>
                <v-row>
                  <v-select label='影响版本'
                            v-model='affectedVersionId'
                            :items='projectVersionList'
                            item-title='name'
                            item-value='id'
                            variant='solo' />
                </v-row>
                <v-row>
                  <v-select label='修复版本'
                            v-model='fixVersionId'
                            :items='projectVersionList'
                            item-title='name'
                            item-value='id'
                            variant='solo' />
                </v-row>
                <v-row>
                  <v-select label='所属模块'
                            v-model='projectModuleId'
                            :items='projectModuleList'
                            item-title='name'
                            item-value='id'
                            variant='solo' />
                </v-row>
                <v-row>
                  <v-select label='经办人'
                            v-model='handledBy'
                            :items='items'
                            item-title='state'
                            item-value='abbr'
                            variant='solo' />
                </v-row>
                <v-row>
                  <v-select label='测试人人员'
                            v-model='testedBy'
                            :items='items'
                            item-title='state'
                            item-value='abbr'
                            variant='solo' />
                </v-row>
                <v-row>
                  <v-select label='开发人员'
                            v-model='developedBy'
                            :items='items'
                            item-title='state'
                            item-value='abbr'
                            variant='solo' />
                </v-row>
              </v-col>
            </v-container>
          </v-form>
        </v-card-item>
        <v-card-actions>
          <v-spacer />

          <v-btn text='创建'
                 class='bg-grey-darken-1'
                 :loading='createIssueBtnLoading'
                 @click='createIssue' />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>
