import React, { useEffect} from "react";
import type { IRouteComponentProps } from "umi";
import styles from "./index.less";
import { KeepAliveLayout, useLocation, history } from "umi";
import TabBar from "@/components/TabBar";
import { useDispatch } from "umi";
import FixTip from "@/components/FixTip";


const Layout: React.FC<IRouteComponentProps> = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      history.push("/home");
    }
    dispatch({ type: "user/getInfo" });
  }, []);

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
      <FixTip />
    </div>
  );
};

export default Layout;
