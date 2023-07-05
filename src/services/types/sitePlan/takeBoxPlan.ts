import { Moment } from "moment";
import { PutEPlanDetailDTO } from "@/services/types/sitePlan/dropBoxPlan";
export interface PageParams {
  /**
   * 业务类型
   */
  businessType?: string;
  /**
   * 箱字头
   */
  ctnHeader?: string;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱况
   */
  ctnStatus?: string;
  /**
   * 箱型
   */
  ctnType?: string;
  current?: number;
  /**
   * 指定目的港
   */
  destPortName?: string;
  order?: string[];
  /**
   * 造箱年限
   */
  period?: string;
  /**
   * 箱属公司公司id
   */
  shipCorpId?: string;
  size?: number;
  /**
   * 数据所属租户ID
   */
  tenantId?: number;
  /**
   * 加重
   */
  weightingFlag?: number;
  time?: [Moment, Moment];
  startTime?: string;
  endTime?: string;
}

export interface PageCarryPlanDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: CarryPlanDTO[];
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
 * CarryPlanDTO，中控管理—中控提箱策划 DTO
 * 接口数据返回值
 */
export interface CarryPlanDTO {
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 业务类型
   */
  businessType?: string;
  /**
   * 子表数据
   */
  carryPlanDetailDTOS?: PutEPlanDetailDTO[];
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 造箱结束日期
   */
  ctmkEndDate?: Date;
  /**
   * 造箱开始日期
   */
  ctmkStartDate?: Date;
  /**
   * 箱字头
   */
  ctnHeader?: string;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱况
   */
  ctnStatus?: string;
  /**
   * 箱型
   */
  ctnType?: string;
  delFlag?: number;
  /**
   * 指定目的港
   */
  destPortName?: string;
  /**
   * 箱号结束
   */
  endCtnNo?: string;
  id?: string;
  /**
   * 锁定原因
   */
  lockedReason?: string;
  /**
   * 策划编码
   */
  planCode?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 限制条件：0：无限制；1：预售；2：待退
   */
  restrictionsFlag?: number;
  /**
   * 放箱登记
   */
  sellLevel?: string;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 船公司放箱号
   */
  shipCorpCtn?: string;
  /**
   * 箱属公司公司id
   */
  shipCorpId?: string;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  /**
   * 箱号开始
   */
  startCtnNo?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version?: number;
  /**
   * 加重标识
   */
  weightingFlag?: number;
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
   * 子表数据
   */
  carryPlanDetailRequests?: PutEPlanDetailDTO[];
  /**
   * 造箱结束日期
   */
  ctmkEndDate?: Date;
  /**
   * 造箱开始日期
   */
  ctmkStartDate?: Date;
  /**
   * 箱字头
   */
  ctnHeader?: string;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱况
   */
  ctnStatus?: string;
  /**
   * 箱型
   */
  ctnType?: string;
  /**
   * 指定目的港
   */
  destPortName?: string;
  /**
   * 箱号结束
   */
  endCtnNo?: string;
  id?: string;
  /**
   * 锁定原因
   */
  lockedReason?: string;
  /**
   * 策划编码
   */
  planCode?: string;
  /**
   * 限制条件：0：无限制；1：预售；2：待退
   */
  restrictionsFlag?: number;
  /**
   * 放箱登记
   */
  sellLevel?: string;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 船公司放箱号
   */
  shipCorpCtn?: string;
  /**
   * 箱属公司公司id
   */
  shipCorpId?: string;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  /**
   * 箱号开始
   */
  startCtnNo?: string;
  version?: number;
  /**
   * 加重标识
   */
  weightingFlag?: number;
  ctmkDate?: [Moment, Moment];
}

/**
 * CarryPlanDetailRequest，中控管理—中控提箱策划明细表 Query
 * 查询接口入参
 */
export interface CarryPlanDetailRequest {
  /**
   * 箱区代码
   */
  areaCode?: string;
  /**
   * 可用箱数量
   */
  availableNum?: number;
  /**
   * 贝位
   */
  bay?: number;
  /**
   * 通道编号
   */
  channel?: string;
  /**
   * 最早进场时间
   */
  earliestDate?: Date;
  id: string;
  /**
   * 落箱任务ID
   */
  planId?: string;
  /**
   * 优先级
   */
  priority?: number;
  /**
   * 排号
   */
  rowNo?: number;
  version: number;
  /**
   * 堆场编号
   */
  yardCode?: string;
  /**
   * 堆场名称
   */
  yardName?: string;
}

export interface EditParams extends CreateParams {
  id?: string;
  version?: number;
  /**
   * 策划编码
   */
  planCode?: string;
}

export interface StatusParams {
  id: string;
  version: number;
}
