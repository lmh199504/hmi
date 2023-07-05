export interface PageParams {
  /**
   * 箱区代码
   */
  areaCode?: string;
  /**
   * 第几页
   */
  current?: number;
  /**
   * 每页几个
   */
  size?: number;
  /**
   * 堆场代码
   */
  yardCode?: string;
  /**
   * 堆场名称
   */
  yardName?: string;
}

export interface PageCtnBlockDTO {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  optimizeJoinOfCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: CtnBlockDTO[];
  searchCount?: boolean;
  size?: number;
  total?: number;
}

export interface ListCtnBlockDTO {
  /**
   * 响应码
   */
  code?: string;
  /**
   * 返回数据体
   */
  data?: CtnBlockDTO[];
  /**
   * 错误信息
   */
  error?: string;
  /**
   * 响应信息
   */
  message?: string;
  /**
   * 是否成功
   */
  success?: boolean;
}

/**
 * OrderItem
 */
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

/**
 * 中控关联—箱区管理 DTO
 * 接口数据返回值
 *
 * CtnBlockDTO
 */
export interface CtnBlockDTO {
  /**
   * 角度：-90，0，90，180
   */
  angle: number;
  /**
   * 箱区代码
   */
  areaCode: string;
  /**
   * 好坏箱区  （0：好箱区，1：坏箱区）
   */
  areaOfStatus: string;
  /**
   * 区域分类  （空箱区，重箱区）
   */
  areaType: string;
  /**
   * 贝位方向  LTR（左到you）,RTL(右到左)
   */
  bayDirection: string;
  /**
   * 起始贝位
   */
  beginBay: number;
  /**
   * 起始排号
   */
  beginRow: number;
  /**
   * 创建人姓名
   */
  createBy: string;
  /**
   * 创建人id
   */
  createId: number;
  /**
   * 创建时间
   */
  createTime: string;
  /**
   * 是否删除
   * 0: 否
   * 1: 是
   */
  delFlag: number;
  /**
   * 启用标准：0：未启用；1：启用
   */
  enable: number;
  /**
   * 结束贝位
   */
  endBay: number;
  /**
   * 结束排号
   */
  endRow: number;
  /**
   * 高度
   */
  height: number;
  /**
   * 主键
   */
  id: string;
  /**
   * 左侧边距像素
   */
  leftPixel: number;
  /**
   * 备注CN
   */
  remark?: string;
  /**
   * 备注EN
   */
  remarkEn?: string;
  /**
   * 行方向 TTB(上往下),BTT(下往上)
   */
  rowDirection: string;
  /**
   * 数据所属租户id
   */
  tenantId?: number;
  /**
   * 顶部边距
   */
  topPixel: number;
  /**
   * 最后修改人姓名
   */
  updateBy?: string;
  /**
   * 最后修改人id
   */
  updateId?: number;
  /**
   * 最后修改时间
   */
  updateTime?: string;
  /**
   * 版本号
   */
  version: number;
  /**
   * 宽度
   */
  width?: number;
  /**
   * 堆场代码
   */
  yardCode?: string;
  /**
   * 堆场名称
   */
  yardName?: string;
  /**
   * 箱区道向
   */
  channelDirection: string;
}
export interface DeleteParams {
  id: string;
  version: number;
}

export interface CreateParams {
  /**
   * 角度：-90，0，90，180
   */
  angle: number;
  /**
   * 箱区代码
   */
  areaCode: string;
  /**
   * 好坏箱区  （0：好箱区，1：坏箱区）
   */
  areaOfStatus: string;
  /**
   * 区域分类  （0：空箱区，1：重箱区）
   */
  areaType: string;
  /**
   * 贝位方向  LTR（左到you）,RTL(右到左)
   */
  bayDirection: string;
  /**
   * 起始贝位
   */
  beginBay: number;
  /**
   * 起始排号
   */
  beginRow: number;
  /**
   * 结束贝位
   */
  endBay: number;
  /**
   * 结束排号
   */
  endRow: number;
  /**
   * 高度
   */
  height: number;
  /**
   * 左侧边距像素
   */
  leftPixel: number;
  /**
   * 行方向 TTB(上往下),BTT(下往上)
   */
  rowDirection: string;
  /**
   * 顶部边距
   */
  topPixel: number;
  /**
   * 宽度
   */
  width: number;
  /**
   * 堆场代码
   */
  yardCode: string;
  /**
   * 堆场名称
   */
  yardName: string;
}

export interface EditParams extends CreateParams {
  id: string;
  version: number;
}

export interface StatusParams {
  id?: string;
  version?: number;
}

// AreaOfStatusSettingDTO
export interface AreaOfStatusParams {
  areaOfStatus: number;
  ids: (string | number)[];
}

export interface AreaTypeParams {
  areaType: number;
  ids: (string | number)[];
}
