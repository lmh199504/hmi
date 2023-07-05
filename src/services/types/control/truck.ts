export interface PageParams {
  /**
   * 授权司机id
   */
  authDriverId?: string;
  /**
   * 授权司机名称
   */
  authDriverName?: string;
  /**
   * 授权堆场代码
   */
  authYardCode?: string;
  /**
   * 授权堆场名称
   */
  authYardName?: string;
  current?: number;
  order?: string[];
  size?: number;
  tenantId?: number;
  /**
   * 车辆代码
   */
  truckCode?: string;
}

export interface PageMcTruckDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: McTruckDTO[];
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
 * McTruckDTO，机械-集卡车 DTO
 * 接口数据返回值
 */
export interface McTruckDTO {
  /**
   * 资产类别
   */
  assetType?: string;
  /**
   * 授权司机id
   */
  authDriverId?: string;
  /**
   * 授权司机名称
   */
  authDriverName?: string;
  /**
   * 授权司机联系电话
   */
  authDriverTel?: string;
  /**
   * 授权堆场代码
   */
  authYardCode?: string;
  /**
   * 授权堆场名称
   */
  authYardName?: string;
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  id?: string;
  remark?: string;
  remarkEn?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  /**
   * 车辆代码
   */
  truckCode?: string;
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
  /**
   * 授权司机id
   */
  authDriverId?: string;
  /**
   * 授权司机名称
   */
  authDriverName?: string;
  /**
   * 授权堆场代码
   */
  authYardCode?: string;
  /**
   * 授权堆场名称
   */
  authYardName?: string;
  /**
   * 数据来源: 1-资产
   * TODO 未来从其他地方导入数据时使用
   */
  dataSource?: number;
  /**
   * 数据来源id
   * TODO 未来从其他地方导入数据时使用
   */
  dataSourceId?: string;
}

export interface EditParams extends CreateParams {
  id: string;
  version: number;
}

export interface StatusParams {
  id: string;
  version: number;
}
