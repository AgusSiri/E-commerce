
import React from "react";

const Item = props => {
  return (
    <div className="item">
      <l1>{props.name}</l1>
      <l1>{props.price}</l1>
    </div>
  );
};

export default Item;