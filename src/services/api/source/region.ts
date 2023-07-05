import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageRegionDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/source/region";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageRegionDTO>>(
    "/cds-basic/region/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/region", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/region", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/region", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-basic/region/enable", Method.PATCH, params);
};
