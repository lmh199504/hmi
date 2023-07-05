
const CHECKEY = "check_key"

// 点检
export const getCheckTime = (): string => {
  const data = localStorage.getItem(CHECKEY);
  if (data) {
    return data
  }
  return ''
}