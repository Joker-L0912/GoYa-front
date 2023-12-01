import store from '@/store'
import { defineStore } from 'pinia'
import { loginApi } from '@/api/login'
import { type LoginRequestData } from '@/api/login/types/login'

interface userState{
    token: string,
    roles: string[],
    username: string,
    selectProjectId: string,
}

export const useUserStore = defineStore('userStore', {
    state: (): userState => ({
        token: '',
        roles: [],
        username: '',
        selectProjectId: '',
    }),
    getters: {
    },
    actions: {
        setRoles(value: string[]) {
            this.roles = value
        },
        setToken(value: string) {
            this.token = value
        },
        async login(data: LoginRequestData) {
            return loginApi(data).then(res => {
                this.setToken(res.data.data.token)
                this.token = res.data.data.token
                return res
            })
        },
        setSelectProjectId(value: string) {
            this.selectProjectId = value
        },
    },
    // /** 获取用户详情 */
    // const getInfo = async() => {
    //     const { data } = await getUserInfoApi()
    //     username.value = data.data.username
    //     // 验证返回的 roles 是否为一个非空数组，否则塞入一个没有任何作用的默认角色，防止路由守卫逻辑进入无限循环
    //     // roles.value = data.roles?.length > 0 ? data.roles : routeSettings.defaultRoles
    // }
    // /** 切换角色 */
    // const changeRoles = async(role: string) => {
    //     const newToken = 'token-' + role
    //     token.value = newToken
    //     setToken(newToken)
    //     await getInfo()
    // }
    // /** 登出 */
    // const logout = () => {
    //     removeToken()
    //     token.value = ''
    //     roles.value = []
    //
    // }
    // /** 重置 Token */
    // const resetToken = () => {
    //     removeToken()
    //     token.value = ''
    //     roles.value = []
    // }
    // const setProject = (projectId: string) => {
    //     selectProjectId.value = projectId
    // }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
    return useUserStore(store)
}
