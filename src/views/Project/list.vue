<script setup
        lang='ts'>
import { getProjectList, ProjectListResponse } from '@/api/project/project'
import { useRouter } from 'vue-router'
// 请求项目
import { onMounted, ref, Ref } from 'vue'
const projectListResponse: Ref<ProjectListResponse | undefined> = ref();
const pageNum = ref(1);
const pageSize = ref(10);
const loading = ref(false);
const router = useRouter()
const headers = ref([
  {
    title: 'ID',
    value: 'id',
  }, {
    title: '名称',
    value: 'name',
    sortable: false,
  }, {
    title: '类型',
    value: 'type',
    sortable: false,
  }, {
    title: '关键字',
    value: 'keyword',
    sortable: false,
  }, {
    title: '负责人',
    value: 'manager',
  },  {
    title: '类别',
    value: 'category',
  }, {
    title: '描述',
    value: 'description',
  }]);
const updatePage = async() => {
  if (loading.value === true) return;
  loading.value = true;
  await getProjectList({
    pageNum: pageNum.value - 1,
    pageSize: pageSize.value,
  }).then(res => {
    projectListResponse.value = res.data;
  }).finally(() => {
    loading.value = false;
  });
};

onMounted(async() => {
  const  data  = await getProjectList({
    pageNum: pageNum.value - 1,
    pageSize: pageSize.value,
  });
  projectListResponse.value = data.data;
});
</script>

<template>
  <div>
    <v-card class='issue-card overflow-y-auto'>
      <v-data-table :items='projectListResponse?.content'
                    :headers='headers'
                    density='comfortable'
                    :items-per-page='pageSize'
                    :page='pageNum'
                    :show-current-page='true'
                    :total-items='projectListResponse?.totalElements'
                    :hover='true'>
        <template #[`item.name`]='{item}'>
          <div class='link cursor-pointer'
               @click='router.push(`/project/${item.id}/issue/list`)'>
            {{ item.name }}
          </div>
        </template>
        <template #bottom>
          <div class='text-center pt-2'>
            <v-pagination v-model='pageNum'
                          :length='projectListResponse?.totalPages'
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
.issue-card{
  max-height: calc(100vh - 64px);
}
.link{
  color: #0c66e4;
  font-weight: 600;
}

.link:hover{
  text-decoration: underline #0c66e4 2px;
}
</style>
