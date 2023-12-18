import type * as Login from './types/login'
import { useGet, usePost } from '@/utils/request'
/** 登录并返回 Token */
export function loginApi(params: Login.LoginRequestData) {
    return usePost<Login.LoginResponseData>('auth/user/login', params)
}

/** 获取用户详情 */
export function getUserInfoApi() {
    return useGet<Login.UserInfoResponseData>('auth/info')
}
