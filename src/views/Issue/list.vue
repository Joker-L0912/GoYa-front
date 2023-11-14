<script setup
        lang='ts'>
import type { Ref } from 'vue';
import { computed, onMounted, ref } from 'vue';
import { getIssueCount, getIssueList } from '@/api/issue/list';
import type { IssueItem } from '@/api/issue/list';

const pageSize = ref<number>(20);
const pageNum = ref(1);
const issueList: Ref<IssueItem[] | undefined> = ref();
const loading = ref(false);
const total: Ref<number> = ref(0);
// 请求问题
onMounted(async() => {
  const  data  = await getIssueList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  });
  issueList.value = data.data;
});
// 获取数量
onMounted(async() => {
  const  data  = await getIssueCount();
  if (data != null) total.value = data.data;
});

const pageCount = computed(() => { return Math.ceil(total.value / pageSize.value); });
const headers = ref([
  {
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
    title: '类型',
    value: 'type',
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
  }]);
const updatePage = async() => {
  issueList.value = [];
  if (loading.value === true) return;
  loading.value = true;
  await getIssueList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  }).then(res => {
    issueList.value = res.data;
  }).finally(() => {
    loading.value = false;
  });
};
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

<style scoped lang='less'>
.issue-card{
  max-height: calc(100vh - 64px);
}
</style>
