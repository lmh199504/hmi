export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
}

export interface PageCtnConditionlDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: CtnConditionlDTO[];
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

export interface CtnConditionlDTO {
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable: number;
  id: string;
  remark?: string;
  remarkEn?: string;

  transMap?: { [key: string]: string };

  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  code: string;
  name?: string;
  nameEn?: string;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  code: string;
  name?: string;
  nameEn?: string;
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

/**
 * 箱况列表筛选参数
 */
export interface queryParamsType {
  search: string;
  enable?: number;
}
