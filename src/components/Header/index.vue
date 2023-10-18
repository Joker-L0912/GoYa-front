<script setup
        lang='ts'>
import { ref } from 'vue'

const itemList = ref([ // 水平一级菜单栏的菜单
  {
    name: 'Home',
    path: '/Home',
    title: '首页',
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
</script>

<template>
  <v-app-bar color='#59666C'
             app
             :elevation='0'>
    <v-toolbar color='#59666C'
               :flat='true'>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-sheet class='d-flex align-center bg-transparent'
               height='100'>
        <v-menu location='top'>
          <template #activator='{ props }'>
            <v-btn v-bind='props'
                   class='text-body-1 px-2'>
              <div class='d-flex justify-center align-center'>
                <div class='h-100'>
                  项目
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
            <v-list-item v-for='(item, index) in itemList'
                         :key='index'
                         :value='index'
                         :to='item.path'>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-sheet>
    </v-toolbar>
  </v-app-bar>
</template>

<style scoped
       lang='less'>
.top-nav-bar {

  .top-nav-bar-list {
    display: flex;
    align-content: center;
  }
}
</style>
