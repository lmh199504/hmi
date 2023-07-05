import React, { useState, useRef, useMemo, useEffect } from "react";
import { Input, Tabs, Row, Col, Tag, Spin, Empty } from "antd";
import type { TabsProps } from "antd";
import styles from "./index.less";
import { reqPage } from "@/services/api/source/region";
import { useDebounceEffect } from "ahooks";
import type { RegionDTO } from "@/services/types/source/region";

enum KEYS {
  HOT = "hot",
  PROVINCE = "province",
  CITY = "city",
  AREA = "area",
}

enum LEVELS {
  province = "1",
  city = "2",
  area = "3",
}

type SelectData = Pick<RegionDTO, "code" | "name" | "pcode" | "nameEn">;

interface SelectProps {
  province: SelectData;
  city: SelectData;
  area: SelectData;
}
const initData = {
  province: {
    code: "",
    name: "",
    pcode: "",
  },
  city: {
    code: "",
    name: "",
    pcode: "",
  },
  area: {
    code: "",
    name: "",
    pcode: "",
  },
};

interface CityPickerProps {
  value?: SelectProps;
  onChange?: (val: SelectProps) => void;
}

const CityPicker: React.FC<CityPickerProps> = (props) => {
  const [inputVal, setInputVal] = useState<string>("");

  const [selectData, setSelectData] = useState<SelectProps>(initData);
  const [active, setActive] = useState(KEYS.HOT);

  const refDiv = useRef<HTMLDivElement>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [focus, setFoucs] = useState(false);
  const items: TabsProps["items"] = [
    {
      key: KEYS.HOT,
      label: `热门城市`,
      children: (
        <TabPicker
          setActive={setActive}
          level={LEVELS.city}
          isHot={1}
          setSelectData={setSelectData}
          selectData={selectData}
          inputVal={inputVal}
          active={active}
        />
      ),
    },
    {
      key: KEYS.PROVINCE,
      label: `省份`,
      children: (
        <TabPicker
          setActive={setActive}
          level={LEVELS.province}
          setSelectData={setSelectData}
          selectData={selectData}
          inputVal={inputVal}
          active={active}
        />
      ),
    },
    {
      key: KEYS.CITY,
      label: `城市`,
      children: (
        <TabPicker
          setActive={setActive}
          pcode={selectData.province.code}
          level={LEVELS.city}
          setSelectData={setSelectData}
          selectData={selectData}
          inputVal={inputVal}
          active={active}
        />
      ),
    },
    {
      key: KEYS.AREA,
      label: `区域`,
      children: (
        <TabPicker
          setActive={setActive}
          pcode={selectData.city.code}
          level={LEVELS.area}
          setSelectData={setSelectData}
          selectData={selectData}
          inputVal={inputVal}
          active={active}
        />
      ),
    },
  ];
  const showText = useMemo(() => {
    return [
      selectData.province.name,
      selectData.city.name,
      selectData.area.name,
    ]
      .filter((item) => item)
      .join("/");
  }, [selectData]);
  const handleChange = (key: string) => {
    setActive(key as KEYS);
  };
  const onFocus = () => {
    setShowPicker(true);
    setFoucs(true);
  };
  const onBlur = () => {
    setFoucs(false);
    setTimeout(() => {
      setInputVal("");
    }, 100);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    if (!focus) {
      setSelectData({
        ...initData,
      });
    }
  };

  // 初始化值
  useEffect(() => {
    if (props.value) {
      setSelectData(props.value);
    }
  }, []);
  // antd Form.Item 回调 设置值
  useDebounceEffect(() => {
    props.onChange?.(selectData);
  }, [selectData]);

  return (
    <>
      <div ref={refDiv} className={styles.picker_wrapper}>
        <Input
          autoComplete="off"
          placeholder="请选择内容"
          onFocus={onFocus}
          value={focus ? inputVal : showText}
          allowClear={true}
          onChange={handleInput}
          onBlur={onBlur}
        />
        <div
          className={[styles.picker, !showPicker && styles.picker_hidden].join(
            " "
          )}
        >
          <Tabs activeKey={active} onChange={handleChange} items={items} />
        </div>
      </div>
      {showPicker && (
        <div className={styles.mask} onClick={() => setShowPicker(false)}></div>
      )}
    </>
  );
};

interface TabPickerProps {
  level: LEVELS;
  isHot?: number;
  setSelectData: (val: SelectProps) => void;
  selectData: SelectProps;
  pcode?: string;
  setActive: (val: KEYS) => void;
  inputVal: string;
  active: KEYS;
}

const TabPicker: React.FC<TabPickerProps> = (props) => {
  const [data, setData] = useState<RegionDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchHot = () => {
    if (props.level == LEVELS.city && !props.isHot && !props.pcode) {
      setData([]);
      return;
    }
    if (props.level == LEVELS.area && !props.pcode) {
      setData([]);
      return;
    }
    setLoading(true);
    reqPage({
      level: props.level,
      hotFlag: props.isHot,
      pCode: props.pcode,
    })
      .then((res) => {
        setLoading(false);
        setData(res?.data.records || []);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const handleClick = async (item: RegionDTO) => {
    // console.log(item)
    if (props.level == LEVELS.area) {
      props.setSelectData({
        ...props.selectData,
        area: {
          ...item,
        },
      });
    } else if (props.level == LEVELS.city) {
      if (props.isHot) {
        const parent = await reqPage({
          code: item.pcode,
        });
        const list = parent?.data.records;
        if (list?.length) {
          props.setSelectData({
            ...props.selectData,
            city: {
              ...item,
            },
            province: list[0],
            area: {
              code: "",
              name: "",
              pcode: "",
            },
          });
        }
      } else {
        props.setSelectData({
          ...props.selectData,
          city: {
            ...item,
          },
          area: {
            code: "",
            name: "",
            pcode: "",
          },
        });
      }

      props.setActive(KEYS.AREA);
    } else if (props.level == LEVELS.province) {
      props.setSelectData({
        province: {
          ...item,
        },
        city: {
          code: "",
          name: "",
          pcode: "",
        },
        area: {
          code: "",
          name: "",
          pcode: "",
        },
      });
      props.setActive(KEYS.CITY);
    }
  };
  useDebounceEffect(() => {
    fetchHot();
  }, [props.level, props.pcode]);
  const selectCode = useMemo(() => {
    if (props.level == LEVELS.province) {
      return props.selectData.province.code;
    } else if (props.level == LEVELS.city) {
      return props.selectData.city.code;
    } else {
      return props.selectData.area.code;
    }
  }, [props.selectData, props.level]);

  const showList = useMemo(() => {
    if (!props.inputVal) {
      return data;
    } else {
      if (props.active == KEYS.PROVINCE && LEVELS.province == props.level) {
        return data.filter((item) => item.name?.indexOf(props.inputVal) > -1);
      } else if (props.active == KEYS.CITY && LEVELS.city == props.level) {
        return data.filter((item) => item.name?.indexOf(props.inputVal) > -1);
      } else if (props.active == KEYS.HOT && props.level == LEVELS.city) {
        return data.filter((item) => item.name?.indexOf(props.inputVal) > -1);
      } else if (props.active == KEYS.AREA && props.level == LEVELS.area) {
        return data.filter((item) => item.name?.indexOf(props.inputVal) > -1);
      }
    }
    return data;
  }, [data, props.inputVal]);

  return (
    <div className={styles.tags_wrapper}>
      {loading ? (
        <div className={styles.loading}>
          <Spin></Spin>
        </div>
      ) : (
        <Row gutter={16}>
          {showList.map((item) => (
            <Col key={item.id} span={6}>
              <Tag
                color={selectCode === item.code ? "blue" : ""}
                onClick={() => handleClick(item)}
                className={styles.tag}
              >
                {item.name}
              </Tag>
            </Col>
          ))}
          {!data.length && !loading && (
            <div className={styles.empty}>
              <Empty />
            </div>
          )}
        </Row>
      )}
    </div>
  );
};

export default CityPicker;
