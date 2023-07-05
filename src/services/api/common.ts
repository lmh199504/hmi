import request from "@/utils/axios";
import { UploadReturn } from "@/services/types/common";
/**
 * 文件上传
 * @param data
 * @returns
 */
export const reqUpload = (
  data: FormData,
  onUploadProgress?: (progressEvent: any) => void
) => {
  return request<RequestResult<UploadReturn>>({
    url: "/cds-basic/file/upload",
    method: "POST",
    data,
    onUploadProgress,
  });
};

// 获取文件信息
export const reqFileInfo = (params: { id: string }) => {
  return request<RequestResult<UploadReturn[]>>({
    url: "/cds-basic/file/file",
    method: "GET",
    params,
  });
};
