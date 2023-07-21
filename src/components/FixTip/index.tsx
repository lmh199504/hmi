import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { RemindResponse } from "@/services/types/hmi";
import { reqRemind } from "@/services/api/hmi";
import { getCar } from "@/utils/setCar";

let timer: NodeJS.Timer;
const FixTip: React.FC = () => {
  const [tipData, setTipData] = useState<RemindResponse>({
    repair: false,
    maintenance: false,
  });
  // 获取维修保养提醒
  const fetchRemind = () => {
    reqRemind({
      assetName: getCar()?.assetName || "",
    }).then((res) => {
      setTipData(res?.data || { repair: false, maintenance: false });
    });
  };
  useEffect(() => {
    fetchRemind();
    timer = setInterval(() => {
      fetchRemind();
    }, 10 * 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {(tipData.repair || tipData.maintenance) && (
        <div className={styles.fix_tip}>
          {tipData.maintenance && <div>车辆符合保养条件，请前往保养地点！</div>}{" "}
          {tipData.repair && <div>车辆待维修，请及时前往维修地点！</div>}
        </div>
      )}
    </>
  );
};

export default FixTip;
