export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
  startTime?: string;
  endTime?: string;
  settleOffice?: string;
  createId?: string;
  custStatus?: string;
  active?: number;
}

export interface PageCscustDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: CscustDTO[];
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
 * CscustDTO，基础数据管理—客商信息主表 DTO
 * 接口数据返回值
 */
export interface CscustDTO {
  custBankName: string;
  accounts: string;
  /**
   * 有效标志
   */
  active: string;
  /**
   * 详细地址
   */
  addrCn?: string;
  /**
   * 英文地址
   */
  addrEn?: string;
  /**
   * 工商注册号
   */
  aicRegisteredNo?: string;
  /**
   * 来源业务系统ID
   */
  bizCscustId?: string;
  /**
   * 业务系统（OTW（otw）/报关系统（bg）/船货代系统(FR)）
   */
  bizSystemType?: string;
  /**
   * 客户主数据代码 CDH(common data HUB)
   */
  cdhCode?: string;
  /**
   * 城市CODE
   */
  cityCode?: string;
  /**
   * 城市名
   */
  cityName?: string;
  /**
   * 组织机构代码（对应主数据组织机构证代码）
   */
  clientNo?: string;
  /**
   * 国家
   */
  countryCode?: string;
  /**
   * 国家名称（中文）
   */
  countryNameCn?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 客商账户信息表
   */
  cscustAccountList?: CscustAccountDTO[];
  /**
   * 客商发票信息表
   */
  cscustInvoiceList?: CscustInvoiceDTO[];
  /**
   * 是否客户 Y:是 N:不是
   */
  csFlag?: string;
  /**
   * 客商简称
   */
  custAlias?: string;
  /**
   * 客商编码（需校验唯一性)
   */
  custCode?: string;
  /**
   * 客商中文名称
   */
  custNameCn?: string;
  /**
   * 客商英文名称
   */
  custNameEn?: string;
  /**
   * 内部组织代码
   */
  custOfficeCode?: string;
  /**
   * 海关注册代码
   */
  customesRegisteredNo?: string;
  /**
   * 客户状态--（数据字段中，查询type="客商状态"） 1、临时客户 2、正式客户
   */
  custStatus?: string;
  /**
   * 客户类型(（内部组织I、外部组织O）
   */
  custType?: string;
  /**
   * 默认收款条件（暂不使用）
   */
  defaultCollectionTerm?: string;
  /**
   * 默认付款条件（暂不使用）
   */
  defaultPaymentTerm?: string;
  delFlag?: number;
  /**
   * 电子邮箱
   */
  email?: string;
  /**
   * 传真号
   */
  fax?: string;
  /**
   * 法人代表
   */
  fictitiousPerson?: string;
  id: string;
  /**
   * 行业类别
   */
  industryType?: string;
  /**
   * 失效人
   */
  invalidName?: string;
  /**
   * 失效时间
   */
  invalidTime?: string;
  /**
   * 开票限额
   */
  invoiceMaximum?: string;
  /**
   * 商检注册代码
   */
  iqbRegisteredNo?: string;
  /**
   * 一次性客商Y:是N:否
   */
  isOneTimeCustomers?: string;
  /**
   * 是否结算对象Y:是N:否
   */
  isSettlement?: string;
  /**
   * 手机号
   */
  mobileNo?: string;
  /**
   * 数据来源：客商/本地
   * 1客商/2本地
   */
  origin?: string;
  /**
   * 所有制信息（国有企业、民营企业、三资企业、非营业组织机构、自然人）
   */
  ownership?: string;
  /**
   * 注册资本
   */
  registeredCapitqal?: string;
  /**
   * 注册时间
   */
  registeredTime?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 销售渠道
   */
  salesChannelS?: string;
  /**
   * 规模（单个公司、员工型、一次性、全国、区域）
   */
  scale?: string;
  /**
   * 结算对象
   */
  settleCustCode?: string;
  /**
   * 结算对象业务系统ID
   */
  settleCustId?: string;
  /**
   * 结算对象名称
   */
  settleCustName?: string;
  /**
   * 省份/州编码
   */
  stateCode?: string;
  /**
   * 省份/州名称
   */
  stateName?: string;
  /**
   * 行业子类（取自数据字典）（暂不使用）
   */
  subLndustryType?: string;
  /**
   * 是否供应商 Y:是 N:不是
   */
  supplierFlag?: string;
  /**
   * 课税性质（一般纳税人、小规模纳税人）
   */
  taxNature?: string;
  /**
   * 注册时间
   */
  taxpayeridentificatioNo?: string;
  /**
   * 电话号码
   */
  tel?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  /**
   * 统一信用代码（对应主数据的企业注册码）
   */
  unifiedCreditNo?: string;
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  /**
   * 供应商主数据代码
   */
  vcdhCode?: string;
  version: number;
  /**
   * 邮政编码
   */
  zip?: string;
  cscustTypeList: CscustTypeList[];
  cscustExt: ExtInfo;
  taxpayerIdentificatioNo: string;
}

export interface CscustTypeList {
  custType: string;
}

/**
 * CscustAccountDTO，基础数据—客商账户信息表 DTO
 * 接口数据返回值
 */
export interface CscustAccountDTO {
  /**
   * 银行账号
   */
  accounts?: string;
  /**
   * 账号名称
   */
  bacntName?: string;
  /**
   * 银行行号
   */
  bankNumber?: string;
  /**
   * 业务系统客商账号ID
   */
  bizCscustAccountId?: string;
  /**
   * 业务系统CS_CUST ID
   */
  bizCscustId?: string;
  /**
   * 来源业务系统（OTW（otw）/报关(bg) /船货代系统(FR)）
   */
  bizSystemType?: string;
  /**
   * 托收协议号
   */
  collectiongAgreementNo?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 默认币别
   */
  currency?: string;
  /**
   * 开户银行
   */
  custBankName?: string;
  delFlag?: number;
  id?: string;
  /**
   * 是否默认帐户 Y:是 N:否
   */
  isDefault?: string;
  /**
   * 备案备注
   */
  recodeRemark?: string;
  /**
   * 备案状态Y :有 N: 无
   */
  recordStatus?: string;
  remark?: string;
  /**
   * 备注CN
   */
  remarkCn?: string;
  remarkEn?: string;
  /**
   * 结算公司
   */
  settleOffice?: string;
  /**
   * 结算公司名
   */
  settleOfficeName?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version?: number;
  cscustExt: ExtInfo;
}

/**
 * CscustInvoiceDTO，基础数据—客商发票信息表 DTO
 * 接口数据返回值
 */
export interface CscustInvoiceDTO {
  /**
   * 业务系统CS_CUST ID
   */
  bizCscustId?: string;
  /**
   * 业务系统客商账号ID
   */
  bizCscustInvoiceId?: string;
  /**
   * 来源业务系统（OTW（otw）/报关(bg) /船货代系统(FR)）
   */
  bizSystemType?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 默认缺省抬头
   */
  defaultInvoiceTitle?: string;
  delFlag?: number;
  id?: string;
  /**
   * 地址
   */
  invoiceAddress?: string;
  remark?: string;
  /**
   * 备注CN
   */
  remarkCn?: string;
  remarkEn?: string;
  /**
   * 结算公司
   */
  settleOffice?: string;
  /**
   * 结算公司名
   */
  settleOfficeName?: string;
  /**
   * 纳税人识别号
   */
  taxpayeridentificatioNo?: string;
  /**
   * 电话
   */
  tel?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version?: number;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  custNameCn: string;
  addrCn: string;
  tel: string;
  custBankName: string;
  accounts: string;
}

export interface EditParams {
  id: string;
  version: number;
  custNameCn: string;
  addrCn: string;
  tel: string;
  custBankName: string;
  accounts: string;
  cscustAccountId: string;
}

export interface StatusParams {
  id: string;
  version: number;
}

export interface ExtInfo {
  createBy: string;
  createId: string;
  createTime: string;
  csId: string;
  delFlag: number;
  id: string;
  leaseFlag: number;
  overdueDay: number;
  ptiDay: number;
  remark?: string;
  remarkEn?: string;
  retentionCalType?: string;
  retentionMateType?: string;
  sameEstimateFlag: number;
  shipperFlag: number;
  switchFlag: number;
  tenantId: string;
  updateBy: string;
  updateId: string;
  updateTime: string;
  version: number;
}

/**
 * CscustTemporaryDTO，基础数据管理—客商信息主表 Query
 * 查询接口入参
 */
export interface CscustTemporaryDTO {
  /**
   * 银行账号
   */
  accounts: string;
  /**
   * 详细地址
   */
  addrCn: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 客商账户信息表ID
   */
  cscustAccountId?: string;
  /**
   * 开户银行
   */
  custBankName: string;
  /**
   * 客商中文名称
   */
  custNameCn?: string;
  delFlag?: number;
  id?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 纳税人识别号
   */
  taxpayerIdentificatioNo: string;
  /**
   * 电话号码
   */
  tel: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version?: number;
}
