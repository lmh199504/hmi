import { Moment } from "moment";
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
   * 验箱等级
   */
  checkLevel?: string;
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
  /**
   * 箱号结束
   */
  endCtnNo?: string;
  /**
   * 造箱结束日期
   */
  endTime?: string;
  /**
   * 是否食品箱：0：否；1：是
   */
  foodFlag?: number;
  /**
   * 租期标志：0：否；1：是
   */
  leaseTermFlag?: number;
  /**
   * 锁定原因
   */
  lockedReason?: string;
  /**
   * 是否新箱 0：否；1：是
   */
  newFlag?: number;
  order?: string[];
  /**
   * 备注
   */
  remark?: string;
  /**
   * 箱属公司
   */
  shipCorpId?: string;
  size?: number;
  /**
   * 箱号开始
   */
  startCtnNo?: string;
  /**
   * 造箱开始日期
   */
  startTime?: string;
  tenantId?: number;
  /**
   * 是否加重 0：否；1：是
   */
  weightFlag?: number;
  time?: [Moment, Moment];
}

export interface PagePutEPlanDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: PutEPlanDTO[];
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
 * PutEPlanDTO，中控管理—中控l落箱策划 DTO
 * 接口数据返回值
 */
export interface PutEPlanDTO {
  enable: number;
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 业务类型
   */
  businessType?: string;
  /**
   * 验箱等级
   */
  checkLevel?: string;
  /**
   * 船公司放箱号
   */
  cntNo?: string;
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
  /**
   * 是否食品箱：0：否；1：是
   */
  foodFlag?: number;
  id: string;
  /**
   * 租期
   */
  leaseTerm?: string;
  /**
   * 租期标志：0：否；1：是
   */
  leaseTermFlag?: number;
  /**
   * 锁定原因
   */
  lockedReason?: string;
  /**
   * 是否新箱 0：否；1：是
   */
  newFlag?: number;
  /**
   * 策划编码
   */
  planCode?: string;
  /**
   * 子表数据
   */
  putEPlanDetailDTOS?: PutEPlanDetailDTO[];
  remark?: string;
  remarkEn?: string;
  /**
   * 限制条件：0：无限制；
   */
  restrictionsFlag?: number;
  /**
   * 放箱登记
   */
  sellLevel?: string;
  /**
   * 箱属公司编码
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
   * 箱号开始
   */
  startCtnNo?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  /**
   * 是否加重 0：否；1：是
   */
  weightFlag?: number;
}

/**
 * PutEPlanDetailDTO，中控管理—中控落箱策划明细表 DTO
 * 接口数据返回值
 */
export interface PutEPlanDetailDTO {
  /**
   * 箱区代码
   */
  areaCode?: string;
  /**
   * 可用箱数量
   */
  availableNum?: number;
  /**
   * 贝
   */
  bay?: number;
  /**
   * 贝位
   */
  bayDetail?: number;
  /**
   * 通道编号
   */
  channel?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  /**
   * 最早进场时间
   */
  earliestDate?: Date;
  id: string | undefined;
  /**
   * 进场顺序 进场顺序 0-从小到大，1-从大到小
   */
  inSequence?: number;
  /**
   * 限制条件
   */
  limitCondition?: string;
  /**
   * 已占用箱数量
   */
  occupyNum?: number;
  /**
   * 落箱任务ID
   */
  planId?: string;
  /**
   * 优先级
   */
  priority?: number;
  remark?: string;
  remarkEn?: string;
  tenantId?: number;
  /**
   * 总数量
   */
  totalNum?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
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
   * 验箱等级
   */
  checkLevel?: string;
  /**
   * 船公司放箱号
   */
  cntNo?: string;
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
  /**
   * 是否食品箱：0：否；1：是
   */
  foodFlag?: number;
  /**
   * 租期
   */
  leaseTerm?: string;
  /**
   * 租期标志：0：否；1：是
   */
  leaseTermFlag?: number;
  /**
   * 锁定原因
   */
  lockedReason?: string;
  /**
   * 是否新箱 0：否；1：是
   */
  newFlag?: number;
  /**
   * 策划编码
   */
  planCode?: string;
  /**
   * 子表数据
   */
  putEPlanDetailRequestS?: PutEPlanDetailDTO[];
  /**
   * 限制条件：0：无限制；
   */
  restrictionsFlag?: number;
  /**
   * 放箱登记
   */
  sellLevel?: string;
  /**
   * 箱属公司编码
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
   * 箱号开始
   */
  startCtnNo?: string;
  /**
   * 是否加重 0：否；1：是
   */
  weightFlag?: number;
}

export interface EditParams {
  id: string;
  version: number;
  code: string;
  name?: string;
  nameEn?: string;
}

export interface StatusParams {
  id: string;
  version: number;
}

/**
 * 订单策划情况查询参数
 */
export interface SituationParams {
  /**
   * 箱型
   */
  cntType?: string;
  /**
   * 尺寸列表
   */
  ctnSizes?: number[];
  /**
   * 箱型列表
   */
  ctnTypes?: string[];
  /**
   * 箱属公司id列表
   */
  shipCordIds?: string[];
  /**
   * 箱属公司id
   */
  shipCorpId?: string;
}

/**
 * 订单策划情况数据
 *
 * PutEPlanSituationDTO
 */
export interface PutEPlanSituationDTO {
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱型
   */
  ctnType?: string;
  /**
   * 已做策划数量 落箱策划数量
   */
  inCtnCount?: number;
  /**
   * 预计进场箱数 进场订单数量
   */
  preInCtnCount?: number;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 箱属公司id
   */
  shipCorpId?: string;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  /**
   * 未做策划数量 预计进场箱数 - 已做策划数量
   */
  undoneCount?: number;
}
