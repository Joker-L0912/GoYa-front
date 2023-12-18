export interface LoginRequestData {
    /** admin 或 editor */
    username: string
    /** 密码 */
    password: string
}

export type LoginResponseData = { token: string }

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>
