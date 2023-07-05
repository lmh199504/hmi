const tokenKey = "token";

// 获取本地token
export const getToken = (): string => {
  const token = localStorage.getItem(tokenKey);
  return token ?? "";
};
// 设置本地token
export const setToken = (token: string): void => {
  localStorage.setItem(tokenKey, token);
};
// 移除本地token
export const removeToken = () => {
  localStorage.removeItem(tokenKey);
};
