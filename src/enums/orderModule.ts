/**
 * 订单模块类型
 */
export enum OrderModule {
  /**
   * 提箱订单
   */
  EXTRACT_BOX = 2,
  /**
   * 落箱订单
   */
  DEPOSIT_BOX = 1,
  /**
   * 落重订单
   */
  DEPOSIT_WEIGHT = 3,
}

/**
 * 订单明细状态
 */
export enum OrderCntDetailStatus {
  /**
   * 不可执行
   */
  UNEXECUTABLE = 0,
  /**
   * 可执行
   */
  EXECUTABLE = 1,
  /**
   * 终止
   */
  TERMINATE = 2,
  /**
   * 已执行
   */
  EXECUTED = 3,
}

/**
 * 订单审批操作
 */
export enum OrderApproveAction {
  /**
   * 通过
   */
  APPROVE = 1,
  /**
   * 拒绝
   */
  REJECT = 2,
}

export enum OrderStatus {
  /**
   * 有效
   */
  VALID = 1,
  /**
   * 无效
   */
  INVALID = 0,
  /**
   * 已完成
   */
  FINISHED = 2,
}

/**
 * 订单数据来源
 */
export enum DataSource {
  /**
   * 预订单
   */
  PRE_ORDER = 1,
  /**
   * 订单审批
   */
  ORDER_APPROVE = 2,
}

/**
 * 预订单数据来源
 */
export enum PreOrderDataSource {
  /**
   * excel导入
   */
  EXCEL = 1,
  /**
   * 易港通
   */
  THIRD_PARTY = 2,
}
