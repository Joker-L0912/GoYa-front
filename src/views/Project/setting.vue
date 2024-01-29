<script setup
        lang='ts'>
import { ref } from 'vue';

const itemList = ref([
  {
    name: 'list',
    path: '/issue/list',
    title: '列表',
  },
  {
    name: 'dashboard',
    path: '/issue/dashboard',
    title: '测试2',
  },
  {
    name: 'test',
    path: '/issue/detail',
    title: '测试3',
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
</template>

<style scoped>

</style>
