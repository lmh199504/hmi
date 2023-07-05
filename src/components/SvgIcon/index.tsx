import React from "react";
import style from "./index.less";

const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../../icons/svg", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

interface Props {
  name: string;
  className?: string;
  onClick?: () => void;
}

const SvgIcon: React.FC<Props> = (props) => {
  return (
    <svg
      onClick={props.onClick}
      className={style["svg-icon"] + " " + props.className}
      aria-hidden="true"
    >
      <use xlinkHref={"#icon-" + props.name} />
    </svg>
  );
};

export default SvgIcon;
