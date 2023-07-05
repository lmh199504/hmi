export interface PageFieldsParams {
  /**
   * 页面分类（同时获取多个分类以逗号分隔）
   */
  pageNames: string;
}

export interface PageFieldsDTO {
  createBy?: string;
  createId?: number;
  createTime?: Date;
  delFlag?: number;
  field?: FieldDTO[];
  id?: string;
  code?: string;
  remark?: string;
  remarkEn?: string;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version?: number;
  /**
   * 页面类型 1表单 2表格
   */
  type?: number;
  typeEx?: string;

  /**
   * 前端专用 (字段是否隐藏)
   */
  hidden?: boolean;
  /**
   * 前端专用 (隐藏的组合字段)
   */
  hiddenRecombinationFields?: FieldDTO[];
}

export interface TypeEx {
  selectable?: number;
  showIndex?: number;
  operable?: number;
  editType?: "row" | "modal";
  rowCount?: number;
  colon?: number;
  layout?: "horizontal" | "vertical" | "inline";
}

export interface FieldDTO {
  createBy?: string;
  createId?: number;
  createTime?: Date;
  /**
   * 字段值的正则校验
   */
  dataRegex?: string;
  /**
   * 字段类型: 1文本, 2多行文本, 3数字框, 4日期选择, 5复选框, 6单选框, 7下拉框, 8日期时间选择, 9日期范围选择 10复合框
   */
  dataType: string;
  /**
   * 字段类型扩展: 复选框/单选框所属组, 下拉框的数据类型
   */
  dataTypeEx: string | ExtendFieldDTO;
  delFlag?: number;
  /**
   * 包含字段id
   */
  fieldId?: string;
  id: string;
  /**
   * 字段名称
   */
  name?: string;
  /**
   * 字段名称EN
   */
  nameEn: string;
  /**
   * 页面id
   */
  pageId?: string;
  remark?: string;
  remarkEn?: string;
  /**
   * 顺序
   */
  sort: number;
  tenantId?: number;
  transMap?: { [key: string]: string };
  updateBy?: string;
  updateId?: number;
  updateTime?: Date;
  version?: number;
  dataValue: any;
  width?: number;
  /**
   * 字段分组
   */
  groupBy?: string;
  /**
   * 是否隐藏
   */
  hidden?: boolean | number;

  // 前端专用
  extraparams?: object;
}

/**
 * 扩展字段类型
 */
export interface ExtendFieldDTO {
  /**
   * 组合框数据
   */
  recombination?: number[];
  /**
   * 组合框数据 (前端通过遍历recombination查找后的数据字段)
   */
  recombinationFields?: FieldDTO[];
  /**
   * 组合框的分隔符
   */
  separator?: string;
  /**
   * 隐藏表单项的标题 1隐藏 0显示(默认)
   */
  hideLabel?: number;
  /**
   * 空格表单项标签 1是 0否(默认)
   */
  blankSpaceLabel?: number;
  /**
   * 占位提示符
   */
  placeholder?: string;
  /**
   * 控制当前组件占比 支持1-4，默认1
   */
  colSpan?: number;
  /**
   * 文本域默认展示行数 默认1
   */
  rows?: number;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 是否展示字数 1显示 0隐藏(默认)
   */
  showCount?: number;
  /**
   * 是否支持一键清除表单项 1允许 0不允许(默认)
   */
  clearable?: number;
  /**
   * 下拉框模式 multiple | tags
   */
  selectMode?: string;
  /**
   * 下拉框数据来源的字典名称
   */
  dictName?: string;
  /**
   * 下拉框数据枚举
   */
  options?: OptionType[];
  /**
   * 单选组合数组
   */
  radioList?: OptionType[];
  /**
   * 数据格式校验正则
   */
  reg?: string;
  /**
   * 正则校验失败后的提示语 -- 中文
   */
  regMsg?: string;
  /**
   * 正则校验失败后的提示语 -- 英文
   */
  regMsgEn?: string;
  /**
   * (输入限制)正则校验类型 1中文 2数字 3小写字母 4大写字母 5中横线
   */
  regType?: number[];
  /**
   * 字母锁定为大写 1是 0否(默认)
   */
  bigLetterLock?: number;
  showTextValue?: number;
  renderConfig?: RenderConfig;
  /**
   * 填写方式. 1: 必填 2: 非必填; 3: 不可填
   */
  fillType?: number;
  listOptionName?: string;
  /**
   * 是否存在联动逻辑 1是 0否
   */
  fieldLinkage?: number;
  /**
   * 是否水平展示复选框 1是 0否
   */
  horizontalCheckbox?: number;
  /**
   * 表格项标题
   */
  tableTitle?: string;
  /**
   * 附加字段
   */
  additionalFields?: AdditionalFields;
}

export interface AdditionalFields {
  [attr: string]: string;
}

export interface RenderConfig {
  valueType: "tag" | "time" | "ratio" | "day" | "boolean";
  colorMap?: ColorMap;
}

export interface ColorMap {
  [props: string | number]: string;
}

export interface OptionType {
  label: string;
  value: any;
}
