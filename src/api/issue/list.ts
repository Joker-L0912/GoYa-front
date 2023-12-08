import { useGet, usePost } from '@/utils/request'

/**
 * 问题列表元素
 */
export interface IssueListItem {
  'createdAt'?: string;
  'updatedAt'?: string;
  'createdBy'?: string;
  'updatedBy'?: string;
  'id': number;
  'name': string;
  'gist': string;
  'type': string;
  'issuePriority': string;
  'issueStatus': string;
  'solutionResult?': string;
  'projectName': string;
  'reportedBy': string;
  'handledBy'?: string;
}

/**
 * 问题详细
 */
export interface Issue  {
  affectedVersion: AffectedVersion;
  createdAt: string;
  createdBy: string;
  description: string;
  developedBy: string;
  epicLinkId: number | null;
  epicLinkName: string;
  fixVersion: FixVersion;
  gist: string;
  handledBy: string;
  id: number;
  issuePriority: string;
  issueStatus: string;
  issueType: IssueType;
  name: string;
  project: Project;
  projectModule: ProjectModule;
  reportedBy: string;
  solutionResult: string;
  testedBy: string;
  updatedAt: string;
  updatedBy: string;
}

export interface AffectedVersion {
  createdAt: string;
  createdBy: string;
  id: number;
  name: string;
  projectId: number;
  status: string;
  updatedAt: string;
  updatedBy: string;
}

export interface FixVersion {
  createdAt: string;
  createdBy: string;
  id: number;
  name: string;
  projectId: number;
  status: string;
  updatedAt: string;
  updatedBy: string;
}

export interface IssueType {
  createdAt: string;
  createdBy: string;
  displayName: string;
  id: number;
  name: string;
  updatedAt: string;
  updatedBy: string;
}

export interface Project {
  category: string;
  createdAt: string;
  createdBy: string;
  description: string;
  icon: string;
  id: number;
  issueCount: number;
  keyword: string;
  manager: string;
  name: string;
  status: string;
  type: string;
  updatedAt: string;
  updatedBy: string;
}

export interface ProjectModule {
  avatar: string;
  createdAt: string;
  createdBy: string;
  id: number;
  name: string;
  projectId: number;
  updatedAt: string;
  updatedBy: string;
}

export const getIssueList = async(params: any): Promise<ApiResponseData<IssueListItem[]>> => {
  return useGet<IssueListItem[]>('/issue/issue', params);
};
export const getIssueCount = async(params: any): Promise<ApiResponseData<number>> => {
  return useGet<number>('/issue/issue/count', params);
};

export const getIssue = async(name: string, params: any) => {
  return useGet<Issue>(`/issue/issue/${name}`, params);
};

export const getIssueType = async() => {
  return useGet<any>('/issue/type/list')
}

export const getIssuePriority = async() => {
  return useGet<any>('/issue/priority/list')
}

export const getProjectVersion = async() => {
  return useGet<any>('/issue/version/list')
}

export const getProjectModule = async() => {
  return useGet<any>('/issue/projectModule/list')
}

export const postIssue = async(params: any) => {
  return usePost<any>('/issue/issue', params);
}
