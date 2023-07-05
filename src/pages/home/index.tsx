import React, { useEffect, useState } from "react";
import DetailMap from "./components/DetailMap";
import SpotCheck from "./components/SpotCheck";
import styles from "./index.less";
import { getCheckTime } from "@/utils/check";

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
      setType(SHOWTYPE.CHECK)
    }
  }, []);

  return (
    <>
      <SpotCheck
        className={`${type == SHOWTYPE.CHECK ? "" : styles.hidden}`}
        onFinish={onFinish}
      />
      <DetailMap
        className={`${type == SHOWTYPE.DETAIL ? "" : styles.hidden}`}
      />
    </>
  );
};

export default Home;
