import React, { useState } from "react";
import BoxItem from "../BoxItem";

const BoxList: React.FC = () => {
  const [selectId, setSelectId] = useState<string | number>();

  return (
    <div>
      {Array.from({ length: 100 }).map((item, index) => (
        <BoxItem key={index} id={index} selectId={selectId} onSelect={(id) => setSelectId(id)} />
      ))}
    </div>
  );
};

export default BoxList;
