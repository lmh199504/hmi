import https from "@/utils/https";
import { Method } from "axios-mapper";

import type {
  PageParams,
  PageCtnConditionlDTO,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/source/cntRepair";

/**
 * 获取列表
 * @param params
 * @returns
 */
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageCtnConditionlDTO>>(
    "/cds-basic/repair-info/page",
    Method.GET,
    params
  );
};

/**
 * 删除
 * @param params
 * @returns
 */
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/repair-info", Method.DELETE, params);
};

/**
 * 新增
 * @param params
 * @returns
 */
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/repair-info", Method.POST, params);
};

/**
 * 编辑
 * @param params
 * @returns
 */
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/repair-info", Method.PUT, params);
};

/**
 * 修改状态
 * @param params
 * @returns
 */
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-basic/repair-info/enable", Method.PATCH, params);
};
