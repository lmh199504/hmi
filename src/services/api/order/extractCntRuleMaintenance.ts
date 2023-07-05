import https from "@/utils/https";
import { Method } from "axios-mapper";
import axiosRequest from "@/utils/axios";
import { ContentType } from "axios-mapper";
import type {
  PageParams,
  PageExtractCntRuleMaintenanceDTO,
  ExtractCntRuleMaintenanceDTO,
  CreateParams,
  EditParams,
  DeleteParams,
  CntBlongParams,
  PageEditDTO,
} from "@/services/types/order/extractCntRuleMaintenance";
import ESelectUrl from "@/enums/selectUrl";

/**
 * 获取列表
 * @param params
 * @returns
 */
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageExtractCntRuleMaintenanceDTO>>(
    "/cds-cts/packing-rule/page",
    Method.GET,
    params
  );
};

/**
 * 编辑
 * @param params
 * @returns
 */
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-cts/packing-rule", Method.PUT, params);
};

/**
 * 删除
 * @param params
 * @returns
 */
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-cts/packing-rule", Method.DELETE, params);
};

/**
 * 新增
 * @param params
 * @returns
 */
export const reqCreate = (params: CreateParams) => {
  return https.request<PageEditDTO>(
    "/cds-cts/packing-rule",
    Method.POST,
    params
  );
};

/**
 * 批量新增或修改
 * @param params
 * @returns
 */
export const reqBatchCreateOrEdit = (data: ExtractCntRuleMaintenanceDTO[]) => {
  return axiosRequest({
    url: "/cds-cts/packing-rule/save-or-update",
    method: Method.POST,
    data,
    headers: {
      ContentType: ContentType.json,
    },
  });
};

/**
 * 获取箱属公司列表
 * @param params
 * @returns
 */
export const reqCntBelongCompanyList = (params: CntBlongParams) => {
  return https.request<RequestResult<any>>(
    ESelectUrl.CNT_BELONG_COMPANY_LIST,
    Method.GET,
    params
  );
};
