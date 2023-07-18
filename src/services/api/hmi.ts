import https from "@/utils/https";
import { Method } from "axios-mapper";
import { BaseResponse, AssettParams, PageableResponseModelAssetMasterDTO, CheckInspectionModel, InspectionModel, SaveSpotCheckParams } from "@/services/types/hmi";

// 获取车牌号列表
export const reqAsset = (params: AssettParams) => {
  return https.request<BaseResponse<PageableResponseModelAssetMasterDTO>>("/cds-zk/him/him/queryAssetName", Method.POST, params)
}

// 获取点检的数据
export const reqSpotCheckData = () => {
  return https.request<BaseResponse<InspectionModel[]>>("/cds-zk/him/him/selectInspectionType", Method.GET)
}
// 获取当日是否检点过
export const reqSpotCheckStatus = () => {
  return https.request<BaseResponse<CheckInspectionModel>>("/cds-zk/him/him/checkInspectionStatus", Method.POST)
}
// 保存点检
export const reqSaveSpotCheck = (params: SaveSpotCheckParams) => {
  return https.request("/cds-zk/him/him/addInspectionRecord", Method.POST, params)
}