import https from "@/utils/https";
import { ContentType, Method } from "axios-mapper";
import type {
  PageParams,
  PageOrderMaintenanceDTO,
  PageApproveParams,
  PageApproveDTO,
  UpdateParams,
  CloseParams,
  PageEditDTO,
  OrderDetailsDTO,
  BatchAdjustParams,
  StatusChangeParams,
  ChangeApproveStatusParams,
  BatchCompleteParams,
  ModifyApproveDetailsParams,
  ApproveDTO,
  CheckblNoParams,
} from "@/services/types/order/orderMaintenance";
import axiosRequest from "@/utils/axios";

/**
 * 获取订单列表
 * @param params
 * @returns
 */
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageOrderMaintenanceDTO>>(
    "/cds-cts/order/page",
    Method.GET,
    params
  );
};

/**
 * 根据id获取单条数据
 * @param id
 * @returns
 */
export const reqOrderDetails = (id: string) => {
  return https.request<RequestResult<OrderDetailsDTO>>(
    `/cds-cts/order/${id}`,
    Method.GET
  );
};

/**
 * 关闭订单
 * @param params
 * @returns
 */
export const reqClose = (params: CloseParams) => {
  return https.request("/cds-cts/order/close", Method.DELETE, params);
};

/**
 * 保存/更新订单信息
 * @param params
 * @returns
 */
export const reqUpdate = (params: UpdateParams) => {
  return https.request<PageEditDTO>(
    "/cds-cts/order/save/update",
    Method.POST,
    params
  );
};

/**
 * 获取订单审批列表
 * @param params
 * @returns
 */
export const reqApprovePage = (params: PageApproveParams) => {
  return https.request<RequestResult<PageApproveDTO>>(
    "/cds-cts/order-approve/page",
    Method.GET,
    params
  );
};

/**
 * 修改审批状态
 * @param params
 * @returns
 */
export const reqChangeApproveStatus = (params: ChangeApproveStatusParams) => {
  return https.request("/cds-cts/order-approve/status", Method.PATCH, params);
};

/**
 * 修改订单审批内容
 * @param params
 * @returns
 */
export const reqModifyApproveContent = (params: ApproveDTO) => {
  return https.request("/cds-cts/order-approve", Method.PUT, params);
};

/**
 * 修改订单审批明细
 * @param params
 * @returns
 */
export const reqModifyApproveDetails = (params: ModifyApproveDetailsParams) => {
  return https.request("/cds-cts/order-approve-detail", Method.PUT, params);
};

/**
 * 批量删除订单明细
 * @param params
 * @returns
 */
export const reqBatchDelete = (ids: string[]) => {
  return axiosRequest({
    url: "/cds-cts/order-detail/batch",
    method: Method.DELETE,
    data: ids,
    headers: {
      ContentType: ContentType.json,
    },
  });
};

/**
 * 批量调整订单明细
 * @param params
 * @returns
 */
export const reqBatchAdjust = (params: BatchAdjustParams[]) => {
  return axiosRequest({
    url: "/cds-cts/order-detail/batch-adjustment",
    method: Method.POST,
    data: params,
    headers: {
      ContentType: ContentType.json,
    },
  });
};

/**
 * 订单明细状态修改  0：不可执行，1：可执行，2终止，3已执行
 * @param params
 * @returns
 */
export const reqStatusChange = (params: StatusChangeParams) => {
  return https.request(
    "/cds-cts/order-detail/task-status",
    Method.POST,
    params
  );
};

/**
 * 根据提单号查询是否已录入过订单数据
 * @param params
 * @returns
 */
export const reqCheckblNo = (params: CheckblNoParams) => {
  return https.request<RequestResult<boolean>>(
    "/cds-cts/order/bill/exist",
    Method.GET,
    params
  );
};

/**
 * 冷重柜子信息 - 批量完成
 * @param params
 * @returns
 */
export const reqBatchComplete = (params: BatchCompleteParams) => {
  return https.request(
    "/cds-cts/ctn-freezer-heavy/batch-complete",
    Method.POST,
    params
  );
};
