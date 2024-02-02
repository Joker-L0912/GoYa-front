<script setup
        lang='ts'>
import { ProjectCategory, ProjectListItem, ProjectType, getAllProjectCategory, getAllProjectType, getProjectById, updateProjectApi } from '@/api/project/project';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { VSelect } from 'vuetify/lib/components/index.mjs';
const router = useRouter();
const projectInfo  = ref<ProjectListItem>();
const projectCategoryList = ref<ProjectCategory[]>();
const projectTypeList = ref<ProjectType[]>();
onMounted(async() => {
  const projectId = Number(router.currentRoute.value.params.projectId);
  const { data } = await getProjectById(projectId)
  projectInfo.value = data

});
onMounted(async() => {
  const { data } = await getAllProjectCategory()
  projectCategoryList.value = data
  
});
onMounted(async() => {
  const { data } = await getAllProjectType()
  projectTypeList.value = data

})

const getItemValue = (item: any) => {
  return item
};

const updateProject = async() => {
  console.log(projectInfo.value)
  if (projectInfo.value) {
    const { data } = await updateProjectApi(projectInfo.value)
    projectInfo.value = data
  }
}
</script>

<template>
  <v-form v-if='projectInfo'>
    <v-container :fluid='true'>
      <v-row :no-gutters='true'>
        <v-col cols='4'
               offset='4'>
          <v-text-field v-model='projectInfo.name'
                        label='项目名称' />
        </v-col>
      </v-row>
      <v-row :no-gutters='true'>
        <v-col cols='2'
               offset='4'>
          <v-text-field v-model='projectInfo.keyword'
                        label='关键字' />
        </v-col>
      </v-row>
      <v-row :no-gutters='true'>
        <v-col cols='4'
               offset='4'>
          <v-select v-model='projectInfo.category'
                    :items='projectCategoryList'
                    item-title='name' 
                    :item-value='getItemValue'
                    label='项目类别' />
        </v-col>
      </v-row>
      <v-row :no-gutters='true'>
        <v-col cols='4'
               offset='4'>
          <v-select v-model='projectInfo.type'
                    :items='projectTypeList'
                    item-title='name'
                    :item-value='getItemValue'
                    label='项目类型' />
        </v-col>
      </v-row>
      <v-row :no-gutters='true'>
        <v-col cols='4'
               offset='4'>
          <v-textarea v-model='projectInfo.description'
                      label='项目描述' />
        </v-col>
      </v-row>
      <v-row :no-gutters='true'>
        <v-col cols='4'
               offset='4'>
          <v-text-field v-model='projectInfo.manager'
                        label='项目负责人' />
        </v-col>
      </v-row>
      <v-row :no-gutters='true'>
        <v-col class='d-flex justify-space-between' 
               offset='4'
               cols='1'>
          <v-btn @click='updateProject'>
            保存
          </v-btn>
          <v-btn>
            删除
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>

</style>
