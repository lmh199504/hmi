import React from "react";
import type { IRouteComponentProps } from "umi";
import styles from "./index.less";
import { KeepAliveLayout } from "umi";
import TabBar from "@/components/TabBar";

const Layout: React.FC<IRouteComponentProps> = (props) => {
  return (
    <div id="micro-layout" className={styles["layout"]}>
      <div className={styles.main_content}>
        <KeepAliveLayout
          {...props}
          styles={{
            overflow: "hidden",
          }}
        >
          {props.children}
        </KeepAliveLayout>
      </div>
      <TabBar />
    </div>
  );
};

export default Layout;
