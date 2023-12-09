import MessageUtil from '@/utils/message'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import { ContentTypeEnum, RequestEnum } from '@/enum/http-enum';

export interface RequestConfigExtra {
  token?: boolean;
  customDev?: boolean;
  loading?: boolean;
}

interface AxiosOptions<T> {
  url: string;
  params?: T;
  data?: T;
}

const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 100000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
});
const requestHandler = async(config: InternalAxiosRequestConfig & RequestConfigExtra): Promise<InternalAxiosRequestConfig> => {
  // 处理请求前的url
  //  替换url的请求前缀baseUrl
    config.baseURL = import.meta.env.VITE_APP_BASE_API_DEV;

  // const token = useAuthorization()
  //
  // if (token.value && config.token !== false)
  //   config.headers.set(STORAGE_AUTHORIZE_KEY, token.value)
  //
  // // 增加多语言的配置
  // const { locale } = useI18nLocale()
  // config.headers.set('Accept-Language', locale.value ?? 'zh-CN')
  // if (config.loading)
  //   axiosLoading.addLoading()
  return config;
};

const responseHandler = (response: any): ApiResponseData<any> | AxiosResponse<any> | Promise<any> | any => {
  // const data = response.data;
  // if (data.code !== '00000') {
  //   MessageUtil.error(data.message)
  // }
  return response.data;
};
//
// const errorHandler = (error: AxiosError): Promise<any> => {
//   if (error.response) {
//     // const { data, status, statusText } = error.response as AxiosResponse<ResponseBody>
//   }
//   return Promise.reject(error);
// };
instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(responseHandler);
export default instance;
const instancePromise = async <R = any, T = any>(options: AxiosOptions<T> & RequestConfigExtra): Promise<ApiResponseData<R>> => {
  const { loading } = options;
  // instance.request<ApiResponseData<R>>(options)
  return new Promise((resolve, reject) => {
    instance.request<ApiResponseData<R>>(options).then(res => {
      resolve(res as any);
    }).catch((e: Error | AxiosError) => {
      reject(e);
    })
      .finally(() => {
        if (loading) { /* empty */ }
        // axiosLoading.closeLoading()
      });
  });
};
export const useGet = < R=any, T = any> (url: string, params?: T, config?: AxiosRequestConfig & RequestConfigExtra): Promise<ApiResponseData<R>> => {
  const options = {
    url,
    params,
    method: RequestEnum.GET,
    ...config,
  };
  return instancePromise< R, T >(options);
};

export const usePost = < R=any, T = any>(url: string, data?: T, config?: AxiosRequestConfig & RequestConfigExtra): Promise<ApiResponseData<R>> => {
  const options = {
    url,
    data,
    method: RequestEnum.POST,
    ...config,
  };
  return instancePromise< R, T >(options);
};

export const usePut = < R=any, T = any>(url: string, data?: T, config?: AxiosRequestConfig & RequestConfigExtra): Promise<ApiResponseData<R>> => {
  const options = {
    url,
    data,
    method: RequestEnum.PUT,
    ...config,
  };
  return instancePromise<R, T>(options);
};

export const useDelete = < R=any, T = any>(url: string, data?: T, config?: AxiosRequestConfig & RequestConfigExtra): Promise<ApiResponseData<R>> => {
  const options = {
    url,
    data,
    method: RequestEnum.DELETE,
    ...config,
  };
  return instancePromise<R, T>(options);
};
