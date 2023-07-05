/**
 * 组件类型
 */
export enum ComponentType {
  /**
   *  文本
   */
  TEXT = "1",
  /**
   *  多行文本
   */
  TEXT_AREA = "2",
  /**
   *  数字框
   */
  NUMBER = "3",
  /**
   *  时间选择
   */
  TIME = "8",
  /**
   *  复选框
   */
  CHECKBOX = "5",
  /**
   *  单选框
   */
  RADIO = "6",
  /**
   *  下拉框
   */
  SELECT = "7",
  /**
   *  日期选择
   */
  DATE = "4",
  /**
   *  日期时间选择
   */
  DATE_TIME = "9",
  /**
   *  日期范围选择
   */
  DATE_RANGE = "10",
  /**
   *  复合框
   */
  RECOMBINATION = "11",
  /**
   *  时间范围选择
   */
  TIME_RANGE = "12",
  /**
   *  开关
   */
  SWITCH = "13",
  /**
   *  (特殊)标签输入框，如 放字头，不放字头
   */
  TAG_INPUT = "14",
}

/**
 * 填写状态枚举
 */
export enum FillType {
  /**
   * 必填
   */
  REQUIRED = 1,
  /**
   * 非必填
   */
  NOT_REQUIRED = 2,
  /**
   * 不可填
   */
  DISABLED = 3,
}

/**
 * 预设的占位提示语
 */
export enum PlaceholderMap {
  /**
   * 收取比例
   */
  CHARGE_RATIO = "收取比例%", // todo 国际化时，将value改为国际化配置值，例如 global.please.input
  /**
   * 年份
   */
  YEAR = "年",
  INPUT = "请输入",
  SELECT = "请选择",
}
