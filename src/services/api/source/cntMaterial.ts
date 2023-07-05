import https from "@/utils/https";
import { Method } from "axios-mapper";
import type {
  PageRepairMaterialDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
} from "@/services/types/source/cntMaterial";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageRepairMaterialDTO>>(
    "/cds-basic/repair-material/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/repair-material", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/repair-material", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/repair-material", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request(
    "/cds-basic/repair-material/enable",
    Method.PATCH,
    params
  );
};
