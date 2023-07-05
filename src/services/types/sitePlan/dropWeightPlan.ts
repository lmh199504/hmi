import { Moment } from "moment";
import { PutEPlanDetailDTO } from "@/services/types/sitePlan/dropBoxPlan";
export interface PageParams {
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 业务类型
   */
  businessType?: string;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱型
   */
  ctnType?: string;
  current?: number;
  /**
   * 目的港
   */
  destPortName?: string;
  order?: string[];
  /**
   * 备注
   */
  remark?: string;
  /**
   * 箱属公司ID
   */
  shipCorpId?: string;
  size?: number;
  tenantId?: number;
  /**
   * 船名id
   */
  vesselId?: string;
  /**
   * 航次
   */
  voyage?: string;
}

export interface PagePutFPlanDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: PutFPlanDTO[];
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
 * PutFPlanDTO，中控管理—中控l落重箱策划 DTO
 * 接口数据返回值
 */
export interface PutFPlanDTO {
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 业务类型
   */
  businessType?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱型
   */
  ctnType?: string;
  delFlag?: number;
  /**
   * 目的港
   */
  destPortName?: string;
  /**
   * 有效期结束日期
   */
  expirationEnd?: Date;
  /**
   * 有效期开始日期
   */
  expirationStart?: Date;
  id: string;
  /**
   * 策划编码
   */
  planCode: string;
  /**
   * 子表数据
   */
  putFPlanDetailDTOS?: PutEPlanDetailDTO[];
  remark?: string;
  remarkEn?: string;
  restrictionsFlag?: number;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 船公司ID
   */
  shipCorpId?: string;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  /**
   * 船名id
   */
  vesselId?: string;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * 航次
   */
  voyage?: string;
  enable: number;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 业务类型
   */
  businessType?: string;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱型
   */
  ctnType?: string;
  /**
   * 目的港
   */
  destPortName?: string;
  /**
   * 有效期结束日期
   */
  expirationEnd?: string;
  /**
   * 有效期开始日期
   */
  expirationStart?: string;
  /**
   * 子表数据
   */
  putFPlanDetailRequests?: PutEPlanDetailDTO[];
  restrictionsFlag?: number;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 船公司ID
   */
  shipCorpId?: string;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  /**
   * 船名id
   */
  vesselId?: string;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * 航次
   */
  voyage?: string;
  expiration?: [Moment, Moment];
}

export interface EditParams extends CreateParams {
  id: string;
  version: number;
  planCode: string;
}

export interface StatusParams {
  id: string;
  version: number;
}
