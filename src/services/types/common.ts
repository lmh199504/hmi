/**
 * 文件上传返回
 */

export interface UploadReturn {
  createBy: string;
  createId: string;
  createTime: string;
  delFlag: number;
  id: string;
  remark?: string;
  remarkEn?: string;
  storageMode: number;
  tenantId: string;
  updateBy: string;
  updateId: string;
  updateTime: string;
  url: string;
  version: number;
}
