export interface PageParams {
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  /**
   * 箱属公司代码
   */
  shipCorpCode?: string;
  /**
   * 箱属公司id
   */
  shipCorpId?: string;
  current?: number;
  /**
   * 结束时间
   */
  endDate?: string;
  order?: string[];
  /**
   * 规则类型
   */
  ruleType?: string;
  size?: number;
  /**
   * 开始时间
   */
  startDate?: string;
}

export interface CreateParams {
  /**
   * 角铁箱标志：0：否；1：是
   */
  angleIronFlag: number;
  /**
   * 指定目的港标志 0：否；1：是
   */
  destPortFlag: number;
  /**
   * 清洁箱 0:否；1：是
   */
  cleaningFlag: number;
  /**
   * 箱龄起
   */
  ctnAgeStart?: number;
  /**
   * 箱龄止
   */
  ctnAgeEnd?: number;
  /**
   * 箱属公司
   */
  shipCorpName: string;
  /**
   * 干燥箱 0:否；1：是
   */
  dryingFlag: number;
  /**
   * 是否强制执行：0：否；1：：是
   */
  enforceFlag: number;
  /**
   * 食品箱标准：0：否；1：是
   */
  foodFlag: number;
  /**
   * GPS(RCD)：0：否；1：是
   */
  gpsFlag: number;
  /**
   * 高代普标志：0：否；1：是
   */
  htgFlag: number;
  id: string;
  /**
   * 法检箱 0:否；1：是
   */
  legalinsFlag: number;
  /**
   * 不放字头
   */
  lockedHeadCode?: string;
  /**
   * NOR 准备通知标志：0：否；1：是
   */
  norFlag: number;
  /**
   * 旧箱：0：否：1：是
   */
  oldCtnFlag: number;
  /**
   * 超期箱 ：0：否；1：是
   */
  overdueFlag: number;
  /**
   * 优先放A类箱 0:否；1：是
   */
  priorityAFlag: number;
  /**
   * 放箱字头
   */
  putHeadCode?: string;
  /**
   * 规则类型
   */
  ruleType: string;
  /**
   * 卖箱  0:否；1：是
   */
  sellFlag: number;
  /**
   * 二手箱:0:否；1：是
   */
  usedFlag: number;
  version: number;
  /**
   * 加重箱：0：否；1：是
   */
  weightingFlag: number;
}

export interface EditParams {
  /**
   * 角铁箱标志：0：否；1：是
   */
  angleIronFlag: number;
  /**
   * 指定目的港标志 0：否；1：是
   */
  destPortFlag: number;
  /**
   * 清洁箱 0:否；1：是
   */
  cleaningFlag: number;
  /**
   * 箱龄起
   */
  ctnAgeStart?: number;
  /**
   * 箱龄止
   */
  ctnAgeEnd?: number;
  /**
   * 箱属公司
   */
  shipCorpName: string;
  /**
   * 干燥箱 0:否；1：是
   */
  dryingFlag: number;
  /**
   * 是否强制执行：0：否；1：：是
   */
  enforceFlag: number;
  /**
   * 食品箱标准：0：否；1：是
   */
  foodFlag: number;
  /**
   * GPS(RCD)：0：否；1：是
   */
  gpsFlag: number;
  /**
   * 高代普标志：0：否；1：是
   */
  htgFlag: number;
  id: string;
  /**
   * 法检箱 0:否；1：是
   */
  legalinsFlag: number;
  /**
   * 不放字头
   */
  lockedHeadCode?: string;
  /**
   * NOR 准备通知标志：0：否；1：是
   */
  norFlag: number;
  /**
   * 旧箱：0：否：1：是
   */
  oldCtnFlag: number;
  /**
   * 超期箱 ：0：否；1：是
   */
  overdueFlag: number;
  /**
   * 优先放A类箱 0:否；1：是
   */
  priorityAFlag: number;
  /**
   * 放箱字头
   */
  putHeadCode?: string;
  /**
   * 规则类型
   */
  ruleType: string;
  /**
   * 卖箱  0:否；1：是
   */
  sellFlag: number;
  /**
   * 二手箱:0:否；1：是
   */
  usedFlag: number;
  version: number;
  /**
   * 加重箱：0：否；1：是
   */
  weightingFlag: number;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface ExtractCntRuleMaintenanceDTO {
  /**
   * 角铁箱标志：0：否；1：是
   */
  angleIronFlag?: number;
  /**
   * 指定目的港标志 0：否；1：是
   */
  destPortFlag?: number;
  /**
   * 清洁箱 0:否；1：是
   */
  cleaningFlag?: number;
  /**
   * 绿标箱 0:否；1：是
   */
  greenLabelFlag?: number;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 箱龄起
   */
  ctnAgeStart?: number;
  /**
   * 箱龄止
   */
  ctnAgeEnd?: number;
  /**
   * 箱属公司
   */
  shipCorpName?: string;
  delFlag?: number;
  /**
   * 干燥箱 0:否；1：是
   */
  dryingFlag?: number;
  /**
   * 是否强制执行：0：否；1：：是
   */
  enforceFlag?: number;
  /**
   * 食品箱标准：0：否；1：是
   */
  foodFlag?: number;
  /**
   * GPS(RCD)：0：否；1：是
   */
  gpsFlag?: number;
  /**
   * 高代普标志：0：否；1：是
   */
  htgFlag?: number;
  id?: string;
  /**
   * 法检箱 0:否；1：是
   */
  legalinsFlag?: number;
  /**
   * 不放字头
   */
  lockedHeadCode?: string | string[];
  /**
   * NOR 准备通知标志：0：否；1：是
   */
  norFlag?: number;
  /**
   * 旧箱：0：否：1：是
   */
  oldCtnFlag?: number;
  /**
   * 超期箱 ：0：否；1：是
   */
  overdueFlag?: number;
  /**
   * 优先放A类箱 0:否；1：是
   */
  priorityAFlag?: number;
  /**
   * 放箱字头
   */
  putHeadCode?: string | string[];
  remark?: string;
  remarkEn?: string;
  /**
   * 规则类型
   */
  ruleType?: string;
  /**
   * 卖箱  0:否；1：是
   */
  sellFlag?: number;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  /**
   * 二手箱:0:否；1：是
   */
  usedFlag?: number;
  version?: number;
  /**
   * 加重箱：0：否；1：是
   */
  weightingFlag?: number;
}

export interface PageExtractCntRuleMaintenanceDTO {
  records?: ExtractCntRuleMaintenanceDTO[];
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
}

export interface QueryParamsType {
  shipCorpName?: string;
  ruleType?: string;
  startDate?: string;
  endDate?: string;

  recordTime?: Date[];
}

export interface CntBlongParams {
  enable?: number;
}

export interface PageEditDTO {
  code?: string;
  data?: string;
  error?: string;
  message?: string;
  success?: boolean;
}
