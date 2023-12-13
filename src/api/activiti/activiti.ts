import { useGet } from '@/utils/request'

export const getNextLine = async param => {
  return useGet<any>('/workflow/flowNode/nextline', param)
}
