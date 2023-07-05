const CHECKEY = "check_key";

// 点检
export const getCheckTime = (): string | number => {
  const data = localStorage.getItem(CHECKEY);
  if (data) {
    return parseInt(data);
  }
  return "";
};

export const setCheck = () => {
  localStorage.setItem(CHECKEY, new Date().getTime() + "");
};

export const removeCheck = () => {
  localStorage.removeItem(CHECKEY);
};
