<script setup
        lang='ts'>

import { ref } from 'vue'

const isAttention = ref<boolean>(true)
const islike = ref<boolean>(true)
const changAttention = () => {
  isAttention.value = !isAttention.value
}
const changeLike = () => {
  islike.value = !islike.value
}
</script>

<template>
  <div class='d-flex justify-end mb-6'>
    <v-sheet class='ma-2 pa-2 icon-container'
             :onclick='changAttention'>
      <v-icon icon='mdi-eye-outline'
              :color='isAttention ? "#0C66E4" : ""' />
    </v-sheet>
    <v-sheet class='ma-2 pa-2 icon-container'
             @click='changeLike'>
      <v-icon icon='mdi-thumb-up-outline'
              :color='islike ? "#0C66E4" : ""' />
    </v-sheet>
    <v-sheet class='ma-2 pa-2 icon-container'>
      <v-icon icon='mdi-share-variant-outline' />
    </v-sheet>
    <v-sheet class='ma-2 pa-2 icon-container'
             :onclick='changeLike'>
      <v-menu location='bottom'>
        <template #activator='{ props }'>
          <div v-bind='props'
               class='text-body-1 px-2'>
            <div class='d-flex justify-center align-center'>
              <div>
                <v-icon icon='mdi-dots-horizontal '
                        size='20'
                        h-100 />
              </div>
            </div>
          </div>
        </template>
        <v-list :nav='true'>
          <v-list-item>
            <v-list-item-title>aaa</v-list-item-title>
            <v-list-item-title>aaa</v-list-item-title>
            <v-list-item-title>aaa</v-list-item-title>
            <v-list-item-title>aaa</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-sheet>
  </div>
</template>

<style scoped>
.icon-container:hover {
  background-color: #F1F2F4;
}

.icon-action {
  color: #0C66E4;
}
</style>
