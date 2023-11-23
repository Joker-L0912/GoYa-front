<script setup
        lang='ts'>
// import { ref } from 'vue'

// const itemList = ref([ // 水平一级菜单栏的菜单
//   {
//     name: 'Home',
//     path: '/Home',
//     title: '工作',
//   },
//   {
//     name: 'issue',
//     path: '/issue',
//     title: '问题',
//   },
//   {
//     name: 'test2',
//     path: '/test2',
//     title: '测试',
//   },
// ])
// const menuList = ref<string[]>(['工作', '项目', '筛选器', '仪表盘', '团队', '计划', '应用'])
import { ref } from 'vue'
const tab = ref<string>('toMe')

const items = [
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.',
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]
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
          <v-menu :close-on-content-click='false'>
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
              <v-window v-model='tab'>
                <v-window-item value='toMe'>
                  <v-list lines='two'
                          width='350px'>
                    <v-list-item v-for='item in items'
                                 :key='item.title'
                                 :title='item.title'
                                 :subtitle='item.subtitle'>
                      <template #prepend>
                        <v-img src='@/assets/svg/bug.svg'
                               width='20'
                               height='20' />
                      </template>
                    </v-list-item>
                    <template #subtitle='{ subtitle }'>
                      <div v-html='subtitle' />
                    </template>
                  </v-list>
                </v-window-item>
                <v-window-item value='recently'>recently</v-window-item>
              </v-window>
            </v-card>
          </v-menu>
        </div>
        <v-btn class='bg-white'>创建</v-btn>
      </v-sheet>
    </v-toolbar>
  </v-app-bar>
</template>

<style scoped
       lang='less'>
.menu-container {
  margin-left: 10px;
}
</style>
