import React from "react";
import "./Loader";

const Loader = props => {
  return (
    <div
      className="container-loader"
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
    >
      <div className="loader loader--0">
        <div className="loader__ball bg-warning" />
      </div>
      <div className="loader loader--1">
        <div className="loader__ball bg-warning" />
      </div>
      <div className="loader loader--2">
        <div className="loader__ball bg-warning" />
      </div>
      <div className="loader loader--3">
        <div className="loader__ball bg-warning" />
      </div>
      <div className="loader loader--4">
        <div className="loader__ball bg-warning" />
      </div>
    </div>
  );
};

export default Loader;