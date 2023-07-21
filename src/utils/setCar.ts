import { AssetMasterDTO } from "@/services/types/hmi";

const KEY = "CAR_CODE";

// 获取
export const getCar = (): AssetMasterDTO | undefined => {
  try {
    const car = localStorage.getItem(KEY);
    if (car) {
      return JSON.parse(car);
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
};
// 设置
export const setCar = (car: AssetMasterDTO): void => {
  localStorage.setItem(KEY, JSON.stringify(car));
};
// 移除
export const removeCar = () => {
  localStorage.removeItem(KEY);
};
