export interface AssettParams {
  /**
   * 当前页，从1开始记录
   */
  current?: number;
  exampleModel?: AssetMasterDTOModel;
  /**
   * 每页数量
   */
  pageSize?: number;
}
 
export interface AssetMasterDTOModel {
  assetName?: string;
  enable: number;
} 
/**
 * PageableResponseModelAssetMasterDTO
 */
export interface PageableResponseModelAssetMasterDTO {
  /**
   * 分页数据
   */
  collection?: AssetMasterDTO[];
  /**
   * 当前页
   */
  page?: number;
  /**
   * 每页数量
   */
  size?: number;
  /**
   * 补充信息
   */
  tag?: { [key: string]: any };
  /**
   * 数据总数
   */
  totalElements?: number;
  /**
   * 页总数
   */
  totalPages?: number;
}

/**
 * AssetMasterDTO
 */
export interface AssetMasterDTO {
  affiliatedCompany: string;
  affiliatedCompanyId: string;
  assetClass: string;
  assetClassId: string;
  assetModel: string;
  assetModelId: string;
  assetName: string;
  assetNumber: string;
  assetStatusCode: string;
  assetStatusId: string;
  assetStatusName: string;
  assetType: string;
  assetTypeId?: string;
  assetUser?: string;
  assetUserId?: string;
  companyNumber?: string;
  companyNumberId?: string;
  enable: number;
  entrustCompany?: string;
  entrustCompanyId?: string;
  entryDate?: string;
  fixedAssetNumber?: string;
  manufacturer?: string;
  manufacturerId?: string;
  originalPrice?: string;
  produceDate?: string;
  remark?: string;
  remarkEn?: string;
  sapAssetNumber?: string;
  sapNumber?: string;
  sapNumberId?: string;
  storageLocation?: string;
  usefulLife?: string;
  usingCompany?: string;
  usingCompanyId?: string;
  usingStorageCode?: string;
  usingStorageId?: string;
  usingStorageName?: string;
}

export interface BaseResponse<T = any> {
  data?: T;
  /**
   * 成功/失败附加信息
   */
  msg?: string;
  /**
   * 附加信息,可能附带其他成功失败结果
   */
  msgAppend?: string;
  /**
   * 标识/序号
   */
  seq?: number;
  /**
   * 是否成功
   */
  success?: boolean;
  /**
   * 附加任务是否成功
   */
  successAppend?: boolean;
  tag?: T;
}

/**
 * CheckInspectionModel，车辆当日是否点检返回参数
 */
export interface CheckInspectionModel {
  /**
   * 资产名称(车号)
   */
  assetName?: string;
  /**
   * 状态
   */
  status?: string;
}

/**
 * InspectionModel，获取点检数据项返回值
 */
export interface InspectionModel {
  /**
   * code
   */
  code?: string;
  /**
   * content
   */
  content?: string;
  /**
   * name
   */
  name?: string;
}

//
export interface SaveSpotCheckParams {
  /**
   * 空气滤芯
   */
  airFilterElement?: number;
  /**
   * 所有灯光
   */
  allLights?: number;
  /**
   * 资产型号
   */
  assetModel?: string;
  /**
   * 资产名称(车号)
   */
  assetName: string;
  /**
   * 资产类型(车类型)
   */
  assetType?: string;
  /**
   * 电瓶电解液
   */
  batteryElectrolyte?: number;
  /**
   * 刹车制动
   */
  brake?: number;
  /**
   * 仪表板
   */
  dashboard?: number;
  /**
   * 钉钉部门id
   */
  dddeptId: string;
  /**
   * 钉钉用户Id
   */
  dduserId: string;
  /**
   * 发动机油
   */
  engineOil?: number;
  /**
   * 变速箱油位
   */
  gearboxOilLevel?: number;
  /**
   * 液压油油位
   */
  hydraulicOilLevel?: number;
  /**
   * 仪表指示
   */
  instrumentIndication?: number;
  /**
   * 轮胎气压及螺丝
   */
  pressureScrew?: number;
  /**
   * 记录类型
   */
  recordType?: string;
  /**
   * 点检人ID
   */
  registrantId?: number;
  /**
   * 点检人名
   */
  registrantName?: string;
  /**
   * 点检时间
   */
  registrantTime?: Date;
  /**
   * 门架吊具
   */
  spreader?: number;
  /**
   * 车辆状态
   */
  vehicleStatus?: string;
  /**
   * 水箱水位
   */
  waterTankLevel?: number;
}

export interface RemindParams {
  assetName: string;
}
export interface SaveLoginParams {
  deviceCode: string;
}
// 维修保养提醒返回
export interface RemindResponse {
  maintenance: boolean;
  repair: boolean;
}
