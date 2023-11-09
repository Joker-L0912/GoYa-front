<script lang="ts" setup>
import { LoginRequestData } from '@/api/login/types/login'
import { onMounted, ref, getCurrentInstance, reactive } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

let instance: any

const loginFormData: LoginRequestData = reactive({
  username: 'admin',
  password: '12345678',
})
onMounted(() => {
  instance = getCurrentInstance()
})
const reset = () => {
  instance.ctx.$refs.form.reset()
}
const handleLogin = () => {
  console.log(123)
  useUserStore()
      .login(loginFormData)
      .then(() => {
        router.push({ path: '/' })
      })
      .catch(() => {
        loginFormData.password = ''
      })
      .finally(() => {

      })
}
</script>

<template>
  <v-container class='h-100  d-flex align-center justify-center'>
    <v-card width='500'>
      <v-card-title>用户登录</v-card-title>
      <v-card-text class='pa-8'>
        <v-form ref='form'>
          <v-text-field variant='underlined'
                        v-model='username'
                        :counter='20'
                        label='账号'
                        prepend-icon='mdi-account' />
          <v-text-field variant='underlined'
                        v-model='password'
                        :counter='20'
                        label='密码'
                        prepend-icon='mdi-lock'
                        type='password' />
          <v-row class='mt-5'>
            <v-btn class='ml-5'
                   @click='handleLogin'>
              提交
            </v-btn>
            <v-btn class='ml-5'
                   @click='reset'>
              复位
            </v-btn>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang='scss' scoped>
body{
  background-color: #f0f0f0;
}
</style>
