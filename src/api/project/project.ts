import { useGet } from '@/utils/request'

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
    category: string;
    createdAt: string;
    createdBy: string;
    description: null | string;
    icon: null | string;
    id: number;
    issueCount: number;
    keyword: string;
    manager: null | string;
    name: string;
    status: null | string;
    type: string;
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

export const getProjectList = async(params: any): Promise<ApiResponseData<ProjectListResponse>> => {
    return useGet<ProjectListResponse>('/issue/project/list', params);
}
