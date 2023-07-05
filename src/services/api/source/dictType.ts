import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageParams,
  EditParams,
  CreateParams,
  DeleteParams,
  PageDictType,
  ListParams,
  DictTypeDTO,
} from "@/services/types/source/dictType";

// 分页获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageDictType>>(
    "/cds-basic/dict-type/page",
    Method.GET,
    params
  );
};

// 修改
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/dict-type", Method.PUT, params);
};

// 添加
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/dict-type", Method.POST, params);
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/dict-type", Method.DELETE, params);
};
// 查询列表不分页
export const reqList = (params: ListParams) => {
  return https.request<RequestResult<DictTypeDTO[]>>(
    "/cds-basic/dict-type/list",
    Method.GET,
    params
  );
};
