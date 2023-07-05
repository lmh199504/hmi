/**
 *
 * @param list
 * @param val
 * @param labelKey
 * @param valKey
 * @returns
 */
export function valueMap<T>(
  list: T[],
  val: string | number,
  labelKey = "label",
  valKey = "value"
) {
  if (!Array.isArray(list)) return null;
  const item = list.find((el) => val == el[valKey]);
  if (item) {
    return item[labelKey];
  } else {
    return null;
  }
}
/**
 * 车牌号校验
 */
export const cardNoReg =
  /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-Z]{1}[A-Z0-9]{5,6}/;

/**
 * 判断url 是否为图片
 * @param url
 * @returns
 */
export const isImageUrl = (url: string) => {
  // 定义一个正则表达式，用来匹配常见的图片文件扩展名
  const imageExtensions =
    /\.(jpeg|jpg|gif|png|svg|bmp|webp)\??([^&=]+=[^&=]+&?)*$/i;

  // 使用正则表达式对URL进行匹配
  return imageExtensions.test(url);
};
