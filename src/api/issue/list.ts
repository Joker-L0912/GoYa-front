import type { ResponseBody } from '@/utils/request'
import { useGet } from '@/utils/request'

interface IssueItem {
  'createdAt': string
  'updatedAt': string
  'createdBy': string
  'updatedBy': string
  'id': number
  'name': string
  'gist': string
  'type': string
  'issuePriority': string
  'issueStatus': string
  'solutionResult': string
  'reportedBy': string
  'handledBy': string
}

export const getIssueList = async(params: any): Promise<ResponseBody<IssueItem[]>> => {
  return useGet('/system/issue', params)
}
export const getIssueCount = async(): Promise<ResponseBody<number>> => {
  return useGet<number>('/system/issue/count')
}

export const getIssueDetail = async(name: string) => {
  return useGet<any>(`/system/issue/${name}`)
}

export type { IssueItem }
