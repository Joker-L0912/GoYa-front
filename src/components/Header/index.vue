<script setup
        lang='ts'>
import { getIssueList, IssueListItem } from '@/api/issue/list'
import { getProjectList, ProjectListResponse } from '@/api/project/project'
import CreateIssue  from '@/components/CreateIssue/index.vue'
import router from '@/router'
import { useUserStore } from '@/store/modules/user'
import { onMounted, ref, watch } from 'vue'
import { Ref } from 'vue/dist/vue'

const userStore = useUserStore()
const tab = ref<string>('toMe')
const workMenuOpen = ref<boolean>(false)
const projectMenuOpen = ref<boolean>(false)
const issueList = ref<IssueListItem[]>()
const projectListResponse: Ref<ProjectListResponse | undefined> = ref()

const valid = ref<boolean>(false)
const createIssueChild = ref()
onMounted(async() => {
  const data = await getIssueList({
    pageNum: 1,
    pageSize: 3,
    projectId: userStore.getSelectProjectId,
  })
  issueList.value = data.data
})
onMounted(async() => {
  const data = await getProjectList({
    pageNum: 0,
    pageSize: 3,
  })
  projectListResponse.value = data.data
})
watch(() => userStore.getSelectProjectId,
    async() => {
      const data = await getIssueList({
        pageNum: 1,
        pageSize: 3,
        projectId: userStore.getSelectProjectId,
      })
      issueList.value = data.data
    })
const changePage = (page: string) => {
  router.push(page)
  workMenuOpen.value = false
  projectMenuOpen.value = false
}

const createIssue = () => {
  createIssueChild.value.createIssue()
}
</script>

<template>
  <v-app-bar color='#59666C'
             app
             :elevation='0'>
    <v-toolbar color='#59666C'
               :flat='true'>
      <v-app-bar-nav-icon />

      <v-sheet class='d-flex align-center bg-transparent'
               height='100'>
        <!-- 工作菜单 -->
        <div class='menu-container'>
          <v-menu v-model='workMenuOpen'
                  :close-on-content-click='false'>
            <template #activator='{ props }'>
              <v-btn v-bind='props'
                     class='text-button px-2'>
                <div class='d-flex justify-center align-center'>
                  <div class='h-100'>您的工作</div>
                  <div>
                    <v-icon icon='mdi-chevron-down'
                            size='20'
                            h-100 />
                  </div>
                </div>
              </v-btn>
            </template>
            <!-- 工作菜单内容 -->
            <v-card>
              <v-tabs class='text-caption'
                      v-model='tab'>
                <v-tab value='toMe'>分配给我</v-tab>
                <v-tab value='recently'>最近</v-tab>
              </v-tabs>
              <v-divider />
              <v-window v-model='tab'>
                <!-- 分配给我-->
                <v-window-item value='toMe'>
                  <v-list lines='one'
                          min-width='300px'
                          max-width='400px'>
                    <v-list-item v-for='item in issueList'
                                 :key='item.name'
                                 :title='item.gist'
                                 :subtitle='item.projectName'
                                 class='py-3'
                                 @click='changePage( `/project/${userStore.getSelectProjectId}/issue/${item.name}`)'
                                 style='cursor: pointer'>
                      <template #prepend>
                        <div class='mr-3'>
                          <v-img src='@/assets/svg/bug.svg'
                                 width='20'
                                 height='20' />
                        </div>
                      </template>
                      <template #title='{ title }'>
                        <div class='text-md-body-2'>{{ title }}</div>
                      </template>
                      <template #subtitle='{ subtitle }'>
                        <div class='text-md-body-2'
                             v-html='subtitle' />
                      </template>
                    </v-list-item>
                  </v-list>
                  <v-divider />
                </v-window-item>
                <!-- 最近-->
                <v-window-item value='recently'>
                  <!--                  <v-list lines='one'-->
                  <!--                          min-width='300px'-->
                  <!--                          max-width='400px'>-->
                  <!--                    <v-list-item v-for='item in items'-->
                  <!--                                 :key='item.title'-->
                  <!--                                 :title='item.title'-->
                  <!--                                 :subtitle='item.subtitle'-->
                  <!--                                 class='py-3'>-->
                  <!--                      <template #prepend>-->
                  <!--                        <div class='mr-3'>-->
                  <!--                          <v-img src='@/assets/svg/bug.svg'-->
                  <!--                                 width='20'-->
                  <!--                                 height='20' />-->
                  <!--                        </div>-->
                  <!--                      </template>-->
                  <!--                      <template #title>-->
                  <!--                        <div class='text-md-body-2'>{{ item.title }}</div>-->
                  <!--                      </template>-->
                  <!--                      <template #subtitle='{ subtitle }'>-->
                  <!--                        <div class='text-md-body-2'-->
                  <!--                             v-html='subtitle' />-->
                  <!--                      </template>-->
                  <!--                    </v-list-item>-->
                  <!--                  </v-list>-->
                  <v-divider />
                </v-window-item>
              </v-window>
              <v-card-text @click='changePage(`/project/${userStore.getSelectProjectId}/issue/list`)'>
                总览
              </v-card-text>
            </v-card>
          </v-menu>
        </div>
        <!--  项目 -->
        <div class='menu-container'>
          <v-menu :close-on-content-click='false'
                  v-model='projectMenuOpen'>
            <template #activator='{ props }'>
              <v-btn v-bind='props'
                     class='text-button px-2'>
                <div class='d-flex justify-center align-center'>
                  <div class='h-100'>项目</div>
                  <div>
                    <v-icon icon='mdi-chevron-down'
                            size='20'
                            h-100 />
                  </div>
                </div>
              </v-btn>
            </template>
            <!-- 项目 内容 -->
            <v-card>
              <v-list lines='one'
                      min-width='300px'
                      max-width='400px'>
                <v-list-subheader>最近查看</v-list-subheader>
                <v-list-item v-for='item in projectListResponse?.content'
                             :key='item.name'
                             :title='item.name'
                             :subtitle='`${item.name}·${item.description}`'
                             class='py-3'
                             @click='changePage(`/project/${item.id}/issue`)'>
                  <template #prepend>
                    <div class='mr-3'>
                      <v-img src='@/assets/svg/bug.svg'
                             width='20'
                             height='20' />
                    </div>
                  </template>
                  <template #title>
                    <div class='text-md-body-2'>{{ item.name }}</div>
                  </template>
                  <template #subtitle='{ subtitle }'>
                    <div class='text-md-body-2'
                         v-html='subtitle' />
                  </template>
                </v-list-item>
              </v-list>
              <v-divider />
              <v-card-text @click='changePage(`/project/list`)'>查看所有项目</v-card-text>
            </v-card>
          </v-menu>
        </div>
        <!--  筛选器 -->
        <div class='menu-container'>
          <v-menu :close-on-content-click='false'>
            <template #activator='{ props }'>
              <v-btn v-bind='props'
                     class='text-button px-2'>
                <div class='d-flex justify-center align-center'>
                  <div class='h-100'>筛选器</div>
                  <div>
                    <v-icon icon='mdi-chevron-down'
                            size='20'
                            h-100 />
                  </div>
                </div>
              </v-btn>
            </template>
            <!-- 项目 内容 -->
            <v-card min-width='200px'>
              <v-divider />
              <v-card-text>查看所有筛选器</v-card-text>
            </v-card>
          </v-menu>
        </div>
        <!--  团队 -->
        <div class='menu-container'>
          <v-menu :close-on-content-click='false'>
            <template #activator='{ props }'>
              <v-btn v-bind='props'
                     class='text-button px-2'>
                <div class='d-flex justify-center align-center'>
                  <div class='h-100'>团队</div>
                  <div>
                    <v-icon icon='mdi-chevron-down'
                            size='20'
                            h-100 />
                  </div>
                </div>
              </v-btn>
            </template>
            <!-- 项目 内容 -->
            <v-card min-width='200px'>
              <v-divider />
              <v-card-text>邀请人员加入团队</v-card-text>
              <v-card-text>创建团队</v-card-text>
              <v-divider />
              <v-card-text>搜索人员和团队</v-card-text>
            </v-card>
          </v-menu>
        </div>
        <v-dialog width='800'>
          <template #activator='{ props }'>
            <v-btn v-bind='props'
                   class='bg-white mx-1'
                   text='创建' />
          </template>

          <template #default='{ isActive }'>
            <v-card>
              <v-card-title class='bg-grey-darken-1'>
                创建问题
              </v-card-title>
              <v-card-item>
                <v-form v-model='valid'>
                  <v-container>
                    <CreateIssue ref='createIssueChild' />
                  </v-container>
                </v-form>
              </v-card-item>
              <v-card-actions>
                <v-spacer />

                <v-btn text='创建'
                       @click='createIssue' />
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-sheet>
    </v-toolbar>
  </v-app-bar>
</template>

<style scoped
       lang='sass'>
.menu-container
  margin-left: 10px

.v-list-item:hover, .v-card-text:hover
  background-color: #F5F5F5
</style>
