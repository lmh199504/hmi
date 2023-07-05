/*弹窗拖拽，适用于ant design */
import { useEffect } from "react";

const useDrag = () => {
  let draging = false;
  let dragDom: HTMLElement | null;
  let dragpoint: { x: number; y: number };
  const before: { x: number; y: number } = {
    x: 0,
    y: 0,
  };
  useEffect(() => {
    const mousedown = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      //点住标题栏进行拖拽
      if (!target.classList.contains("ant-modal-title")) {
        return;
      }
      target.style.cursor = "move";
      target.style.userSelect = "none";
      //根据标题栏的dom找到控制弹窗组件布局位置的dom，ant-design的弹窗组件的外壳在标题栏的父级第3层
      dragDom = target.parentElement?.parentElement
        ?.parentElement as HTMLElement;
      //由于此拖拽法对所有弹窗有效，通过classname标注控制动作取消
      if (dragDom.parentElement?.classList.contains("nodrag")) {
        dragDom = null;
        return;
      }

      const _dragdom = dragDom as HTMLElement;
      const sty = window.getComputedStyle(_dragdom, null);
      before.x = parseFloat(sty.left);
      before.y = parseFloat(sty.top);
      draging = true;
      dragpoint = {
        x: ev.clientX,
        y: ev.clientY,
      };
    };

    const mouseup = () => {
      draging = false;
      dragDom = null;
    };

    const mousemove = (ev: MouseEvent) => {
      if (draging) {
        const _dragdom = dragDom as HTMLElement;
        _dragdom.style.left = `${before.x + ev.clientX - dragpoint.x}px`;
        _dragdom.style.top = `${before.y + ev.clientY - dragpoint.y}px`;
      }
    };

    document.addEventListener("mousedown", mousedown);
    document.addEventListener("mouseup", mouseup);
    document.addEventListener("mousemove", mousemove);

    return () => {
      document.removeEventListener("mousedown", mousedown);
      document.removeEventListener("mouseup", mouseup);
      document.removeEventListener("mousemove", mousemove);
    };
  }, []);
};

export default useDrag;
