<script setup
        lang='ts'>
const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
</script>

<template>
  <v-col cols='6'>
    <v-row>
      <v-select label='项目'
                :items='items'
                item-title='state'
                item-value='abbr'
                variant='outlined' />
    </v-row>
    <v-row>
      <v-select label='问题类型'
                :items='items'
                item-title='state'
                item-value='abbr'
                variant='outlined' />
    </v-row>
  </v-col>
  <v-divider class='border-opacity-75' />
  <br>
  <v-col>
    <v-row>
      <v-text-field label='摘要'
                    dense />
    </v-row>
    <v-row>
      <v-textarea auto-grow
                  variant='filled'
                  label='描述'
                  rows='2' />
    </v-row>
    <v-row>
      <v-select label='优先级别'
                :items='items'
                item-title='state'
                item-value='abbr'
                variant='outlined' />
    </v-row>
    <v-row>
      <v-select label='影响版本'
                :items='items'
                item-title='state'
                item-value='abbr'
                variant='outlined' />
    </v-row>
    <v-row>
      <v-select label='修复版本'
                :items='items'
                item-title='state'
                item-value='abbr'
                variant='outlined' />
    </v-row>
    <v-row>
      <v-select label='所属模块'
                :items='items'
                item-title='state'
                item-value='abbr'
                variant='outlined' />
    </v-row>
    <v-row>
      <v-select label='经办人'
                :items='items'
                item-title='state'
                item-value='abbr'
                variant='outlined' />
    </v-row>
    <v-row>
      <v-select label='测试人人员'
                :items='items'
                item-title='state'
                item-value='abbr'
                variant='outlined' />
    </v-row>
    <v-row>
      <v-select label='开发人员'
                :items='items'
                item-title='state'
                item-value='abbr'
                variant='outlined' />
    </v-row>
  </v-col>
</template>

<style scoped>

</style>
