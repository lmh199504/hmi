export interface PageParams {
  /**
   * 模块类型 1进口
   * 2落重; 3出口
   */
  moduleType: number;
  /**
   * 授权码
   */
  authCode?: string;
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 业务类型
   */
  businessType?: string;
  /**
   * 箱号
   */
  ctnNo?: string;
  current?: number;
  /**
   * 结束时间
   */
  endDate?: string;
  order?: string[];
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  size?: number;
  /**
   * 开始时间
   */
  startDate?: string;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * 航次
   */
  voyage?: string;
}

export interface EditParams {
  /**
   * 抵港日期
   */
  arrivalTime?: Date | string;
  /**
   * 授权码
   */
  authCode?: string;
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 订舱代码
   */
  bookingNo?: string;
  /**
   * 业务类型
   */
  businessType?: string;
  /**
   * 换单标识 0未换单
   * 1已换单
   */
  changeOrderFlag: number;
  /**
   * 联系人
   */
  contact?: string;
  /**
   * 吊机费
   */
  craneFee?: number;
  /**
   * 吊机附加费
   */
  craneSurcharge?: number;
  /**
   * 箱号
   */
  ctnNo?: string;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱型
   */
  ctnType?: string;
  /**
   * 危险标识
   */
  dangerSign?: string;
  /**
   * 数据来源
   */
  dataSource?: string;
  /**
   * 目的港
   */
  destinationPort?: string;
  /**
   * ERINO
   */
  eirNo?: string;
  /**
   * 委托单位
   */
  entrustOrgName?: string;
  /**
   * 货代
   */
  forwarder?: string;
  /**
   * 免费日期
   */
  freeTime?: Date | string;
  /**
   * 湿度
   */
  humidity?: string;
  id: string;
  /**
   * 模块类型 1进口
   * 2落重; 3出口
   */
  moduleType: number;
  /**
   * 净重
   */
  netWeight?: number;
  /**
   * 是否生成订单
   */
  orderFlag: number;
  /**
   * 提箱地点
   */
  pickupLoc?: string;
  /**
   * 港区作业号
   */
  portWorkCode?: string;
  /**
   * 品名
   */
  productName?: string;
  /**
   * 落箱地点
   */
  putCtnLocation?: string;
  /**
   * 铅封号
   */
  sealNo?: string;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  /**
   * 船UN
   */
  shipUn?: string;
  /**
   * soc标识 0否
   * 1是
   */
  socFlag: number;
  /**
   * 联系电话
   */
  telephone?: string;
  /**
   * 温度
   */
  temperature?: string;
  /**
   * 中转港
   */
  transferPort?: string;
  /**
   * 有效期
   */
  validTime?: Date;
  /**
   * 通风
   */
  ventilation?: string;
  version: number;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * VIP标识 0否
   * 1是
   */
  vipFlag: number;
  /**
   * 航次
   */
  voyage?: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  /**
   * 抵港日期
   */
  arrivalTime?: Date | string;
  /**
   * 授权码
   */
  authCode?: string;
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 订舱代码
   */
  bookingNo?: string;
  /**
   * 业务类型
   */
  businessType?: string;
  /**
   * 换单标识 0未换单
   * 1已换单
   */
  changeOrderFlag: number;
  /**
   * 联系人
   */
  contact?: string;
  /**
   * 吊机费
   */
  craneFee?: number;
  /**
   * 吊机附加费
   */
  craneSurcharge?: number;
  /**
   * 箱号
   */
  ctnNo?: string;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱型
   */
  ctnType?: string;
  /**
   * 危险标识
   */
  dangerSign?: string;
  /**
   * 数据来源
   */
  dataSource?: string;
  /**
   * 目的港
   */
  destinationPort?: string;
  /**
   * ERINO
   */
  eirNo?: string;
  /**
   * 委托单位
   */
  entrustOrgName?: string;
  /**
   * 货代
   */
  forwarder?: string;
  /**
   * 免费日期
   */
  freeTime?: Date | string;
  /**
   * 湿度
   */
  humidity?: string;
  id: string;
  /**
   * 模块类型 1进口
   * 2落重; 3出口
   */
  moduleType: number;
  /**
   * 净重
   */
  netWeight?: number;
  /**
   * 是否生成订单
   */
  orderFlag: number;
  /**
   * 提箱地点
   */
  pickupLoc?: string;
  /**
   * 港区作业号
   */
  portWorkCode?: string;
  /**
   * 品名
   */
  productName?: string;
  /**
   * 落箱地点
   */
  putCtnLocation?: string;
  /**
   * 铅封号
   */
  sealNo?: string;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  /**
   * 船UN
   */
  shipUn?: string;
  /**
   * soc标识 0否
   * 1是
   */
  socFlag: number;
  /**
   * 联系电话
   */
  telephone?: string;
  /**
   * 温度
   */
  temperature?: string;
  /**
   * 中转港
   */
  transferPort?: string;
  /**
   * 有效期
   */
  validTime?: Date;
  /**
   * 通风
   */
  ventilation?: string;
  version: number;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * VIP标识 0否
   * 1是
   */
  vipFlag: number;
  /**
   * 航次
   */
  voyage?: string;
}

export interface PagePreOrderDTO {
  records?: PreOrderDTO[];
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
}

export interface PreOrderDTO {
  /**
   * 抵港日期
   */
  arrivalTime?: Date | string;
  /**
   * 授权码
   */
  authCode?: string;
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 订舱代码
   */
  bookingNo?: string;
  /**
   * 业务类型
   */
  businessType?: string;
  /**
   * 换单标识 0未换单
   * 1已换单
   */
  changeOrderFlag?: number;
  /**
   * 联系人
   */
  contact?: string;
  /**
   * 吊机费
   */
  craneFee?: number;
  /**
   * 吊机附加费
   */
  craneSurcharge?: number;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 箱号
   */
  ctnNo?: string;
  /**
   * 尺寸
   */
  ctnSize?: number;
  /**
   * 箱型
   */
  ctnType?: string;
  /**
   * 危险标识
   */
  dangerSign?: string;
  /**
   * 数据来源
   */
  dataSource?: string;
  delFlag?: number;
  /**
   * 目的港
   */
  destinationPort?: string;
  /**
   * ERINO
   */
  eirNo?: string;
  /**
   * 是否生效 0失效
   * 1生效
   */
  enable?: number;
  /**
   * 委托单位
   */
  entrustOrgName?: string;
  /**
   * 货代
   */
  forwarder?: string;
  /**
   * 免费日期
   */
  freeTime?: Date | string;
  /**
   * 湿度
   */
  humidity?: string;
  id?: string;
  /**
   * 模块类型 1进口
   * 2落重; 3出口
   */
  moduleType?: number;
  /**
   * 净重
   */
  netWeight?: number;
  /**
   * 是否生成订单
   */
  orderFlag?: number;
  /**
   * 提箱地点
   */
  pickupLoc?: string;
  /**
   * 港区作业号
   */
  portWorkCode?: string;
  /**
   * 品名
   */
  productName?: string;
  /**
   * 落箱地点
   */
  putCtnLocation?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 铅封号
   */
  sealNo?: string;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  /**
   * 船UN
   */
  shipUn?: string;
  /**
   * soc标识 0否
   * 1是
   */
  socFlag?: number;
  /**
   * 联系电话
   */
  telephone?: string;
  /**
   * 温度
   */
  temperature?: string;
  tenantId?: number;
  /**
   * 中转港
   */
  transferPort?: string;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  /**
   * 有效期
   */
  validTime?: Date;
  /**
   * 通风
   */
  ventilation?: string;
  version?: number;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * VIP标识 0否
   * 1是
   */
  vipFlag?: number;
  /**
   * 航次
   */
  voyage?: string;
  newOrOldFlag?: number;
}

export interface QueryParamsType {
  blNo?: string;
  ctnNo?: string;
  vesselName?: string;
  voyage?: string;
  shipCorpName?: string;
  authCode?: string;
  businessType?: string;
  startDate?: string;
  endDate?: string;

  recordTime?: Date[];
}

export interface BatchAdjustParams {
  /**
   * 批量调整ids
   */
  ids: string[] | React.Key[];
  /**
   * 调整项目
   */
  key: string;
  /**
   * 调整内容
   */
  value: string;
}

export interface PageEditDTO {
  code?: string;
  data?: string;
  error?: string;
  message?: string;
  success?: boolean;
}

export interface CntBlongParams {
  enable?: number;
  current?: number;
  size?: number;
}

export interface FileImportParams {
  /**
   * 模块类型，1进口落箱，2:出口提箱，3落重
   */
  moduleType: number;
  /**
   * 文件
   */
  file: any;
  /**
   * 是否生成订单 0否 1是
   */
  orderFlag: number;
}
