import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PagePriceAreaDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/source/pricingArea";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PagePriceAreaDTO>>(
    "/cds-basic/price-area/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/price-area", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/price-area", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/price-area", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request("/cds-basic/price-area/enable", Method.PATCH, params);
};