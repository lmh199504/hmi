import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageParams,
  PagePreOrderDTO,
  CreateParams,
  EditParams,
  DeleteParams,
  BatchAdjustParams,
  PageEditDTO,
  PreOrderDTO,
  CntBlongParams,
} from "@/services/types/order/preOrder";
import axiosRequest from "@/utils/axios";
import { ContentType } from "axios-mapper";
import ESelectUrl from "@/enums/selectUrl";

/**
 * 获取列表
 * @param params
 * @returns
 */
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PagePreOrderDTO>>(
    "/cds-cts/pre-order/page",
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
  return https.request<PageEditDTO>("/cds-cts/pre-order", Method.PUT, params);
};

/**
 * 删除
 * @param params
 * @returns
 */
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-cts/pre-order", Method.DELETE, params);
};

/**
 * 新增
 * @param params
 * @returns
 */
export const reqCreate = (params: CreateParams) => {
  return https.request<PageEditDTO>("/cds-cts/pre-order", Method.POST, params);
};

/**
 * 批量新增或修改
 * @param params
 * @returns
 */
export const reqBatchCreateOrEdit = (data: PreOrderDTO[]) => {
  return axiosRequest({
    url: "/cds-cts/pre-order/save-or-update",
    method: Method.POST,
    data,
    headers: {
      ContentType: ContentType.json,
    },
  });
};

/**
 * 批量调整
 * @param params
 * @returns
 */
export const reqBatchAdjust = (params: BatchAdjustParams[]) => {
  return axiosRequest({
    url: "/cds-cts/pre-order/batch-adjustment",
    method: Method.POST,
    data: params,
    headers: {
      ContentType: ContentType.json,
    },
  });
};

/**
 * 获取委托单位列表
 * @param params
 * @returns
 */
export const reqEntrustedOrgList = (params: CntBlongParams) => {
  return https.request<RequestResult<any>>(
    ESelectUrl.ENTRUSTED_ORG_LIST,
    Method.GET,
    params
  );
};

/**
 * 获取列表
 * @param params
 * @returns
 */
export const reqAllOrderByBlNo = (blNo: string) => {
  return https.request<RequestResult<PreOrderDTO[]>>(
    `cds-cts/pre-order/bl-no/${blNo}`,
    Method.GET
  );
};

/**
 * 文件导入
 * @param data
 * @returns
 */
export const reqFileImport = (data: FormData) => {
  return axiosRequest({
    url: "/cds-cts/pre-order/import",
    method: Method.POST,
    data,
    headers: {
      ContentType: ContentType.multipart,
    },
  });
};
