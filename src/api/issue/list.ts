import { useGet } from '@/utils/request';

interface IssueItem {
  'createdAt': string;
  'updatedAt': string;
  'createdBy': string;
  'updatedBy': string;
  'id': number;
  'name': string;
  'gist': string;
  'type': string;
  'issuePriority': string;
  'issueStatus': string;
  'solutionResult': string;
  'reportedBy': string;
  'handledBy': string;
}

export const getIssueList = async(params: any): Promise<ApiResponseData<IssueItem[]>> => {
  return useGet('/issue/issue', params);
};
export const getIssueCount = async(): Promise<ApiResponseData<number>> => {
  return useGet<number>('/issue/issue/count');
};

export const getIssueDetail = async(name: string) => {
  return useGet<any>(`/issue/issue/${name}`);
};

export type { IssueItem };
