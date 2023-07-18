// 
const KEY = "CAR_CODE"

// 获取
export const getCar = (): string => {
  const car = localStorage.getItem(KEY);
  return car ?? "";
};
// 设置
export const setCar = (car: string): void => {
  localStorage.setItem(KEY, car);
};
// 移除
export const removeCar = () => {
  localStorage.removeItem(KEY);
};
