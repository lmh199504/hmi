import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageParams,
  EditParams,
  CreateParams,
  DeleteParams,
  StatusParams,
  PageDictDataDTO,
  DictDataDTO,
} from "@/services/types/source/dictData";

// 分页查询列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageDictDataDTO>>(
    "/cds-basic/dict-data/page",
    Method.GET,
    params
  );
};

export const reqSelectPage = (params: PageParams) => {
  return https.request<RequestResult<DictDataDTO[]>>(
    "/cds-basic/dict-data/all",
    Method.GET,
    params
  );
};

// 修改
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/dict-data", Method.PUT, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/dict-data", Method.POST, params);
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/dict-data", Method.DELETE, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-basic/dict-data/enable", Method.PATCH, params);
};
