import https from "@/utils/https";
import { Method, ContentType } from "axios-mapper";
import request from "@/utils/axios";
import type {
  PageVeselsDynamicDTO,
  PageParams,
  DeleteParams,
  CreateParams,
  EditParams,
  StatusParams,
  VeselsDynamicExcelResponse,
  ExportParams,
  CompleteParams,
  // ImportParams,
} from "@/services/types/source/shipDynamics";

// 获取列表
export const reqPage = (params: PageParams) => {
  return https.request<RequestResult<PageVeselsDynamicDTO>>(
    "/cds-basic/vesels-dynamic/page",
    Method.GET,
    params
  );
};

// 删除
export const reqDelete = (params: DeleteParams) => {
  return https.request("/cds-basic/vesels-dynamic", Method.DELETE, params);
};

// 新增
export const reqCreate = (params: CreateParams) => {
  return https.request("/cds-basic/vesels-dynamic", Method.POST, params);
};

// 编辑
export const reqEdit = (params: EditParams) => {
  return https.request("/cds-basic/vesels-dynamic", Method.PUT, params);
};

// 修改状态
export const reqStatus = (params: StatusParams) => {
  return https.request(
    "/cds-basic/vesels-dynamic/enable",
    Method.PATCH,
    params
  );
};

// 导入excel
export const reqImport = (data: FormData) => {
  return request<RequestResult<VeselsDynamicExcelResponse>>({
    url: "/cds-basic/vesels-dynamic/veselsDynamicExcelImport",
    method: Method.POST,
    data,
    headers: {
      ContentType: ContentType.multipart,
    },
  });
};

// 导出失败数据
// export const reqExport = (params: ExportParams) => {
//   return https.request(
//     "/cds-basic/vesels-dynamic/veselsDynamicExcelExport",
//     Method.POST,
//     params,
//     ContentType.json,
//     {
//       responseType: "blob"
//     }
//   );
// };

export const reqExport = (data: ExportParams) => {
  return request<Blob>({
    url: "/cds-basic/vesels-dynamic/veselsDynamicExcelExport",
    method: "POST",
    data,
    responseType: "blob",
  });
};

export const reqCompleted = (params: CompleteParams) => {
  return https.request(
    "/cds-basic/vesels-dynamic/completedOperate",
    Method.GET,
    params
  );
};
