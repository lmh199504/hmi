import React, { useState } from "react";
import DetailMap from "./components/DetailMap";
import SpotCheck from "./components/SpotCheck";
import styles from "./index.less";

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
