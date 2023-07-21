import React, { useEffect, useState } from "react";
import DetailMap from "./components/DetailMap";
import SpotCheck from "./components/SpotCheck";
import styles from "./index.less";
import HomeArea from "./components/HomeArea";
import mitt from "@/mitt";
import EVENTKEY from "@/constant/mittEvent";
import { reqSpotCheckStatus } from "@/services/api/hmi";
import { Spin } from "antd";
import { getCar } from "@/utils/setCar";

enum SHOWTYPE {
  CHECK = "CHECK",
  MAP = "MAP",
  DETAIL = "DETAIL",
  LOADING = "LOADING",
}

const Home: React.FC = () => {
  const [type, setType] = useState<SHOWTYPE>(SHOWTYPE.LOADING);

  const onFinish = () => {
    setType(SHOWTYPE.MAP);
  };

  // 获取点检状态
  const fetchStatus = () => {
    reqSpotCheckStatus({
      assetName: getCar()?.assetName || "",
    })
      .then((res) => {
        if (res?.data?.status == "false") {
          setType(SHOWTYPE.CHECK);
        } else {
          setType(SHOWTYPE.MAP);
        }
      })
      .catch(() => {
        setType(SHOWTYPE.MAP);
      });
  };
  useEffect(() => {
    fetchStatus();
  }, []);

  const onDetail = () => {
    setType(SHOWTYPE.DETAIL);
  };
  const onBack = () => {
    setType(SHOWTYPE.MAP);
  };
  const handleRefresh = () => {
    console.log("首页刷新");
  };
  useEffect(() => {
    mitt.on(EVENTKEY.REFRESH, handleRefresh);
    return () => {
      mitt.off(EVENTKEY.REFRESH, handleRefresh);
    };
  }, []);
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
      {type == SHOWTYPE.LOADING && (
        <div className={styles.loading}>
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default Home;
