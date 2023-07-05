import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageLocationDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/source/location";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageLocationDTO>>(
    "/cds-basic/location/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/location", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/location", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/location", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-basic/location/enable", Method.PATCH, params);
};
