import { useGet, usePost } from '@/utils/request'

export const getProcessIssueStatusApi = async(param: any) => {
  return useGet<any>('/workflow/flowNode/nextline', param)
}

export const taskComplete = async(params:any) => {
  return usePost<any>('/issue/issue/complete', params)
}