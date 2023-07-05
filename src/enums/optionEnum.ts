import { OrderCntDetailStatus } from "@/enums/orderModule";

export enum CustStatus {
  TEMPORARY = "1", // 临时客商
  FORMAL = "2", // 正式客商
}

export const StatusOptions = [
  {
    label: "启用",
    value: 1,
  },
  {
    label: "禁用",
    value: 0,
  },
];

// 箱管服务
export const ctnMangerList = [
  {
    label: "场内作业",
    value: "1",
  },
  {
    label: "船代",
    value: "2",
  },
  {
    label: "冷重柜",
    value: "3",
  },
];
// 箱修服务
export const ctnRepairList = [
  {
    label: "验箱",
    value: "4",
  },
  {
    label: "派工-材料&人工",
    value: "5",
  },
  {
    label: "估价",
    value: "6",
  },
  {
    label: "QC",
    value: "7",
  },
  {
    label: "预冷",
    value: "8",
  },
  {
    label: "PTI-插电&火测",
    value: "9",
  },
];

// 运输服务
export const transList = [
  {
    label: "运输",
    value: "10",
  },
];
// 机修服务
export const machineRepairList = [
  {
    label: "保养-材料&人工",
    value: "11",
  },
  {
    label: "维修-材料&人工",
    value: "12",
  },
];
// 全部服务
export const AllService = [
  ...ctnMangerList,
  ...ctnRepairList,
  ...transList,
  ...machineRepairList,
];

// todo 业务类型枚举
export enum OrderTypeMap {
  RETURN_APPROACH_TASK_ORDER = "order_1_HKJC", // 回空任务
}

// 日志 - 业务类型
export const BusinessTypeOptions = [
  { label: "新增", value: 1 },
  { label: "修改", value: 2 },
  { label: "删除", value: 3 },
  { label: "其它", value: 0 },
];

// 日志 - 操作状态
export const OperationOptions = [
  { label: "正常", value: 1 },
  { label: "异常", value: 0 },
];

// 审批状态
export const ApproveStatusOptions = [
  { label: "未审批", value: 0 },
  { label: "审批通过", value: 1 },
  { label: "审批驳回", value: 2 },
];

// 动态枚举值映射
export const DynamicOptionsMap = {
  YES_NO: [
    { label: "是", value: 1 },
    { label: "否", value: 0 },
  ],
  EXECUTE_STATUS: [
    { label: "已执行", value: 1 },
    { label: "未执行", value: 0 },
  ],
  EXTRACT_TIME: [
    { label: "0点到6点", value: 1 },
    { label: "6点到12点", value: 2 },
    { label: "12点到18点", value: 3 },
    { label: "18点到24点", value: 4 },
  ],
  TASK_EXECUTE_STATUS: [
    { label: "不可执行", value: OrderCntDetailStatus.UNEXECUTABLE },
    { label: "可执行", value: OrderCntDetailStatus.EXECUTABLE },
    { label: "终止", value: OrderCntDetailStatus.TERMINATE },
    { label: "已执行", value: OrderCntDetailStatus.EXECUTED },
  ],
  OLD_NEW: [
    { label: "新", value: 1 },
    { label: "旧", value: 0 },
  ],
};

// 进场箱预约-控制类型
export const ControlType = [
  { label: "单次", value: 0 },
  { label: "永久", value: 1 },
];
// 进场箱预约-有效性
export const Enable = [
  { label: "否", value: 0 },
  { label: "是", value: 1 },
];

// 进场箱预约-预售

export const Presale = [
  { label: "否", value: 0 },
  { label: "是", value: 1 },
];

// 箱区管理-区域分类
export const AreaType = [
  {
    label: "空箱区",
    value: "0",
  },
  {
    label: "重箱区",
    value: "1",
  },
];

export enum EnumAngle {
  "逆时针90°" = -90,
  "不旋转" = 0,
  "顺时针90°" = 90,
}

// 箱区管理-旋转角度
export const Angle = [
  {
    label: "逆时针90°",
    value: EnumAngle["逆时针90°"],
  },
  {
    label: "不旋转",
    value: EnumAngle.不旋转,
  },
  {
    label: "顺时针90°",
    value: EnumAngle["顺时针90°"],
  },
  // {
  //   label: "180",
  //   value: 180,
  // },
];

export enum EnumBayDirection {
  LTR = "LTR",
  RTL = "RTL",
}

// 箱区管理-贝位显示方向
export const BayDirection = [
  {
    label: "左到右",
    value: EnumBayDirection.LTR,
  },
  {
    label: "右到左",
    value: EnumBayDirection.RTL,
  },
];

export enum EnumRowDirection {
  TTB = "TTB",
  BTT = "BTT",
}

// 箱区管理-排位
export const RowDirection = [
  {
    label: "上往下",
    value: EnumRowDirection.TTB,
  },
  {
    label: "下往上",
    value: EnumRowDirection.BTT,
  },
];

// 箱区管理-好坏箱区
export const AreaOfStatus = [
  {
    label: "好箱区",
    value: "0",
  },
  {
    label: "坏箱区",
    value: "1",
  },
];

// 箱区管理-箱区道向
export const ChannelDirection = [
  {
    label: "东",
    value: "E",
  },
  {
    label: "南",
    value: "S",
  },
  {
    label: "西",
    value: "W",
  },
  {
    label: "北",
    value: "N",
  },
];

// 是否
export const YES_NO_OPTIONS = [
  { label: "否", value: 0 },
  { label: "是", value: 1 },
];

/**
 * 铅封-使用状态
 * 0:未使用
 * 1:作废
 * 2:转场
 * 3:领取
 * 4:已使用
 * 5:卖出
 */
export const USE_STATUS = [
  {
    label: "未使用",
    value: 0,
  },
  {
    label: "作废",
    value: 1,
  },
  {
    label: "转场",
    value: 2,
  },
  {
    label: "领取",
    value: 3,
  },
  {
    label: "已使用",
    value: 4,
  },
  {
    label: "卖出",
    value: 5,
  },
];

/**
 * 场地策划-进场顺序
 */
export const EnterIndex = [
  {
    label: "从小到大",
    value: 0,
  },
  {
    label: "从大到小",
    value: 1,
  },
];
/**
 * 场地策划-限制类型-落箱
 */
export const LimitType = [
  { label: "无限制", value: 1 },
  { label: "新箱", value: 2 },
];
/**
 * 场地策划-限制类型-提箱
 * // 0：无限制；1：预售；2：待退
 */
export const LimitTypeTake = [
  { label: "无限制", value: 0 },
  { label: "预售", value: 1 },
  { label: "待退", value: 2 },
];
export enum SITE_TYPE {
  /**
   * 提箱策划
   */
  TAKE_BOX = "TAKE_BOX",
  /**
   * 落箱策划
   */
  DROP_BOX = "DROP_BOX",
  /**
   * 落重策划
   */
  DROP_WEIGHT = "DROP_WEIGHT",
}

/**
 * 易港通预约消息-有效性
 */
export const EFFECTIVENESS = [
  {
    label: "有效",
    value: 1,
  },
  {
    label: "无效",
    value: 0,
  },
];
