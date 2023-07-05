import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageVirtualInventoryDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/control/virtualInventory";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageVirtualInventoryDTO>>(
    "/cds-zk/virtual-inventory/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-zk/virtual-inventory", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-zk/virtual-inventory", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-zk/virtual-inventory", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request(
    "/cds-zk/virtual-inventory/enable",
    Method.PATCH,
    params
  );
};
