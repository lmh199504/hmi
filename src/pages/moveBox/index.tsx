import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.less";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import BoxList from "./components/BoxList";
import Map from "./components/Map";
import CarList from "./components/CarList";
import { Layout, SystemState, useStore } from "umi";

const Home: React.FC = () => {
  const store = useStore<{system: SystemState}>();
  const [layout, setLayout] = useState(store.getState().system.moveLayout);
  store.subscribe(() => {
    setLayout(store.getState().system.moveLayout);
  });
  const [nav, setNav] = useState(0);

  const handleNav = (num: number) => {
    setNav(num);
    const dom = document.querySelectorAll("." + styles.big_title);
    dom[num].scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // 目标元素
    const elements: Element[] = [];
    for (let i = 0; i < 3; i++) {
      const targetElement = document.querySelector(`.title0${i + 1}`);
      elements.push(targetElement as Element);
    }
    // 开始观察目标元素
    elements.forEach((item, index) => {
      if (item) {
        // 创建一个 Intersection Observer 实例
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            // 如果目标元素可见，则已经滚动到了页面中
            if (entry.isIntersecting) {
              // console.log("目标元素已经滚动到了页面中");
              // console.log(entry);
              // console.log(index)
              setNav(index);
            }
          });
        });
        observer.observe(item);
      }
    });
  }, []);

  const className = useMemo(() => {
    const arr = [styles.moveBox];
    if (layout == Layout.reverse) {
      arr.push(styles.reverse_layout);
    }
    return arr.join(" ");
  }, [layout]);
  return (
    <div className={className}>
      <div className={styles.left}>
        <div className={styles.input}>
          <Input placeholder="请输入箱号数字查询" prefix={<SearchOutlined />} />
        </div>

        <div className={styles.tool_wrapper}>
          <div className={styles.move_title}>移箱任务</div>
          <div className={styles.todos}>待办任务：148</div>
        </div>

        <div className={styles.sroll_list}>
          <BoxList />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.nav}>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab_item} ${
                nav == 0 ? styles.tab_item_active : ""
              }`}
              onClick={() => handleNav(0)}
            >
              起始
            </div>
            <div
              className={`${styles.tab_item} ${
                nav == 1 ? styles.tab_item_active : ""
              }`}
              onClick={() => handleNav(1)}
            >
              车辆
            </div>
            <div
              className={`${styles.tab_item} ${
                nav == 2 ? styles.tab_item_active : ""
              }`}
              onClick={() => handleNav(2)}
            >
              目的
            </div>
          </div>
          <div className={styles.nav_title}>1Q01</div>
        </div>
        <div className={styles.scroll_content}>
          <div className={[styles.big_title, "title01"].join(" ")}>
            起始场位
          </div>
          <Map />
          <div className={[styles.big_title, "title02"].join(" ")}>车辆</div>
          <CarList />
          <div className={[styles.big_title, "title03"].join(" ")}>
            目的场位
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Home;
