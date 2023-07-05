import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageDamageTypeDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/source/damageType";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageDamageTypeDTO>>(
    "/cds-basic/repair-damage-type/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/repair-damage-type", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/repair-damage-type", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/repair-damage-type", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request(
    "/cds-basic/repair-damage-type/enable",
    Method.PATCH,
    params
  );
};
