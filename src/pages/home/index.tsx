import React, { useEffect, useState } from "react";
import DetailMap from "./components/DetailMap";
import SpotCheck from "./components/SpotCheck";
import styles from "./index.less";
import HomeArea from "./components/HomeArea";
import mitt from "@/mitt";
import EVENTKEY from "@/constant/mittEvent";
import { reqSpotCheckStatus, reqRemind } from "@/services/api/hmi";
import { Spin } from "antd";
import { getCar } from "@/utils/setCar";
import FixTip from "@/components/FixTip";
import { RemindResponse } from "@/services/types/hmi";

enum SHOWTYPE {
  CHECK = "CHECK",
  MAP = "MAP",
  DETAIL = "DETAIL",
  LOADING = "LOADING",
}

const Home: React.FC = () => {
  const [type, setType] = useState<SHOWTYPE>(SHOWTYPE.LOADING);
  const [tipData, setTipData] = useState<RemindResponse>({
    repair: false,
    maintenance: false,
  });
  const onFinish = () => {
    setType(SHOWTYPE.MAP);
  };
  // 获取维修保养提醒
  const fetchRemind = () => {
    reqRemind({
      assetName: getCar(),
    }).then((res) => {
      console.log(res);
      setTipData(res?.data || { repair: false, maintenance: false });
    });
  };
  // 获取点检状态
  const fetchStatus = () => {
    reqSpotCheckStatus({
      assetName: getCar(),
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
    fetchRemind();
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
      {(tipData.repair || tipData.maintenance) && <FixTip tipData={tipData} />}
    </>
  );
};

export default Home;
