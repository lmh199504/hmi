export interface PageParams {
  current?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  order?: any[];
  size?: number;
  code?: string;
  /**
   * 地区级别 1-省、自治区、直辖市 2-地级市、地区、自治州、盟 3-市辖区、县级市、县
   */
  level?: string;
  /**
   * 是否热门城市：0：否；1：是
   */
  hotFlag?: number;
  pCode?: string;
  pid?: string;
  countryName?: string;
  countryCode?: string;
}

export interface PageRegionDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: RegionDTO[];
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
 * RegionDTO，基础数据—行政区域表 DTO
 * 接口数据返回值
 */
export interface RegionDTO {
  /**
   * 区域编码
   */
  code: string;
  /**
   * 国家编码
   */
  countryCode?: string;
  /**
   * 国家名
   */
  countryName?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  /**
   * 是否启用:0:未启用；1:启用
   */
  enable?: number;
  /**
   * 是否热门城市：0：否；1：是
   */
  hotFlag?: number;
  id?: string;
  /**
   * 字母范围
   */
  letterRange?: string;
  /**
   * 地区级别 1-省、自治区、直辖市 2-地级市、地区、自治州、盟 3-市辖区、县级市、县
   */
  level?: number;
  /**
   * 助记码
   */
  mnemonicCode?: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 英文名
   */
  nameEn?: string;
  pcode?: string;
  pid?: string;
  remark?: string;
  remarkEn?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version?: number;
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
