export enum EDictType {
  LOCATION_TYPE = "LOCATION_TYPE", // 地点类型
  PORT_TYPE = "PORT_TYPE", // 港口类型
  ROUTE_TYPE = "LANES", // 航线类型
  YARD_TYPE = "YARD_PROPERTIES", // 堆场性质
  PRODUCER_TYPE = "MANUFACTURER_CLASSIFICATION", // 制造商分类
  CNT_AREA_TYPE = "CTN_REGION", // 集装箱区域
  LOGISTICS = "LOGISTICS_ROLE", // 物流角色
  ZXFJTJSFS = "DEMURRAGE_LADDER_CALCULATION_METHOD", // 滞箱费阶梯计算方式
  ZXFFLPPFS = "EMURRAGE_RATE_MATCHING_METHOD", // 滞箱费费率匹配方式
  SHIFT_MISSON_ACCURACY = "SHIFT_MISSON_ACCURACY", // 精准度
  PRODUCT_TYPE = "PRODUCT", // 产品分类
  TRADE_TYPE = "TRADE_MODE", // 贸易方式
  REGIONAL_LEVEL = "REGIONAL_LEVEL", // 区域级别
  LETTER_RANGE = "LETTER_RANGE", // 字母范围
  SHIP_TYPE = "SHIP_TYPE", // 船型
  CTN_OWNERSHIP_PROPERTIES = "CTN_OWNERSHIP_PROPERTIES", // 箱属公司属性
  PTI_TYPE = "PTI_TYPE", // PTI类型
  LOCK_TYPE = "LOCK_TYPE", // 锁定类型
  RENT = "RENT", // 租期
  /**
   * 验箱等级
   */
  INSPECTION_LEVEL = "INSPECTION_LEVEL",
  /**
   * 冷箱机组品牌
   */
  COLD = "COLD",
  /**
   * 通道号
   */
  CHANNEL = "CHANNEL",
}

export const LOCATION_MT = "MT"; // 地点类型-码头
// 所属公司-堆场
export const COMPANY_TYPE_DC = "DC";
// 自有堆场
export const YARD_OWNER = "owner";
