import React from "react";
import styles from "./index.less";
import SvgIcon from "@/components/SvgIcon";

const MapItem: React.FC = () => {
  return (
    <div className={styles.map_item}>
      <div className={styles.top}>CAIU</div>
      <div className={styles.bt_num}>1234567</div>

      <div
        className={styles.mask_status}
        style={{
          display: "none",
        }}
      >
        <div className={styles.status_icon}>
          <SvgIcon name="car" />
        </div>
        <div className={styles.status_icon}>
          <SvgIcon name="lock" />
        </div>
        <div className={styles.status_icon}>
          <SvgIcon name="info" />
        </div>
      </div>
    </div>
  );
};
export default MapItem;
