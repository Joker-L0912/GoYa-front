<script setup
        lang='ts'>
import { classPrivateMethod } from '@babel/types'
import { computed, onMounted, ref } from 'vue'
import { getIssueList } from '@/api/issue/list'

const pageSize = ref(10)
const pageNum = ref(1)
const issueList = ref([
  {
    id: 1,
    name: 'TEST-383',
    gist: 'GIST-7973',
    type_id: 3,
    project_id: 1,
    attachment: 'C:\\Users\\Administrator\\Pictures\\img_899812.png',
    description: null,
    priority_id: 0,
    status_id: 7,
    solution_result_id: 2,
    affected_version_id: 2,
    fix_version_id: 2,
    module_id: 3,
    epic_link_id: null,
    reported_by: 'lizihan999',
    handled_by: 'lizihan777',
    developed_by: 'lizihan111',
    tested_by: 'lizihan888',
    created_at: '2023-09-03 19:10:18',
    updated_at: '2023-09-08 20:03:07',
    created_by: 'lizihan666',
    updated_by: 'lizihan777',
    delete_at: null,
  },
  {
    id: 2,
    name: 'TEST-734',
    gist: 'GIST-82',
    type_id: 4,
    project_id: 1,
    attachment: null,
    description: null,
    priority_id: 0,
    status_id: 2,
    solution_result_id: 1,
    affected_version_id: 3,
    fix_version_id: 3,
    module_id: 3,
    epic_link_id: null,
    reported_by: 'lizihan333',
    handled_by: 'lizihan333',
    developed_by: 'lizihan999',
    tested_by: 'lizihan000',
    created_at: '2023-09-03 17:46:50',
    updated_at: '2023-09-08 15:25:48',
    created_by: 'lizihan111',
    updated_by: 'lizihan999',
    delete_at: null,
  },
  {
    id: 3,
    name: 'TEST-25',
    gist: 'GIST-467',
    type_id: 3,
    project_id: 1,
    attachment: '\/home\/Administrator\/Pictures\/img_597618.jpg',
    description: null,
    priority_id: 2,
    status_id: 4,
    solution_result_id: 1,
    affected_version_id: 2,
    fix_version_id: 2,
    module_id: 2,
    epic_link_id: null,
    reported_by: 'lizihan111',
    handled_by: 'lizihan999',
    developed_by: 'lizihan666',
    tested_by: 'lizihan111',
    created_at: '2023-09-01 02:33:17',
    updated_at: '2023-09-08 14:58:22',
    created_by: 'lizihan111',
    updated_by: 'lizihan555',
    delete_at: null,
  },
],
)
const loading = ref(false)
const total = ref(0)
// 请求问题
onMounted(async () => {
  const data = await getIssueList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  })
  issueList.value = data.content
  total.value = data.totalElements
})
const pageCount = computed(() => { return Math.ceil(total.value / pageSize.value) })
const headers = ref([
  {
    title: 'ID',
    value: 'id',
  },
  {
    title: '名称',
    value: 'name',
    sortable: false,
  },
  {
    title: '摘要',
    value: 'gist',
    sortable: false,
  },
  {
    title: '报告人',
    value: 'reported_by',
    sortable: false,
  }])

const updatePage = async () => {
  if (loading.value === true) return
  loading.value = true
  getIssueList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  }).then((data) => {
    issueList.value = data.content
    total.value = data.totalElements
  }).finally(() => {
    loading.value = false
  })
}
</script>

<template>
  <div>
    <v-card>
      <v-data-table :items='issueList'
                    :headers='headers'
                    density='comfortable'
                    :items-per-page='pageSize'
                    :page='pageNum'
                    :show-current-page='true'
                    :total-items='total'
                    :loading='loading'>
        <template #bottom>
          <div class='text-center pt-2'>
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

<style scoped>

</style>
