import { useGet } from '@/utils/request'

export const getIssueList = async (params: any) => {
  return useGet('/system/issue', params)
}
