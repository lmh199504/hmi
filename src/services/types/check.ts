import { CarStatus } from "@/enums/refuel";

export interface AseetName {
  assetName: string;
}

export interface VehicleRefuelParams {
  /**
   * 申请人
   */
  applicant?: string;
  /**
   * 申请人ID
   */
  applicantId?: string;
  /**
   * 申请时间
   */
  applicationTime?: string;
  /**
   * 审批状态
   */
  approvalStatus?: string;
  /**
   * 资产类别
   */
  assetClass?: string;
  /**
   * 资产管理人
   */
  assetManager?: string;
  /**
   * 资产型号
   */
  assetModel?: string;
  /**
   * 资产名称(车号)
   */
  assetName: string;
  /**
   * 所属公司
   */
  company?: string;
  /**
   * 钉钉部门id
   */
  dddeptId: string;
  /**
   * 钉钉用户Id
   */
  dduserId: string;
  /**
   * 公里数
   */
  kilometers?: number;
  /**
   * 加油升数
   */
  liters?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 备注英文
   */
  remarkEn?: string;
  /**
   * 工作时长
   */
  workHours?: number;
  /**
   * 工单编号
   */
  workOrderNumber?: string;
}

export interface VehicleRefuelStatusModel {
  /**
   * 车辆名称
   */
  assetName?: string;
  /**
   * 状态代码
   */
  statusCode?: string;
  /**
   * 状态名称
   */
  statusName?: string;
}

export interface VehicleRefuelStatusRe {
  assetName: string;
  statusCode: CarStatus;
  statusName: string;
}

/**
 * 车辆故障描述返回值
 *
 * VehicleTroubleModel
 */
export interface VehicleTroubleModel {
  /**
   * 资产名称
   */
  assetName: string;
  /**
   * 是否启用
   */
  enable?: number;
  /**
   * 故障描述
   */
  faultDescription: string;
}


/**
 * VehicleRepairRequest
 */
export interface VehicleRepairRequest {
  /**
   * 受理状态
   */
  acceptStatus?: number;
  /**
   * 事故维修
   */
  accidentMaintenance?: string;
  /**
   * 所属公司
   */
  affiliatedCompany?: string;
  /**
   * 所属公司ID
   */
  affiliatedCompanyId?: string;
  /**
   * 审批状态Code
   */
  approvalStatusCode?: string;
  /**
   * 审批状态ID
   */
  approvalStatusId?: string;
  /**
   * 审批状态Name
   */
  approvalStatusName?: string;
  /**
   * 资产类别
   */
  assetClass?: string;
  /**
   * 资产类别ID
   */
  assetClassId?: string;
  /**
   * 资产管理人
   */
  assetManager?: string;
  /**
   * 资产管理人ID
   */
  assetManagerId?: string;
  /**
   * 资产型号
   */
  assetModel?: string;
  /**
   * 资产型号ID
   */
  assetModelId?: string;
  /**
   * 资产名称（车号）
   */
  assetName: string;
  /**
   * 资产状态Code
   */
  assetStatusCode?: string;
  /**
   * 资产状态ID
   */
  assetStatusId?: string;
  /**
   * 资产状态Name
   */
  assetStatusName?: string;
  /**
   * 资产类型（车类型）
   */
  assetType: string;
  /**
   * 资产类型ID（车类型ID）
   */
  assetTypeId: string;
  /**
   * 成本中心
   */
  companyNum?: string;
  /**
   * 完成时间
   */
  completionTime?: string;
  /**
   * 钉钉部门id
   */
  dddeptId: string;
  /**
   * 钉钉用户Id
   */
  dduserId: string;
  /**
   * 停机时间
   */
  downTime?: string;
  /**
   * 预计开始时间
   */
  executionStartTime?: string;
  /**
   * 故障描述
   */
  faultDescription?: string;
  /**
   * 是否机损
   */
  isMachineDamage?: string;
  /**
   * 是否大修
   */
  isOverhaul?: string;
  /**
   * 是否加急
   */
  isUrgent?: string;
  /**
   * 制造商
   */
  maker?: string;
  /**
   * 计划完成时间
   */
  planCompletionTime?: string;
  /**
   * 审批实例id
   */
  processInstanceId?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 英文备注
   */
  remarkEn?: string;
  /**
   * 维修申请人
   */
  repairApplicant?: string;
  /**
   * 维修申请人ID
   */
  repairApplicantId?: string;
  /**
   * sap代码
   */
  sapNumber?: string;
  /**
   * 送修日期
   */
  sendRepairDate?: string;
  /**
   * 送修人
   */
  sendRepairPerson?: string;
  /**
   * 送修人ID
   */
  sendRepairPersonId?: string;
  /**
   * 维修明细
   */
  tRepairDetailEntities?: RepairDetailDTO[];
  /**
   * 使用公司
   */
  useCompany?: string;
  /**
   * 使用公司ID
   */
  useCompanyId?: string;
  /**
   * 使用部门/部室/科室
   */
  useDept?: string;
  /**
   * 使用部门ID
   */
  useDeptId?: string;
  /**
   * 车辆地点
   */
  vehicleLocation?: string;
  /**
   * 工单编号
   */
  workOrderNum?: string;
}

/**
* 明细材料DTO
*
* DetailMaterialDTO
*/
export interface DetailMaterialDTO {
  /**
   * 申请数量
   */
  applyNum?: number;
  /**
   * 明细ID
   */
  detailId?: string;
  /**
   * 申请明细号
   */
  detailKey?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 物料编码
   */
  materialCode?: string;
  /**
   * 材料总价
   */
  materialTotalPrice?: number;
  /**
   * 材料名称
   */
  name?: string;
  /**
   * 实际数量
   */
  realityNum?: number;
  /**
   * SAP出库状态
   */
  sapStatus?: string;
  /**
   * 仓库
   */
  storage?: string;
  /**
   * 维修明细DTO
   */
  tRepairDetailDTO?: RepairDetailDTO;
  /**
   * 单位
   */
  unit?: string;
  /**
   * 单价
   */
  unitPrice?: number;
}

/**
* 维修明细DTO
*
* RepairDetailDTO
*/
export interface RepairDetailDTO {
  /**
   * id
   */
  id?: string;
  /**
   * 是否夜班
   */
  isNightShift?: string;
  /**
   * 工时费
   */
  laborCost?: number;
  /**
   * 维修内容
   */
  maintenanceContent?: string;
  /**
   * 维修项目
   */
  maintenanceItem?: string;
  /**
   * 明细材料
   */
  tdetailMaterialEntities?: DetailMaterialDTO[];
  /**
   * 单价
   */
  unitPrice?: number;
  /**
   * 载具维修ID
   */
  vehicleRepairId?: string;
  /**
   * 维修工
   */
  worker?: string;
  /**
   * 工时
   */
  workingHours?: number;
}
