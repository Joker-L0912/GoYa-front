import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ContentTypeEnum, RequestEnum } from '@/enum/http-enum'

export interface ResponseBody<T = any> {
  code: number
  data?: T
  msg: string
}

export interface RequestConfigExtra {
  token?: boolean
  customDev?: boolean
  loading?: boolean
}
const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 100000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
})
const requestHandler = async (config: InternalAxiosRequestConfig & RequestConfigExtra): Promise<InternalAxiosRequestConfig> => {
  // 处理请求前的url
  return config
}

const responseHandler = (response: any): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data
}

const errorHandler = (error: AxiosError): Promise<any> => {
  if (error.response) {
    // const { data, status, statusText } = error.response as AxiosResponse<ResponseBody>
  }
  return Promise.reject(error)
}
interface AxiosOptions<T> {
  url: string
  params?: T
  data?: T
}
instance.interceptors.request.use(requestHandler)

// instance.interceptors.response.use(responseHandler, errorHandler)

export default instance
const instancePromise = <R = any, T = any>(options: AxiosOptions<T> & RequestConfigExtra): Promise<ResponseBody<R>> => {
  const { loading } = options
  return new Promise((resolve, reject) => {
    instance.request(options).then((res) => {
      resolve(res as any)
    }).catch((e: Error | AxiosError) => {
      reject(e)
    })
      .finally(() => {
        if (loading) { /* empty */ }
        // axiosLoading.closeLoading()
      })
  })
}
export const useGet = < R=any, T = any> (url: string, params?: T, config?: AxiosRequestConfig & RequestConfigExtra): Promise<ResponseBody<R>> => {
  const options = {
    url,
    params,
    method: RequestEnum.GET,
    ...config,
  }
  return instancePromise< R, T >(options)
}

export const usePost = < R=any, T = any>(url: string, data?: T, config?: AxiosRequestConfig & RequestConfigExtra): Promise<ResponseBody<R>> => {
  const options = {
    url,
    data,
    method: RequestEnum.POST,
    ...config,
  }
  return instancePromise< R, T >(options)
}

export const usePut = < R=any, T = any>(url: string, data?: T, config?: AxiosRequestConfig & RequestConfigExtra): Promise<ResponseBody<R>> => {
  const options = {
    url,
    data,
    method: RequestEnum.PUT,
    ...config,
  }
  return instancePromise<R, T>(options)
}

export const useDelete = < R=any, T = any>(url: string, data?: T, config?: AxiosRequestConfig & RequestConfigExtra): Promise<ResponseBody<R>> => {
  const options = {
    url,
    data,
    method: RequestEnum.DELETE,
    ...config,
  }
  return instancePromise<R, T>(options)
}
