<script setup
        lang='ts'>
import type { Ref } from 'vue'
import { computed, onMounted, ref, watch } from 'vue'
import { getIssueCount, getIssueList } from '@/api/issue/list'
import type { IssueListItem } from '@/api/issue/list'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const pageSize = ref<number>(10)
const pageNum = ref(1)
const issueList: Ref<IssueListItem[] | undefined> = ref()
const loading = ref(false)
const total: Ref<number> = ref(0)
const router = useRouter()
const userStore = useUserStore()

const pageCount = computed(() => {
  return Math.ceil(total.value / pageSize.value)
})
const headers = ref([
  {
    title: '类型',
    value: 'type',
    sortable: false,
  }, {
    title: 'ID',
    value: 'id',
  }, {
    title: '名称',
    value: 'name',
    sortable: false,
  }, {
    title: '摘要',
    value: 'gist',
    sortable: false,
  }, {
    title: '优先级',
    value: 'issuePriority',
  }, {
    title: '问题状态',
    value: 'issueStatus',
  }, {
    title: '解决结果',
    value: 'solutionResult',
  }, {
    title: '报告人',
    value: 'reportedBy',
  }, {
    title: '经办人',
    value: 'handledBy',
  }, {
    title: '创建日期',
    value: 'createdAt',
  }, {
    title: '创建人',
    value: 'createdBy',
  }])
const updatePage = async() => {
  if (loading.value === true) return
  loading.value = true
  await getIssueList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    projectId: userStore.getSelectProjectId,
  })
      .then(res => {
        issueList.value = res.data
      })
      .finally(() => {
        loading.value = false
      })
}
const updatePageCount = async() => {
  const data = await getIssueCount({
    projectId: userStore.getSelectProjectId,
  })
  total.value = data.data
}
const toIssueDetail = (name: string) => {
  router.push(`/project/${userStore.getSelectProjectId}/issue/${name}`)
}
onMounted(() => {
  watch(
      () => userStore.getSelectProjectId,
      () => {
        updatePage()
        updatePageCount()
      })
})
// 请求问题
onMounted(async() => {
  const data = await getIssueList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    projectId: userStore.getSelectProjectId,
  })
  issueList.value = data.data
})
// 获取数量
onMounted(async() => {
  updatePageCount()
})
</script>

<template>
  <div>
    <v-card class='issue-card overflow-y-auto'>
      <v-data-table :items='issueList'
                    :headers='headers'
                    density='comfortable'
                    :items-per-page='pageSize'
                    :page='pageNum'
                    :show-current-page='true'
                    :total-items='total'
                    :hover='true'
                    :loading='loading'>
        <template #[`item.type`]='{ value }'>
          <v-img :src='`/src/assets/svg/${value}.svg`'
                 width='17'
                 :alt='value' />
        </template>
        <template #[`item.name`]='{ value }'>
          <div class='link cursor-pointer'
               @click='toIssueDetail(value)'>
            {{ value }}
          </div>
        </template>
        <template #[`item.gist`]='{ value }'>
          <v-sheet class='bg-transparent'
                   max-width='600px'>
            {{ value }}
          </v-sheet>
        </template>
        <template #bottom>
          <div class='pt-2 d-flex flex-row-reverse pr-10'>
            <v-pagination v-model='pageNum'
                          :length='pageCount'
                          density='comfortable'
                          :total-visible='6'
                          @update:model-value='updatePage' />
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<style scoped
       lang='less'>
.issue-card {
  max-height: calc(100vh - 64px);
}

.link {
  color: #0c66e4;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline #0c66e4 2px;
}
</style>
