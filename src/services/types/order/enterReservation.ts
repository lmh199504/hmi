export interface PageParams {
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 箱字头
   */
  boxHeader?: string;
  /**
   * 创建人姓名
   */
  createBy?: string;
  /**
   * 创建人id
   */
  createId?: number;
  /**
   * 箱号头
   */
  ctnHead?: string;
  /**
   * 箱号
   */
  ctnNo?: string;
  /**
   * 箱数字
   */
  ctnNumber?: string;
  /**
   * 箱尺寸
   */
  ctnSize?: number;
  /**
   * 箱类型
   */
  ctnType?: string;
  current?: number;
  /**
   * 是否有效：0：否；1：是
   */
  enable?: number;
  /**
   * 结束箱号
   */
  endCtnNo?: string;
  order?: string[];
  registTime?: [Date, Date];
  /**
   * 登记结束时间
   */
  registEndTime?: string;
  /**
   * 登记开始时间
   */
  registStartTime?: string;
  /**
   * 预约编号
   */
  reserveNumber?: number;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 箱属公司名称
   */
  shipCorpName?: string;
  size?: number;
  /**
   * 起始箱号
   */
  startCtnNo?: string;
  tenantId?: number;
  /**
   * 使用状态：0：作废；1：使用
   */
  userFlag?: number;
  /**
   * 有效期结束日期
   */
  validityEndPeriod?: string;
  /**
   * 有效期开始日期
   */
  validityStartPeriod?: string;
  validityPeriod?: [Date, Date];
}

export interface PageEntryReservationDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: EntryReservationDTO[];
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
 * EntryReservationDTO，订单管理--进场预约箱表 DTO
 * 接口数据返回值
 */
export interface EntryReservationDTO {
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 勾选了提单号(扩展表记录提单号明细)0：否；1：是
   */
  blNoFlag?: number;
  /**
   * 箱字头
   */
  boxHeader?: string;
  /**
   * 勾选了箱字头 0：否；1：是
   */
  boxHeaderFlag?: number;
  /**
   * 控制标识：0：否；1：是
   */
  controlFlag?: number;
  /**
   * 控制类型：0：单次；1：锁定
   */
  controlType?: number;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 箱号
   */
  ctnNo?: string;
  ctnNos?: string;
  /**
   * 箱号结束范围
   */
  ctnNoEndScope?: string;
  /**
   * 勾选了箱号(扩展表记录箱号明细)0：否；1：是
   */
  ctnNoFlag?: number;
  /**
   * 勾选了箱号范围  0：否；1：是
   */
  ctnNoScopeFlag?: number;
  /**
   * 箱号起始范围
   */
  ctnNoStartScope?: string;
  /**
   * 箱尺寸
   */
  ctnSize?: number;
  /**
   * 箱类型
   */
  ctnType?: string;
  delFlag?: number;
  /**
   * 指定目的港
   */
  destPortFlag?: number;
  /**
   * 是否有效：0：否；1：是
   */
  enable?: number;
  /**
   * 结束箱号
   */
  endCtnNo?: string;
  /**
   * 有效结束日期
   */
  expirationEnd?: Date;
  /**
   * 有效开始日期
   */
  expirationStart?: Date;
  id: string;
  /**
   * 锁定标识：0：否；1：是
   */
  lockFlag?: number;
  /**
   * 退租标识：0：否；1：是
   */
  offHireFlag?: number;
  /**
   * 预售标识：0：否；1：是
   */
  presaleFlag?: number;
  /**
   * 锁箱原因数据字典CODE值
   */
  reasonCode?: string;
  /**
   * 区域编码：基础数据地点列表
   */
  regionCode?: string;
  /**
   * 登记时间
   */
  registTime?: Date;
  remark?: string;
  remarkEn?: string;
  /**
   * 卖箱等级
   */
  sellLevel?: string;
  /**
   * 船公司放箱号
   */
  shiCorpCtn?: string;
  /**
   * 船公司放箱号标识 ：0：否；1：是
   */
  shiCorpCtnFlag?: number;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 箱属公司id
   */
  shipCorpId?: string;
  /**
   * 箱属公司名称
   */
  shipCorpName?: string;
  /**
   * 起始箱号
   */
  startCtnNo?: string;
  /**
   * 起始编号
   */
  startNumber?: string;
  /**
   * 租期数据字典CODE值
   */
  tenancyCode?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  /**
   * 使用状态：0：作废；1：使用
   */
  userFlag?: number;
  version: number;
  destPortCode?: string;
  entryNo?: string;
  businessTypeFlag?: number;
  businessType?: string;
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
   * 勾选了提单号(扩展表记录提单号明细)0：否；1：是
   */
  blNoFlag?: number;
  /**
   * 箱字头
   */
  boxHeader?: string;
  /**
   * 勾选了箱字头 0：否；1：是
   */
  boxHeaderFlag?: number;
  /**
   * 控制标识：0：否；1：是
   */
  controlFlag?: number;
  /**
   * 控制类型：0：单次；1：锁定
   */
  controlType?: number;
  /**
   * 箱号结束范围
   */
  ctnNoEndScope?: string;
  /**
   * 勾选了箱号(扩展表记录箱号明细)0：否；1：是
   */
  ctnNoFlag?: number;
  /**
   * 箱号列表
   */
  ctnNos?: string[];
  /**
   * 勾选了箱号范围  0：否；1：是
   */
  ctnNoScopeFlag?: number;
  /**
   * 箱号起始范围
   */
  ctnNoStartScope?: string;
  /**
   * 箱尺寸
   */
  ctnSize?: number;
  /**
   * 箱类型
   */
  ctnType?: string;
  /**
   * 指定目的港
   */
  destPortFlag?: number;
  /**
   * 是否有效：0：否；1：是
   */
  enable?: number;
  /**
   * 结束箱号
   */
  endCtnNo?: string;
  /**
   * 有效结束日期
   */
  expirationEnd?: Date;
  /**
   * 有效开始日期
   */
  expirationStart?: Date;
  id?: string;
  /**
   * 锁定标识：0：否；1：是
   */
  lockFlag?: number;
  /**
   * 退租标识：0：否；1：是
   */
  offHireFlag?: number;
  /**
   * 预售标识：0：否；1：是
   */
  presaleFlag?: number;
  /**
   * 锁箱原因数据字典CODE值
   */
  reasonCode?: string;
  /**
   * 区域编码：基础数据地点列表
   */
  regionCode?: string;
  /**
   * 登记时间
   */
  registTime?: Date;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 卖箱等级
   */
  sellLevel?: string;
  /**
   * 船公司放箱号
   */
  shiCorpCtn?: string;
  /**
   * 船公司放箱号标识 ：0：否；1：是
   */
  shiCorpCtnFlag?: number;
  /**
   * 箱属公司代码
   */
  shipCorpCode: string;
  /**
   * 箱属公司id
   */
  shipCorpId: string;
  /**
   * 箱属公司名称
   */
  shipCorpName: string;
  /**
   * 起始箱号
   */
  startCtnNo?: string;
  /**
   * 起始编号
   */
  startNumber?: string;
  /**
   * 租期数据字典CODE值
   */
  tenancyCode?: string;
  /**
   * 使用状态：0：作废；1：使用
   */
  userFlag?: number;
  version?: number;
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

// 批量更新参数
export interface BatchParams {
  type: number;
  content: string;
  ids: Array<{ id: string; version: number }>;
}
