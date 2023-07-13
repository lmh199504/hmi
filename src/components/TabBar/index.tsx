import React from "react";
import styles from "./index.less";
import SvgIcon from "../SvgIcon";
import { history, NavLink, useDispatch, useLocation } from "umi";
import { Modal } from "antd";
import { ActionType } from "@/models/system";
const TabBar: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation()
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    if (Math.random() > 0.5) {
      // 有任务未执行完
      Modal.confirm({
        title: "提示",
        content: "您当前有任务未执行完，不可退出。",
        centered: true,
        onOk: () => {
          history.push("/login");
        },
      });
    } else {
      // 无任务未执行完
      Modal.confirm({
        title: "提示",
        content: "是否确认退出当前任务?",
        centered: true,
        onOk: () => {
          history.push("/login");
        },
      });
    }
  };
  // 切换
  const handleExchange = () => {
    if (location.pathname == "/home") {
      dispatch({
        type: "system/setLayout",
        payload: { type: ActionType.home},
      });
    } else if (location.pathname == "/moveBox") {
      dispatch({
        type: "system/setLayout",
        payload: { type: ActionType.move},
      });
    }
    
  };
  return (
    <>
      <div className={styles.tabbar}>
        <div className={styles.refresh}>
          <div className={styles.btn} onClick={handleRefresh}>
            <div className={styles.icon}>
              <SvgIcon name="refresh" />
            </div>
            <div className={styles.text}>刷新</div>
          </div>
        </div>
        <div className={styles.center}>
          <NavLink to="/home" activeClassName={styles.active_btn}>
            <div className={styles.btn}>
              <div className={styles.icon}>
                <SvgIcon name="home" />
              </div>
              <div className={styles.text}>主页</div>
            </div>
          </NavLink>
          <NavLink to="/moveBox" activeClassName={styles.active_btn}>
            <div className={styles.btn}>
              <div className={styles.icon}>
                <SvgIcon name="moveBox" />
              </div>
              <div className={styles.text}>移箱</div>
            </div>
          </NavLink>
          <NavLink to="/apply" activeClassName={styles.active_btn}>
            <div className={styles.btn}>
              <div className={styles.icon}>
                <SvgIcon name="apply" />
              </div>
              <div className={styles.text}>申请</div>
            </div>
          </NavLink>
          <div className={styles.btn} onClick={handleExchange}>
            <div className={styles.icon}>
              <SvgIcon name="exchange" />
            </div>
            <div className={styles.text}>切换</div>
          </div>
          <div className={styles.btn} onClick={handleLogout}>
            <div className={styles.icon}>
              <SvgIcon name="exit" />
            </div>
            <div className={styles.text}>退出</div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>

      <div className={styles.placeholder}></div>
    </>
  );
};

export default TabBar;
