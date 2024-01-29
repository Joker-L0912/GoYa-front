import { useGet } from '@/utils/request'

export interface UserInfoResponseData {
    password: string;
    permits: string[];
    phone: string;
    userId: number;
    username: string;
}

/** 获取用户详情 */
export function getUserInfoApi() {
    return useGet<UserInfoResponseData>('auth/user/info')
}

