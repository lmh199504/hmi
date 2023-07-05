export interface PageParams {
  current?: number;
  size?: number;
  order?: string[];
  businessType?: string;
  entityEn?: string;
  entityPrimary?: string;
  operId?: number;
  status?: number;
}

export interface PageDataLogDTO {
  current?: number;
  size?: number;
  total?: number;
  pages?: number;
  records?: DataLogDTO[];
}

export interface DataLogDTO {
  businessType?: number;
  costTime?: number;
  entity?: string;
  entityEn?: string;
  entityPrimary?: string;
  errorMsg?: string;
  field?: string;
  fieldEn?: string;
  id?: string;
  operId?: number;
  operName?: string;
  operTime?: Date;
  sourceValue?: string;
  status?: number;
  targetValue?: string;
}

export interface QueryParams {
  /**
   * 业务类型 (0其它 1新增 2修改 3删除)
   */
  businessType?: string;
  /**
   * 实体英文名
   */
  entityEn?: string;
  /**
   * 实体
   */
  entity?: string;
  /**
   * 实体字段英文名
   */
  fieldEn?: string;
  /**
   * 实体主键
   */
  entityPrimary?: string;
  /**
   *  操作状态 (1正常 0异常)
   */
  status?: number;
  /**
   *  操作人员
   */
  operName?: string;
  /**
   *  起始操作时间
   */
  beginTime?: string;
  /**
   *  结束操作时间
   */
  endTime?: string;
  /**
   * 耗时长度起始
   */
  costTimeBegin?: number;
  /**
   * 耗时长度结束
   */
  costTimeEnd?: number;

  /**
   * 前端专用 [开始时间, 结束时间]
   */
  operTime?: Date[];
}
