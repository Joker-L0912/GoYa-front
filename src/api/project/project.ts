import { useGet } from '@/utils/request';

/**
 * Request
 */

export interface ProjectListResponse {
    content: ProjectListItem[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    sort: DataSort;
    totalElements: number;
    totalPages: number;
}

export interface ProjectListItem {
    category: ProjectCategory;
    createdAt: string;
    createdBy: string;
    description: string;
    id: number;
    issueCount: number;
    keyword: string;
    manager: string;
    name: string;
    type: ProjectType;
    updatedAt: string;
    updatedBy: string;
}

export interface Pageable {
    offset: number;
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    sort: PageableSort;
    unpaged: boolean;
}

export interface PageableSort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface DataSort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface ProjectCategory {
    createdAt: string;
    createdBy: string;
    id: number;
    name: string;
    updatedAt: string;
    updatedBy: string;
    [property: string]: any;
}

export interface ProjectType {
    createdAt: string;
    createdBy: string;
    id: number;
    name: string;
    updatedAt: string;
    updatedBy: string;
    [property: string]: any;
}

export const getProjectList = async(params: any): Promise<ApiResponseData<ProjectListResponse>> => {
    return useGet<ProjectListResponse>('/issue/project/list', params);
}

export const getProjectById = async(projectId: number): Promise<ApiResponseData<ProjectListItem>> => {
    return useGet<ProjectListItem>(`issue/project/${projectId}`);
}

export const getAllProjectCategory = async(): Promise<ApiResponseData<ProjectCategory[]>> => {
    return useGet<ProjectCategory[]>('/issue/projectCategory/list');
}

export const getAllProjectType = async(): Promise<ApiResponseData<ProjectType[]>> => {
    return useGet<ProjectType[]>('/issue/projectType/list');
}