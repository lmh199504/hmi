import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageEntryReservationDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
  BatchParams,
  EntryReservationDTO,
} from "@/services/types/order/enterReservation";
import request from "@/utils/axios";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageEntryReservationDTO>>(
    "/cds-cts/entry-reservation/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-cts/entry-reservation", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-cts/entry-reservation", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-cts/entry-reservation", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request(
    "/cds-cts/entry-reservation/enable",
    Method.PATCH,
    params
  );
};

// 批量操作 更新数据
export const reqBatchUpdate = (params: BatchParams) => {
  return https.request(
    "/cds-cts/entry-reservation/update-by-btn-type",
    Method.POST,
    params
  );
};
// 详情
export const reqDetail = (id: string) => {
  return https.request<RequestResult<EntryReservationDTO>>(
    `/cds-cts/entry-reservation/${id}`,
    Method.GET
  );
};
// 导出
export const reqExport = (data: Array<string | number>) => {
  return request<Blob>({
    url: "/cds-cts/entry-reservation/export",
    method: "POST",
    data,
    responseType: "blob",
  });
};
