import React, { useRef } from "react";
import styles from "./index.less";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import MapItem from "../MapItem";

const Map: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleLeft = () => {
    // console.log()
    if (contentRef.current) {
      contentRef.current.scrollLeft = contentRef.current?.scrollLeft - 137;
    }
  };

  const handleRight = () => {
    console.log();
    if (contentRef.current) {
      contentRef.current.scrollLeft = contentRef.current?.scrollLeft + 137;
    }
  };

  return (
    <div className={styles.map_wrapper}>
      <div className={styles.content}>
        <div className={styles.left_degree_wrapper}>
          <div className={styles.left_degree}>
            {Array.from({ length: 9 }).map((item, index) => (
              <div key={index} className={styles.degree_item}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right_content} ref={contentRef}>
          <div className={styles.map_grid}>
            {Array.from({ length: 180 }).map((item, index) => (
              <MapItem key={index} />
            ))}
          </div>
          <div className={styles.bottom_degree}>
            {Array.from({ length: 20 }).map((item, index) => (
              <div key={index} className={styles.degree_item}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.arrow_btn}>
        <div className={styles.btn} onClick={handleLeft}>
          <ArrowLeftOutlined />
        </div>
        <div className={styles.number}>1~9</div>
        <div className={styles.btn} onClick={handleRight}>
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default Map;
