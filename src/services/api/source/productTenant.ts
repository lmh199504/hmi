import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageProductTenantDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
  ProductTenantDTO,
  SaveNameParams,
} from "@/services/types/source/productTenant";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageProductTenantDTO>>(
    "/cds-basic/product-tenant/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/product-tenant", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/product-tenant", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/product-tenant", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request(
    "/cds-basic/product-tenant/enable",
    Method.PATCH,
    params
  );
};

// 详情
export const reqDetail = (id: string) => {
  return https.request<RequestResult<ProductTenantDTO>>(
    `/cds-basic/product-tenant/${id}`,
    Method.GET
  );
};

export const reqSaveName = (params: SaveNameParams) => {
  return https.request(
    "/cds-basic/product-tenant/productNameSave",
    Method.POST,
    params
  );
};
