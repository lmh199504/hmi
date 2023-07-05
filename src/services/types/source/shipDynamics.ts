import type { RcFile } from "rc-upload/lib/interface";

export interface PageParams {
  /**
   * 结关结束时间
   */
  closeEndTime?: string;
  /**
   * 结关开始时间
   */
  closeStartTime?: string;
  /**
   * 集港结束时间
   */
  collectPortEndTime?: string;
  /**
   * 集港开始时间
   */
  collectPortStartTime?: string;
  /**
   * 完船标志：0：否；1：完船
   */
  completedFlag?: number;
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  /**
   * 预计抵港时间 ETA结束时间
   */
  etaEndTime?: string;
  /**
   * 预计抵港时间 ETA开始时间
   */
  etaStartTime?: string;
  /**
   * 开船结束时间
   */
  etdEndTime?: string;
  /**
   * 开船开始时间
   */
  etdStartTime?: string;
  order?: string[];
  /**
   * 港口 （港口资料维护）
   */
  portName?: string;
  /**
   * 搜索字符串
   */
  search?: string;
  size?: number;
  /**
   * 搜索船舶
   */
  vesselSerach?: string;
  /**
   * 航次
   */
  voyages?: string;
  /**
   * 码头 --数据字典
   */
  wharf?: string;
  vesselName?: string;
}

export interface PageVeselsDynamicDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: VeselsDynamicDTO[];
  searchCount?: boolean;
  size?: number;
  total?: number;
}

/**
 * OrderItem
 */
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

/**
 * VeselsDynamicDTO，基础数据管理-船舶动态表 DTO
 * 接口数据返回值
 */
export interface VeselsDynamicDTO {
  customsVesselName: string;
  vesselName: string;
  /**
   * 结关时间
   */
  closeTime?: Date;
  /**
   * 集港时间
   */
  collectPortTime?: Date;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  /**
   * 预计抵港时间 ETA时间
   */
  etaTime?: Date;
  /**
   * 开船时间
   */
  etdTime: Date;
  id: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 英文名
   */
  nameEn?: string;
  /**
   * 港口 （港口资料维护）
   */
  portName?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 结算时间
   */
  settlementTime?: Date;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  /**
   * 航次
   */
  voyages?: string;
  /**
   * 码头 --数据字典
   */
  wharf?: string;
  completedFlag: number;
  completedTime: string;
  completedBy: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  code: string;
  name?: string;
  nameEn?: string;
  /**
   * 结关时间
   */
  closeTime?: Date;
  /**
   * 集港时间
   */
  collectPortTime?: Date;
  /**
   * 预计抵港时间 ETA时间
   */
  etaTime?: Date;
  /**
   * 开船时间
   */
  etdTime?: Date;
  /**
   * 港口 （港口资料维护）
   */
  portName?: string;
  /**
   * 结算时间
   */
  settlementTime?: Date;
  /**
   * 航次
   */
  voyages: string;
  /**
   * 码头 --数据字典
   */
  wharf?: string;
  origin?: number;
}

export interface EditParams {
  id: string;
  version: number;
  code: string;
  name?: string;
  nameEn?: string;
  /**
   * 结关时间
   */
  closeTime?: Date;
  /**
   * 集港时间
   */
  collectPortTime?: Date;
  /**
   * 预计抵港时间 ETA时间
   */
  etaTime?: Date;
  /**
   * 开船时间
   */
  etdTime?: Date;
  /**
   * 港口 （港口资料维护）
   */
  portName?: string;
  /**
   * 结算时间
   */
  settlementTime?: Date;
  /**
   * 航次
   */
  voyages: string;
  /**
   * 码头 --数据字典
   */
  wharf?: string;
}

export interface StatusParams {
  id: string;
  version: number;
}

export interface ImportParams {
  file: string | Blob | RcFile;
}

/**
 * VeselsDynamicExcelResponse
 */
export interface VeselsDynamicExcelResponse {
  /**
   * 失败数据集
   */
  errorList?: VeselsDynamicIExcelRequest[];
  /**
   * 成功数据集
   */
  successList?: VeselsDynamicIExcelRequest[];
}

/**
 * VeselsDynamicIExcelRequest，excel导入模板字段
 */
export interface VeselsDynamicIExcelRequest {
  /**
   * 结关时间
   */
  closeTime?: Date;
  /**
   * 集港时间
   */
  collectPortTime?: Date;
  /**
   * 海关船舶名称
   */
  customsVesselName?: string;
  /**
   * ETA
   */
  etaTime?: Date;
  /**
   * ETD
   */
  etdTime?: Date;
  id: string;
  /**
   * 港口
   */
  portName?: string;
  version: number;
  /**
   * 船舶名称
   */
  vesselName?: string;
  /**
   * 航次
   */
  voyages?: string;
  /**
   * 码头
   */
  wharf?: string;
}

export interface ExportParams {
  errorList: VeselsDynamicIExcelRequest[];
  successList: VeselsDynamicIExcelRequest[];
}

export interface CompleteParams {
  id: string;
}
