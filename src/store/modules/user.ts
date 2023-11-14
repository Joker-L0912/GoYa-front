import { ref } from 'vue'
import store from '@/store'
import { defineStore } from 'pinia'
import { getToken, removeToken, setToken } from '@/utils/cache/cookies'
import { loginApi, getUserInfoApi } from '@/api/login'
import { type LoginRequestData } from '@/api/login/types/login'

export const useUserStore = defineStore('user', () => {
    const token = ref<string>(getToken() || '')
    const roles = ref<string[]>([])
    const username = ref<string>('')

    /** 设置角色数组 */
    const setRoles = (value: string[]) => {
        roles.value = value
    }
    /** 登录 */
    const login = async({ username, password }: LoginRequestData) => {
        const { data } = await loginApi({ username, password })
        setToken(data.data.token)
        token.value = data.data.token
    }
    /** 获取用户详情 */
    const getInfo = async() => {
        const { data } = await getUserInfoApi()
        username.value = data.data.username
        // 验证返回的 roles 是否为一个非空数组，否则塞入一个没有任何作用的默认角色，防止路由守卫逻辑进入无限循环
        // roles.value = data.roles?.length > 0 ? data.roles : routeSettings.defaultRoles
    }
    /** 切换角色 */
    const changeRoles = async(role: string) => {
        const newToken = 'token-' + role
        token.value = newToken
        setToken(newToken)
        await getInfo()
    }
    /** 登出 */
    const logout = () => {
        removeToken()
        token.value = ''
        roles.value = []

    }
    /** 重置 Token */
    const resetToken = () => {
        removeToken()
        token.value = ''
        roles.value = []
    }
    return { token, roles, username, setRoles, login, getInfo, changeRoles, logout, resetToken }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
    return useUserStore(store)
}