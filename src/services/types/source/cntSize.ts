export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
  /**
   * 箱型尺寸描述
   */
  sizeType?: string;
}

export interface PageCtnPropertiesDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: CtnPropertiesDTO[];
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
 * CtnPropertiesDTO，基础数据管理-集装箱属性表 DTO
 * 接口数据返回值
 */
export interface CtnPropertiesDTO {
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
  /**
   * 尺寸
   */
  size?: number;
  /**
   * 箱型尺寸描述
   */
  sizeType: string;
  /**
   * 皮重 （KG）
   */
  tare?: number;
  tenantId?: number;
  /**
   * 计量
   */
  teu?: number;
  transMap?: { [key: string]: string };
  /**
   * 箱型
   */
  type?: string;
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version: number;
  /**
   * 限体积(CBM)
   */
  volumeLimit?: number;
  /**
   * 限重（KG）
   */
  weightLimit?: number;
}

export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  /**
   * 尺寸
   */
  size: number;
  /**
   * 皮重 （KG）
   */
  tare?: number;
  /**
   * 计量
   */
  teu?: number;
  /**
   * 箱型
   */
  type: string;
  version: number;
  /**
   * 限体积(CBM)
   */
  volumeLimit?: number;
  /**
   * 限重（KG）
   */
  weightLimit?: number;
}

export interface EditParams {
  id: string;
  /**
   * 尺寸
   */
  size: number;
  /**
   * 皮重 （KG）
   */
  tare?: number;
  /**
   * 计量
   */
  teu?: number;
  /**
   * 箱型
   */
  type: string;
  version: number;
  /**
   * 限体积(CBM)
   */
  volumeLimit?: number;
  /**
   * 限重（KG）
   */
  weightLimit?: number;
}

export interface StatusParams {
  id: string;
  version: number;
}
