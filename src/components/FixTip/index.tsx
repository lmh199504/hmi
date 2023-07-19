import React from "react";
import styles from "./index.module.less";
import { RemindResponse } from "@/services/types/hmi";

interface Props {
  tipData: RemindResponse
}

const FixTip: React.FC<Props> = (props) => {
  return (
    <div className={styles.fix_tip}>
      {props.tipData.maintenance && <div>车辆符合保养条件，请前往保养地点！</div>}{" "}
      {props.tipData.repair && <div>车辆符合维修条件，请前往维修地点！</div>}
    </div>
  );
};

export default FixTip;
