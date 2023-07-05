import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageSealDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
  CancelParams,
  CancelVoidParams,
  Sellparams,
  SellVoidparams,
  SealDTO,
  RecipientParams,
  TransitionParams,
  UnTransitionParams,
  RevokeParams,
} from "@/services/types/order/leadSealing";
import request from "@/utils/axios";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageSealDTO>>(
    "/cds-cts/seal/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-cts/seal", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request<RequestResult<{ id: string; version: number }>>(
    "/cds-cts/seal",
    Method.POST,
    params
  );
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-cts/seal", Method.PUT, params);
};
// 作废
export const reqCancel = (params: CancelParams) => {
  return https.request("/cds-cts/seal/cancel-btn", Method.POST, params);
};
// 取消作废
export const reqCancelVoid = (params: CancelVoidParams) => {
  return https.request("/cds-cts/seal/un-cancel-btn", Method.POST, params);
};
//卖出
export const reqSell = (params: Sellparams) => {
  return https.request("/cds-cts/seal/sell-btn", Method.POST, params);
};
//取消卖出
export const reqSellVoid = (params: SellVoidparams) => {
  return https.request("/cds-cts/seal/un-sell-btn", Method.POST, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-cts/seal/enable", Method.PATCH, params);
};

// 批量保存
export const reqBatchSave = (data: SealDTO[]) => {
  return request({
    url: "/cds-cts/seal/save-btn",
    method: Method.POST,
    data,
  });
};

// 领取
export const reqRecipient = (params: RecipientParams) => {
  return https.request("/cds-cts/seal/recipient-btn", Method.POST, params);
};
// 转场
export const reqTransition = (params: TransitionParams) => {
  return https.request("/cds-cts/seal/transit-btn", Method.POST, params);
};
// 取消转场
export const reqUnTransition = (params: UnTransitionParams) => {
  return https.request("/cds-cts/seal/un-transit-btn", Method.POST, params);
};
// 撤销
export const reqRevoke = (params: RevokeParams) => {
  return https.request("/cds-cts/seal/revocation-btn", Method.POST, params);
};

// 获取详情
export const reqDetail = (id: string) => {
  return https.request<RequestResult<SealDTO>>(
    `/cds-cts/seal/${id}`,
    Method.GET
  );
};
