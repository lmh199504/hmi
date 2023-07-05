export interface PageParams {
  /**
   * 持箱人
   */
  boxHolder?: string;
  /**
   * 箱号
   */
  ctnNo?: string;
  current?: number;
  order?: string[];
  /**
   * 领用堆场号
   */
  recipientDepotCode?: string;
  /**
   * 领用结束时间
   */
  recipientEndTime?: string;
  /**
   * 领用人ID （小飞鱼的用户ID）
   */
  recipientId?: number;
  /**
   * 领用人姓名
   */
  recipientName?: string;
  /**
   * 领用开始时间
   */
  recipientStartTime?: string;
  /**
   * 登记结束时间
   */
  registEndTime?: string;
  /**
   * 登记开始时间
   */
  registStartTime?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 使用状态的撤销原因
   */
  revocationCause?: string;
  /**
   * 使用状态的撤销结束时间
   */
  revocationEndTime?: string;
  /**
   * 撤销人ID（小飞鱼ID）
   */
  revocationId?: number;
  /**
   * 撤销人姓名
   */
  revocationName?: string;
  /**
   * 使用状态的撤销开始时间
   */
  revocationStartTime?: string;
  /**
   * 铅封编号
   */
  sealCode?: string;
  /**
   * 铅封头
   */
  sealHeadCode?: string;
  /**
   * 铅封号，默认为空：船公司封/机组封
   */
  sealNo?: string;
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
  size?: number;
  /**
   * 封志类型：船公司封/机组封
   */
  type?: string;
  /**
   * 使用结束时间
   */
  usedEndTime?: string;
  /**
   * 使用状态 0：未使用1作废、2转场、3领取、4已使用、5卖出
   */
  usedFlag?: number;
  /**
   * 使用开始时间
   */
  usedStartTime?: string;
}

export interface PageSealDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: SealDTO[];
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
 * SealDTO，订单管理—铅封管理 DTO
 * 接口数据返回值
 */
export interface SealDTO {
  /**
   * 持箱人
   */
  boxHolder?: string;
  createBy?: string;
  createId?: number;
  createTime?: string;
  /**
   * 箱号
   */
  ctnNo?: string;
  delFlag?: number;
  id: string;
  /**
   * 领用堆场号
   */
  recipientDepotCode?: string;
  /**
   * 领用人ID （小飞鱼的用户ID）
   */
  recipientId?: number;
  /**
   * 领用人姓名
   */
  recipientName?: string;
  /**
   * 领用时间
   */
  recipientTime?: string;
  /**
   * 登记时间
   */
  registTime?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 使用状态的撤销原因
   */
  revocationCause?: string;
  /**
   * 撤销人ID（小飞鱼ID）
   */
  revocationId?: number;
  /**
   * 撤销人姓名
   */
  revocationName?: string;
  /**
   * 使用状态的撤销时间
   */
  revocationTime?: string;
  /**
   * 铅封编号
   */
  sealCode?: string;
  /**
   * 铅封头
   */
  sealHeadCode?: string;
  /**
   * 铅封号，默认为空：船公司封/机组封
   */
  sealNo?: string;
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
  tenantId?: number;
  transMap?: { [key: string]: string };
  /**
   * 封志类型：船公司封/机组封
   */
  type?: string;
  updateBy?: string;
  updateId?: number;
  updateTime?: string;
  /**
   * 使用状态 0：未使用1作废、2转场、3领取、4已使用、5卖出
   */
  usedFlag?: number;
  /**
   * 使用时间
   */
  usedTime?: string;
  version?: number;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  id?: string;
  /**
   * 持箱人
   */
  boxHolder?: string;
  /**
   * 箱号
   */
  ctnNo?: string;
  /**
   * 终止编号
   */
  endNumber?: string;
  /**
   * 编号前缀
   */
  numberPrefix?: string;
  /**
   * 编号后缀
   */
  numberSuffix?: string;
  /**
   * 领用堆场号
   */
  recipientDepotCode?: string;
  /**
   * 领用人ID （小飞鱼的用户ID）
   */
  recipientId?: number;
  /**
   * 领用人姓名
   */
  recipientName?: string;
  /**
   * 领用时间
   */
  recipientTime?: string;
  /**
   * 登记时间
   */
  registTime?: string;
  /**
   * 使用状态的撤销原因
   */
  revocationCause?: string;
  /**
   * 撤销人ID（小飞鱼ID）
   */
  revocationId?: number;
  /**
   * 撤销人姓名
   */
  revocationName?: string;
  /**
   * 使用状态的撤销时间
   */
  revocationTime?: string;
  /**
   * 铅封编号
   */
  sealCode?: string;
  /**
   * 铅封头
   */
  sealHeadCode?: string;
  /**
   * 铅封号，默认为空：船公司封/机组封
   */
  sealNo?: string;
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
   * 起始编号
   */
  startNumber?: string;
  /**
   * 封志类型：船公司封/机组封
   */
  type?: string;
  /**
   * 使用状态 0：未使用1作废、2转场、3领取、4已使用、5卖出
   */
  usedFlag?: number;
  /**
   * 使用时间
   */
  usedTime?: string;
}

export interface EditParams extends CreateParams {
  id: string;
  version: number;
}

export interface StatusParams {
  id: string;
  version: number;
}

export interface QueryParamsType {
  usedEndTime?: string;
  usedStartTime?: string;
  usedTime?: [Date, Date];
  recipientTime?: [Date, Date];
  registTime?: Date[];
  registStartTime?: string;
  registEndTime?: string;
  recipientStartTime?: string;
  recipientEndTime?: string;
}
//作废
export interface CancelParams {
  requests?: Array<{
    id: string;
    version: number;
  }>;
}
//取消作废
export interface CancelVoidParams {
  requests?: Array<{
    id: string;
    version: number;
  }>;
}
//卖出
export interface Sellparams {
  requests?: Array<{
    id: string;
    version: number;
  }>;
}
//取消卖出
export interface SellVoidparams {
  requests?: Array<{
    id: string;
    version: number;
  }>;
}
/**
 * 领取接口
 */
export interface RecipientParams {
  transitDepotCode: string;
  recipientName: string;
  /**
   * id集合
   */
  requests: Array<{
    id: string;
    version: number;
  }>;
}

/**
 * 转场
 */

export interface TransitionParams {
  requests: Array<{
    id: string;
    version: number;
  }>;
  transitDepotCode: string;
}
/**
 * 取消转场
 */

export interface UnTransitionParams {
  requests: Array<{
    id: string;
    version: number;
  }>;
}

/**
 * 撤销
 */

export interface RevokeParams {
  revocationCause: string;
  requests: Array<{
    id: string;
    version: number;
  }>;
}
