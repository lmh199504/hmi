export interface PageParams {
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 业务类型 (从产品维护列表中获取)
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
  /**
   * 委托单位id
   */
  entrustOrgId?: string;
  /**
   * 委托单位
   */
  entrustOrgName?: string;
  /**
   * 操作人id
   */
  opId?: string;
  /**
   * 操作人
   */
  opName?: string;
  order?: string[];
  /**
   * 订单号
   */
  orderNo?: string;
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
  size?: number;
  /**
   * 开始时间
   */
  startDate?: string;
  /**
   * 闸口查询条件 箱号or提单号or任务号or设备交接单号or船公司条码号
   */
  text?: string;
  /**
   * 船名id
   */
  vesselCode?: string;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * 航次
   */
  voyage?: string;
}

export interface PageOrderMaintenanceDTO {
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  records?: OrderMaintenanceDTO[];
}

export interface OrderMaintenanceDTO {
  /**
   * 杠
   */
  bar?: string;
  /**
   * 杠数
   */
  barNum?: number;
  /**
   * 提单号
   */
  blNo: string;
  /**
   * 业务类型 (从产品维护列表中获取)
   */
  businessType?: string;
  /**
   * 校验集港状态
   */
  checkPortStatus?: string;
  /**
   * 联系人
   */
  contact?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 箱状态：0：正常 1加急
   * 2听信集港;3船放
   */
  ctnStatus?: number;
  /**
   * 结关时间
   */
  customsClearanceTime?: Date;
  /**
   * 数据来源
   */
  dataSource?: string;
  delFlag?: number;
  /**
   * 开船时间
   */
  departureTime?: Date;
  /**
   * 目的地
   */
  dest?: string;
  /**
   * 目的港
   */
  destPortName?: string;
  /**
   * 明细号
   */
  detailNo?: string;
  /**
   * 挂衣箱标识  0否
   * 1是
   */
  dressHangerCtnFlag?: number;
  /**
   * 完结时间
   */
  endTime?: Date;
  /**
   * 委托单位id
   */
  entrustOrgId?: string;
  /**
   * 委托单位
   */
  entrustOrgName?: string;
  /**
   * 预计开船时间
   */
  etd?: Date;
  /**
   * 执行供应商/具体客户
   */
  executeSupplier?: string;
  /**
   * 订单有效期止
   */
  expirationEnd?: Date;
  /**
   * 订单有效期起
   */
  expirationStart?: Date;
  /**
   * 火焰测试标识  0否
   * 1是
   */
  flameTestFlag?: number;
  /**
   * 冷箱标识 0否
   * 1是
   */
  freezerFlag?: number;
  /**
   * 冷重柜 0否
   * 1是
   */
  freezerHeavyFlag?: number;
  /**
   * 闸口任务 0否
   * 1是
   */
  gateTaskFlag?: number;
  /**
   * 湿度
   */
  humidity?: string;
  id: string;
  /**
   * 录入时间
   */
  inputTime?: Date;
  /**
   * 层数
   */
  layerNum?: number;
  /**
   * 关联单号
   */
  linkOrderNo?: string;
  /**
   * 锁箱理由
   */
  lockCtnReason?: string;
  /**
   * 锁箱 0否
   * 1是
   */
  lockFlag?: number;
  /**
   * 模块类型 1进口
   * 2出口;3落重
   */
  moduleType?: number;
  /**
   * 操作人id
   */
  opId?: string;
  /**
   * 操作人
   */
  opName?: string;
  /**
   * 子表数据
   */
  // orderDetailDTOS?: OrderDetailDTO[]; // todo ??
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 订单状态 0已失效
   * 1已生效
   */
  orderStatus?: number;
  /**
   * 起始地
   */
  origin?: string;
  /**
   * 隔断标识 0否
   * 1是
   */
  partitionFlag?: number;
  /**
   * 集港地点
   */
  portLocation?: string;
  /**
   * 集港时间
   */
  portTime?: Date;
  /**
   * 预冷标识 冷箱 0否
   * 1是
   */
  precoolFlag?: number;
  /**
   * 优先级 1正常
   * 2船放;3一般急;4特急
   */
  priority?: number;
  /**
   * PTI类型
   */
  ptiType?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 绳数
   */
  ropeNum?: number;
  /**
   * 是否现场收费 0否
   * 1是
   */
  sceneChargeFlag?: number;
  /**
   * 船代 0否
   * 1是
   */
  shipAgencyFlag?: number;
  /**
   * 船代id
   */
  shipAgencyId?: string;
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
   * 船档号
   */
  shipNo?: string;
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
   * 扣数
   */
  threadNum?: number;
  /**
   * 中转港
   */
  transitPort?: string;
  transMap?: { [key: string]: string };
  /**
   * 运输 0否
   * 1是
   */
  transportFlag?: number;
  /**
   * 运输方式
   */
  transportMode?: string;
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  /**
   * 通风
   */
  ventilation?: string;
  version?: number;
  /**
   * 船名id
   */
  vesselCode?: string;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * 航次
   */
  voyage?: string;
  /**
   * 整拼标识 0否
   * 1是
   */
  wholeConsolFlag?: number;
  /**
   * 堆场
   */
  yardName?: string;
}

export interface QueryParams extends PageParams {
  recordTime?: string;
}

// 审批接口入参
export interface PageApproveParams {
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 审批状态 0未审批
   * 1审批通过;2审批驳回
   */
  checkStatus: number;
  current?: number;
  /**
   * 结束时间
   */
  endDate?: string;
  /**
   * 委托单位id
   */
  entrustOrgId?: string;
  /**
   * 委托单位
   */
  entrustOrgName?: string;
  /**
   * 模块类型 1进口
   * 2落重;3出口
   */
  moduleType?: number;
  order?: string[];
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
   * 开始时间
   */
  startDate?: string;
  tenantId?: number;
}

export interface ApproveQueryParams extends PageApproveParams {
  applyTime?: Date[];
}

export interface PageApproveDTO {
  current?: number;
  pages?: number;
  records?: ApproveDTO[];
  size?: number;
  total?: number;
}

export interface ApproveDTO {
  /**
   * 协议客户提交
   */
  agreedCustomer?: string;
  /**
   * 申请人id
   */
  applicantId?: number;
  /**
   * 申请人姓名
   */
  applicantName?: string;
  /**
   * 申请编号
   */
  applyNo?: string;
  /**
   * 申请来源
   */
  applySource?: string;
  /**
   * 申请时间
   */
  applyTime?: Date;
  /**
   * 审批拒绝原因
   */
  checkReason?: string;
  /**
   * 审批人id
   */
  checkUserId?: number;
  /**
   * 审批人姓名
   */
  checkUserName?: string;
  /**
   * 审批状态 0未审批
   * 1审批通过;2审批驳回
   */
  checkStatus: number;
  /**
   * 审批时间
   */
  checkTime?: Date;
  /**
   * 附件
   */
  attachFile?: string;
  /**
   * 提单号
   */
  blNo: string;
  /**
   * 业务类型 (从产品维护列表中获取)
   */
  businessType?: string;
  /**
   * 联系人
   */
  contact?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 接单客服
   */
  customerService?: string;
  delFlag?: number;
  /**
   * 目的港id
   */
  destinationPortId?: string;
  /**
   * 目的港
   */
  destinationPortName?: string;
  /**
   * 委托单位id
   */
  entrustOrgId?: string;
  /**
   * 委托单位
   */
  entrustOrgName?: string;
  /**
   * 回空地点
   */
  haulbackLocation?: string;
  /**
   * 湿度
   */
  humidity?: string;
  id: string;
  /**
   * 模块类型 1进口
   * 2出口;3落重
   */
  moduleType: number;
  orderApproveDetailDTOS?: ApproveDetailDTO[];
  /**
   * 系统原回空地点
   */
  origHaulbackLocation?: string;
  /**
   * 其他编号
   */
  otherNo?: string;
  /**
   * 拒绝落重 0否
   * 1是
   */
  refuseHeavyFlag?: number;
  /**
   * 拒绝放箱理由
   */
  refusePutCtnReason?: string;
  /**
   * 拒绝放箱标记 0否
   * 1是
   */
  refusePutFlag?: number;
  /**
   * 拒绝落重理由
   */
  refusePutFullReason?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 箱属公司id
   */
  shipCorpId?: string;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  /**
   * 联系电话
   */
  telephone?: string;
  /**
   * 温度
   */
  temperature?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  /**
   * 通风
   */
  ventilation?: string;
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
}

export interface ApproveDetailDTO {
  /**
   * 提单号
   */
  blNo?: string;
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
  delFlag?: number;
  id?: string;
  /**
   * 订单审批id
   */
  orderApproveId?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 铅封号
   */
  sealNo?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version?: number;
}

export interface PageEditDTO {
  code?: string;
  data?: string;
  error?: string;
  message?: string;
  success?: boolean;
}

export interface UpdateParams {
  /**
   * 杠
   */
  bar?: string;
  /**
   * 杠数
   */
  barNum?: number;
  /**
   * 提单号
   */
  blNo: string;
  /**
   * 业务类型 (从产品维护列表中获取)
   */
  businessType?: string;
  /**
   * 校验集港状态
   */
  checkPortStatus?: string;
  /**
   * 联系人
   */
  contact?: string;
  /**
   * 控箱公司代码
   */
  ctnControllerCode?: string;
  /**
   * 控箱公司id
   */
  ctnControllerId?: string;
  /**
   * 控箱公司名称
   */
  ctnControllerName?: string;
  /**
   * 箱状态：0：正常 1加急
   * 2听信集港;3船放
   */
  ctnStatus: number;
  /**
   * 结关时间
   */
  customsClearanceTime?: string;
  /**
   * 数据来源
   */
  dataSource?: string;
  /**
   * 开船时间
   */
  departureTime?: string;
  /**
   * 目的地
   */
  dest?: string;
  /**
   * 目的港
   */
  destPortName?: string;
  /**
   * 订单箱详细信息
   */
  detail: OrderDetailParams[];
  /**
   * 明细号
   */
  detailNo?: string;
  /**
   * 挂衣箱标识  0否
   * 1是
   */
  dressHangerCtnFlag: number;
  /**
   * 完结时间
   */
  endTime?: string;
  /**
   * 委托单位id
   */
  entrustOrgId?: string;
  /**
   * 委托单位
   */
  entrustOrgName?: string;
  /**
   * 预计开船时间
   */
  etd?: string;
  /**
   * 执行完成进度
   */
  progress?: string;
  /**
   * 执行供应商/具体客户
   */
  executeSupplier?: string;
  /**
   * 订单有效期止
   */
  expirationEnd?: string;
  /**
   * 订单有效期起
   */
  expirationStart?: string;
  /**
   * 火焰测试标识  0否
   * 1是
   */
  flameTestFlag: number;
  /**
   * 冷箱标识 0否
   * 1是
   */
  freezerFlag: number;
  /**
   * 冷重柜 0否
   * 1是
   */
  freezerHeavyFlag: number;
  /**
   * 冷重柜信息
   */
  freezers?: CtnFreezerHeavyParams[];
  /**
   * 闸口任务 0否
   * 1是
   */
  gateTaskFlag: number;
  /**
   * 湿度
   */
  humidity?: string;
  id: string;
  /**
   * 录入时间
   */
  inputTime?: string;
  /**
   * 层数
   */
  layerNum?: number;
  /**
   * 关联单号
   */
  linkOrderNo?: string;
  /**
   * 锁箱理由
   */
  lockCtnReason?: string;
  /**
   * 锁箱 0否
   * 1是
   */
  lockFlag: number;
  /**
   * 模块类型 1进口
   * 2出口;3落重
   */
  moduleType?: number;
  /**
   * 操作人id
   */
  opId?: string;
  /**
   * 操作人
   */
  opName?: string;
  /**
   * 操作时间
   */
  optTime?: string;
  /**
   * 订单号
   */
  orderNo: string;
  /**
   * 订单状态 0已失效
   * 1已生效
   */
  orderStatus: number;
  /**
   * 起始地
   */
  origin?: string;
  /**
   * 隔断标识 0否
   * 1是
   */
  partitionFlag: number;
  /**
   * 集港地点
   */
  portLocation?: string;
  /**
   * 集港时间
   */
  portTime?: string;
  /**
   * 预冷标识 冷箱 0否
   * 1是
   */
  precoolFlag: number;
  /**
   * 优先级 1正常
   * 2船放;3一般急;4特急
   */
  priority: number;
  /**
   * PTI类型
   */
  ptiType?: string;
  /**
   * 绳数
   */
  ropeNum?: number;
  /**
   * 是否现场收费 0否
   * 1是
   */
  sceneChargeFlag: number;
  /**
   * 船代 0否
   * 1是
   */
  shipAgencyFlag: number;
  /**
   * 船代id
   */
  shipAgencyId?: string;
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
   * 船档号
   */
  shipNo?: string;
  /**
   * 运输任务信息
   */
  tasks?: TransportTaskParams[];
  /**
   * 联系电话
   */
  telephone?: string;
  /**
   * 温度
   */
  temperature?: string;
  /**
   * 扣数
   */
  threadNum?: number;
  /**
   * 中转港
   */
  transitPort?: string;
  /**
   * 运输 0否
   * 1是
   */
  transportFlag: number;
  /**
   * 运输方式
   */
  transportMode?: string;
  /**
   * 通风
   */
  ventilation?: string;
  version: number;
  /**
   * 船名id
   */
  vesselCode?: string;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * 航次
   */
  voyage?: string;
  /**
   * 整拼标识 0否
   * 1是
   */
  wholeConsolFlag: number;
  /**
   * 堆场代码
   */
  yardCode?: string;
  /**
   * 堆场
   */
  yardName?: string;
}
export interface CloseParams {
  id: string;
  version: number;
}

export interface OrderDetailsDTO {
  /**
   * 杠
   */
  bar?: string;
  /**
   * 杠数
   */
  barNum?: number;
  /**
   * 提单号
   */
  blNo?: string;
  /**
   * 业务类型 (从产品维护列表中获取)
   */
  businessType?: string;
  /**
   * 校验集港状态
   */
  checkPortStatus?: string;
  /**
   * 联系人
   */
  contact?: string;
  createBy?: string;
  createId?: number;
  createTime?: string;
  /**
   * 控箱公司代码
   */
  ctnControllerCode?: string;
  /**
   * 控箱公司id
   */
  ctnControllerId?: string;
  /**
   * 控箱公司名称
   */
  ctnControllerName?: string;
  /**
   * 箱状态：0：正常 1加急
   * 2听信集港;3船放
   */
  ctnStatus?: number;
  /**
   * 结关时间
   */
  customsClearanceTime?: Date;
  /**
   * 数据来源
   */
  dataSource?: string;
  delFlag?: number;
  /**
   * 开船时间
   */
  departureTime?: Date;
  /**
   * 目的地
   */
  dest?: string;
  /**
   * 目的港
   */
  destPortName?: string;
  /**
   * 明细号
   */
  detailNo?: string;
  /**
   * 挂衣箱标识  0否
   * 1是
   */
  dressHangerCtnFlag?: number;
  /**
   * 完结时间
   */
  endTime?: string;
  /**
   * 委托单位id
   */
  entrustOrgId?: string;
  /**
   * 委托单位
   */
  entrustOrgName?: string;
  /**
   * 预计开船时间
   */
  etd?: Date;
  /**
   * 执行供应商/具体客户
   */
  executeSupplier?: string;
  /**
   * 订单有效期止
   */
  expirationEnd?: Date;
  /**
   * 订单有效期起
   */
  expirationStart?: Date;
  /**
   * 火焰测试标识  0否
   * 1是
   */
  flameTestFlag?: number;
  /**
   * 冷箱标识 0否
   * 1是
   */
  freezerFlag?: number;
  /**
   * 冷重柜 0否
   * 1是
   */
  freezerHeavyFlag?: number;
  /**
   * 闸口任务 0否
   * 1是
   */
  gateTaskFlag?: number;
  /**
   * 湿度
   */
  humidity?: string;
  id?: string;
  /**
   * 录入时间
   */
  inputTime?: Date;
  /**
   * 层数
   */
  layerNum?: number;
  /**
   * 关联单号
   */
  linkOrderNo?: string;
  /**
   * 锁箱理由
   */
  lockCtnReason?: string;
  /**
   * 锁箱 0否
   * 1是
   */
  lockFlag?: number;
  /**
   * 模块类型 1进口
   * 2出口;3落重
   */
  moduleType?: number;
  /**
   * 操作人id
   */
  opId?: string;
  /**
   * 操作人
   */
  opName?: string;
  /**
   * 子表数据
   */
  // orderDetailDTOS?: OrderDetailDTO[]; // todo 子表数据结构
  /**
   * 订单号
   */
  orderNo?: string;
  /**
   * 订单状态 0已失效
   * 1已生效 2已完成
   */
  orderStatus?: number;
  /**
   * 起始地
   */
  origin?: string;
  /**
   * 隔断标识 0否
   * 1是
   */
  partitionFlag?: number;
  /**
   * 集港地点
   */
  portLocation?: string;
  /**
   * 集港时间
   */
  portTime?: Date;
  /**
   * 预冷标识 冷箱 0否
   * 1是
   */
  precoolFlag?: number;
  /**
   * 优先级 1正常
   * 2船放;3一般急;4特急
   */
  priority?: number;
  /**
   * PTI类型
   */
  ptiType?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 绳数
   */
  ropeNum?: number;
  /**
   * 是否现场收费 0否
   * 1是
   */
  sceneChargeFlag?: number;
  /**
   * 船代 0否
   * 1是
   */
  shipAgencyFlag?: number;
  /**
   * 船代id
   */
  shipAgencyId?: string;
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
   * 船档号
   */
  shipNo?: string;
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
   * 扣数
   */
  threadNum?: number;
  /**
   * 中转港
   */
  transitPort?: string;
  transMap?: { [key: string]: string };
  /**
   * 运输 0否
   * 1是
   */
  transportFlag?: number;
  /**
   * 运输方式
   */
  transportMode?: string;
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  /**
   * 通风
   */
  ventilation?: string;
  version?: number;
  /**
   * 船名id
   */
  vesselCode?: string;
  /**
   * 船名
   */
  vesselName?: string;
  /**
   * 航次
   */
  voyage?: string;
  /**
   * 整拼标识 0否
   * 1是
   */
  wholeConsolFlag?: number;
  /**
   * 堆场代码
   */
  yardCode?: string;
  /**
   * 堆场
   */
  yardName?: string;

  orderTime?: string;
  detail?: any[];
  tasks?: any[];
  freezers?: any[];
}

/**
 * 订单管理—订单明细表 Query
 * 查询接口入参
 *
 * OrderDetailParams
 */
export interface OrderDetailParams {
  /**
   * 实际减免天数
   */
  actualFreeDay?: number;
  /**
   * 抵港日期
   */
  arrivalTime?: string;
  /**
   * 返箱地点
   */
  backCtnLocation?: string;
  /**
   * 提单号
   */
  blNo: string;
  /**
   * 提单备注
   */
  blNoRemark?: string;
  /**
   * 滞箱费
   */
  ctnDetentionCharge?: number;
  /**
   * 滞箱费收取比例
   */
  ctnDetentionChargeRate?: number;
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
   * 危品级别
   */
  dangerLevel?: string;
  /**
   * 危品
   */
  dangerSign?: string;
  /**
   * 申报运抵
   */
  declareArrival?: string;
  /**
   * 离港日期
   */
  departureTime?: string;
  /**
   * 明细号
   */
  detailNo?: string;
  /**
   * 司机名称
   */
  driverName?: string;
  /**
   * 司机联系方式
   */
  driverTel?: string;
  /**
   * 空重箱
   */
  eFCtn?: string;
  /**
   * 设备交接单号
   */
  eirNo: string;
  /**
   * 设备交接单接收时间
   */
  eirReceiveTime?: string;
  /**
   * 外贸箱标记 0否
   * 1是
   */
  foreignTradectnFlag: number;
  /**
   * 报表日期
   */
  formTime?: string;
  /**
   * 减免天数
   */
  freeDay?: number;
  /**
   * 免费日期
   */
  freeTime?: string;
  /**
   * 提箱有效期止
   */
  getExpirationEnd?: string;
  /**
   * 提箱有效期起
   */
  getExpirationStart?: string;
  /**
   * 加重标记 0：否；1：是
   */
  heavyFlag: number;
  id: string;
  /**
   * 确认信息齐 0否
   * 1是
   */
  infoCompleteFlag: number;
  /**
   * 确认信息齐时间
   */
  infoCompleteTime?: string;
  /**
   * 进场时间
   */
  inTime?: string;
  /**
   * 上次起租地点
   */
  lastStartLeaseLocation?: string;
  /**
   * 上次起租时间
   */
  lastStartLeaseTime?: string;
  /**
   * 滞纳金
   */
  lateCharge?: number;
  /**
   * 滞纳金收取比例
   */
  lateChargeRate?: number;
  /**
   * 提箱地点
   */
  liftCtnLocation?: string;
  /**
   * 关联设备交接单号
   */
  linkEirNo?: string;
  /**
   * 锁箱 0否
   * 1是
   */
  lockFlag: number;
  /**
   * 新箱标记 0否
   * 1是
   */
  newctnFlag: number;
  /**
   * 旧箱标记 0否
   * 1是
   */
  oldctnFlag: number;
  /**
   * 订单id
   */
  orderId: string;
  /**
   * 外部授权码
   */
  outerAuthCode?: string;
  /**
   * 外部箱id
   */
  outerCtnId?: string;
  /**
   * 出场时间
   */
  OutTime?: string;
  /**
   * 件数
   */
  packagingNum?: number;
  /**
   * 包装种类
   */
  packagingType?: string;
  /**
   * 集港任务 0否
   * 1是
   */
  portTaskFlag: number;
  /**
   * 打印标注 0否
   * 1是
   */
  printFlag: number;
  /**
   * 品名
   */
  productName?: string;
  /**
   * 落箱地点
   */
  putCtnLocation?: string;
  /**
   * 落箱有效期止
   */
  putExpirationEnd?: string;
  /**
   * 落箱有效期起
   */
  putExpirationStart?: string;
  /**
   * 落重时间
   */
  putHeavyTime?: string;
  /**
   * 上报人
   */
  reportPerson?: string;
  /**
   * 上报人id
   */
  reportPersonId?: number;
  /**
   * 上报日期
   */
  reportTime?: string;
  /**
   * 铅封号
   */
  sealNo?: string;
  /**
   * 卖箱标记 0否
   * 1是
   */
  sellCtnFlag: number;
  /**
   * 船舶标注
   */
  shippingMark?: string;
  /**
   * soc 0否
   * 1是
   */
  socFlag: number;
  /**
   * 执行任务时间
   */
  taskTime?: string;
  /**
   * 车牌号
   */
  truckNo?: string;
  version: number;
  /**
   * 体积
   */
  volume?: number;
  /**
   * 重量
   */
  weight?: number;
}

/**
 * 订单管理—订单冷重柜信息表 Query
 * 查询接口入参
 *
 * CtnFreezerHeavyParams
 */
export interface CtnFreezerHeavyParams {
  /**
   * 完成人
   */
  finishPerson?: string;
  /**
   * 完成人id
   */
  finishPersonId?: number;
  /**
   * 完成时间
   */
  finishTime?: string;
  /**
   * 冷箱服务
   */
  freezerService?: string;
  freezerServiceEn?: string;
  id: string;
  /**
   * 订单id
   */
  orderId: string;
  /**
   * 是否提供服务 0否
   * 1是
   */
  provideFlag: number;
  version: number;
}

/**
 * 订单管理—订单运输任务表 Query
 * 查询接口入参
 *
 * TransportTaskParams
 */
export interface TransportTaskParams {
  /**
   * 箱id
   */
  ctnId?: string;
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
   * 申报运抵
   */
  declareArrival?: string;
  /**
   * 明细号
   */
  detailNo?: string;
  /**
   * 下发状态 0未下发
   * 1已下发
   */
  distributeStatus: number;
  /**
   * 任务下发时间
   */
  distributeTime?: string;
  /**
   * 执行人id
   */
  executePersonId?: number;
  /**
   * 执行人
   */
  executePersonName?: string;
  /**
   * 执行状态 0未执行
   * 1已执行
   */
  executeStatus: number;
  /**
   * 执行时间
   */
  executeTime?: string;
  id: string;
  /**
   * 订单id
   */
  orderId: string;
  version: number;
}

export interface BatchAdjustParams {
  /**
   * 批量调整ids
   */
  ids: string[];
  /**
   * 调整项目
   */
  key: string;
  /**
   * 调整内容
   */
  value: string;
}
export interface StatusChangeParams {
  /**
   * 明细id List
   */
  detailIds: string[];
  /**
   * 订单id
   */
  id: string;
  /**
   * 任务执行状态0：不可执行，1：可执行，2终止 3已执行
   */
  taskStatus: number;
}

export interface ChangeApproveStatusParams {
  /**
   * 审批状态 0未审批
   * 1审批通过;2审批驳回
   */
  checkStatus: number;
  id: string;
  version: number;
}

export interface ColdWeightCabinetInfoDTO {
  /**
   * 完成人
   */
  finishPerson: string;
  /**
   * 完成人id
   */
  finishPersonId: string;
  /**
   * 完成时间
   */
  finishTime: string;
  /**
   * 冷箱服务
   */
  freezerService: string;
  freezerServiceEn: string;
  /**
   * 是否提供服务 0否 1是
   */
  provideFlag: number;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 创建人ID
   */
  createId?: string;

  /**
   * 是否已完成
   */
  finished?: boolean;
  /**
   * 排序
   */
  sort: number;
}

export interface BatchCompleteParams {
  /**
   * 订单id
   */
  orderId: string;
  /**
   * 冷重柜信息
   */
  freezerService: ColdWeightCabinetInfoDTO[];
}

export interface ModifyApproveDetailsParams {
  /**
   * 提单号
   */
  blNo: string;
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
  id: string;
  /**
   * 订单审批id
   */
  orderApproveId: string;
  /**
   * 铅封号
   */
  sealNo?: string;
  version: number;
}

export interface CheckblNoParams {
  /**
   * 提单号
   */
  billNo: string;
  /**
   * 订单号
   */
  orderId: string;
}
