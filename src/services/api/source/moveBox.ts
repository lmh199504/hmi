import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageMoveCodeDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/source/moveBox";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageMoveCodeDTO>>(
    "/cds-basic/move-code/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/move-code", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/move-code", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/move-code", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-basic/move-code/enable", Method.PATCH, params);
};
