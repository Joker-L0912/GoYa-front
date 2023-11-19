<script setup
        lang='ts'>
import { ref } from 'vue'

const itemList = ref([ // 水平一级菜单栏的菜单
  {
    name: 'Home',
    path: '/Home',
    title: '工作',
  },
  {
    name: 'issue',
    path: '/issue',
    title: '问题',
  },
  {
    name: 'test2',
    path: '/test2',
    title: '测试',
  },
])
const menuList = ref<string[]>(['工作', '项目', '筛选器', '仪表盘', '团队', '计划', '应用'])
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
        <div class='menu-container'
             v-for='(item, idx) in menuList'
             :key='idx'>
          <v-menu location='top'>
            <template #activator='{ props }'>
              <v-btn v-bind='props'
                     class='text-body-1 px-2'>
                <div class='d-flex justify-center align-center'>
                  <div class='h-100'>
                    {{ item }}
                  </div>
                  <div>
                    <v-icon icon='mdi-chevron-down'
                            size='20'
                            h-100 />
                  </div>
                </div>
              </v-btn>
            </template>
            <v-list :nav='true'>
              <v-list-item v-for='(item1, index) in itemList'
                           :key='index'
                           :value='index'
                           :to='item1.path'>
                <v-list-item-title>{{ item1.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-btn class='bg-white'>创建</v-btn>
      </v-sheet>
    </v-toolbar>
  </v-app-bar>
</template>

<style scoped
       lang='less'>
.menu-container{
  margin-left: 10px;
}
</style>
