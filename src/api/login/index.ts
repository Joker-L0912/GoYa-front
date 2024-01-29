import type * as Login from './types/login'
import { usePost } from '@/utils/request'
/** 登录并返回 Token */
export function loginApi(params: Login.LoginRequestData) {
    return usePost<Login.LoginResponseData>('auth/user/login', params)
}
