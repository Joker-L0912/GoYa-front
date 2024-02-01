<script setup
        lang='ts'>
import { ref } from 'vue';

const itemList = ref([
  {
    name: 'info',
    path: 'info',
    title: '详情信息',
  },
  {
    name: 'member',
    path: 'member',
    title: '成员',
  },
  {
    name: 'permission',
    path: 'permission',
    title: '权限',
  },
])
</script>

<template>
  <v-navigation-drawer width='200'>
    <v-list :lines='false'
            :nav='true'
            active-class='side-bar-nav-active'>
      <v-list-item v-for='(item, index) in itemList'
                   :key='index'
                   :to='item.path'
                   :value='item.name'
                   lines='one'
                   class='px-4'>
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <router-view />
</template>

<style scoped>

</style>
