import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageCscustDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  // EditParams,
  StatusParams,
  CscustDTO,
  EditParams,
  CscustTemporaryDTO,
  // EditFormalParams
} from "@/services/types/source/customer";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageCscustDTO>>(
    "/cds-basic/cscust/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/cscust", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/cscust", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/cscust", Method.POST, params);
};

// 编辑正式
export const reqEditFormal = (params: CscustDTO) => {
  return https.request("/cds-basic/cscust", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-basic/cscust/active", Method.PATCH, params);
};

// 获取单条数据
export const reqDetail = (id: string) => {
  return https.request<RequestResult<CscustDTO>>(
    `/cds-basic/cscust/${id}`,
    Method.GET
  );
};

// 临时客商详情
export const reqTemporay = (id: string) => {
  return https.request<RequestResult<CscustTemporaryDTO>>(
    `/cds-basic/cscust/temporary/${id}`,
    Method.GET
  );
};
