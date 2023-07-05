import { reqSelectPage } from "@/services/api/source/dictData";
import type { DictDataDTO } from "@/services/types/source/dictData";
import { useState } from "react";
import { useDebounceEffect } from "ahooks";

const useDict = <T>(dictType: string, params?: T) => {
  const [dictList, setDictList] = useState<DictDataDTO[]>([]);

  useDebounceEffect(() => {
    reqSelectPage({
      dictType: dictType,
      ...params,
    }).then((res) => {
      setDictList(res?.data || []);
    });
  }, []);

  const getLabel = (value: string): string => {
    const item = dictList.find((item) => item.dictValue === value);
    return item?.dictLabel || value;
  };

  return {
    dictList,
    getLabel,
  };
};

export default useDict;
