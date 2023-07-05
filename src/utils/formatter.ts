import type { FormInstance } from "antd/lib/form";
import moment, { Moment } from "moment";

/**
 * 注入数据索引
 * @param injectDataIndexParams
 * @returns
 */
export const injectDataIndex = ({
  pages,
  size,
  data,
  offset = 1,
  indexName = "index",
}: injectDataIndexParams): Array<any> => {
  const startIndex = (pages - 1) * size;
  return data && Array.isArray(data)
    ? data.map((item, idx) => ({
        ...item,
        [indexName]: startIndex + idx + offset,
      }))
    : data;
};

/**
 * 限制仅可输入中文，字母，数字
 * @param key 表单字段名称
 * @param form 表单实例
 * @param e 事件对象
 */
export const inputValueFormatter = (
  key: string,
  form: FormInstance,
  e: React.FormEvent<HTMLInputElement>
) => {
  const reg = /[^\u4e00-\u9fa5_a-zA-Z0-9]/g;
  form.setFieldValue(key, e.currentTarget.value.replaceAll(reg, ""));
};

/**
 * 限制仅可输入字母，数字
 * @param key 表单字段名称
 * @param form 表单实例
 * @param e 事件对象
 */
export const inputOnlyLetterAndNumber = (
  key: string,
  form: FormInstance,
  e: React.FormEvent<HTMLInputElement>
) => {
  const reg = /[^a-zA-Z0-9]/g;
  form.setFieldValue(key, e.currentTarget.value.replaceAll(reg, ""));
};

export const limitNumberFormatter = (
  key: string,
  form: FormInstance,
  e: React.FormEvent<HTMLInputElement>
) => {
  const reg = /[^\-0-9]/g;
  form.setFieldValue(key, e.currentTarget.value.replaceAll(reg, ""));
};

export const limitLetterFormatter = (
  key: string,
  form: FormInstance,
  e: React.FormEvent<HTMLInputElement>
) => {
  const reg = /[^a-zA-Z]/g;
  form.setFieldValue(key, e.currentTarget.value.replaceAll(reg, ""));
};

/**
 * 接口上传日期格式统一修改
 * @param time 需要修改的时间
 * @returns
 */
export const uploadDateParamsFormatter = (time: string | Date | undefined) => {
  if (!time) return time;

  return moment(time).format("YYYY-MM-DD HH:mm:ss");
};

/**
 * 时间范围格式化
 * @param time 时间
 * @param type 类型
 * @returns
 */
export const timeRangeFormatter = (
  time: string | Date | Moment,
  type: "start" | "end"
) => {
  if (!time) return time;

  const endTime = type === "start" ? "00:00:00" : "23:59:59";

  return `${moment(time).format("YYYY-MM-DD")} ${endTime}`;
};
