import React, { useEffect, useState } from "react";
import DetailMap from "./components/DetailMap";
import SpotCheck from "./components/SpotCheck";
import styles from "./index.less";
import { getCheckTime } from "@/utils/check";
import HomeArea from "./components/HomeArea";

enum SHOWTYPE {
  CHECK = "CHECK",
  MAP = "MAP",
  DETAIL = "DETAIL",
}

const Home: React.FC = () => {
  const [type, setType] = useState(SHOWTYPE.MAP);

  const onFinish = () => {
    setType(SHOWTYPE.MAP);
  };

  useEffect(() => {
    const time = getCheckTime();
    if (new Date(time).getDate() != new Date().getDate()) {
      setType(SHOWTYPE.CHECK);
    }
  }, []);

  const onDetail = () => {
    setType(SHOWTYPE.DETAIL);
  };
  const onBack = () => {
    setType(SHOWTYPE.MAP);
  };
  return (
    <>
      <SpotCheck
        className={`${type == SHOWTYPE.CHECK ? "" : styles.hidden}`}
        onFinish={onFinish}
      />
      <HomeArea
        className={`${type == SHOWTYPE.MAP ? "" : styles.hidden}`}
        onDetail={onDetail}
      />
      <DetailMap
        onBack={onBack}
        className={`${type == SHOWTYPE.DETAIL ? "" : styles.hidden}`}
      />
    </>
  );
};

export default Home;
