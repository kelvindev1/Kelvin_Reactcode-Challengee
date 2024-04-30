import React from "react";
import Child from "./Child";

function Parent({ data }) {
  return (
    <div>
      <div className="Datas-container">
        <Child props={data} />
      </div>
    </div>
  );
}

export default Parent;
