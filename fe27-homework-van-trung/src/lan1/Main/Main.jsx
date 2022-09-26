import "./Main.scss";
import { Component, useState } from "react";
export const Main = (props) => {
  
  return (
    <div className="main">
      <div className="form">
        <p className="form-date">
          Ngày:<b>{props.alertDate}</b>
        </p>
        <p className="form-content">{props.content}</p>
      </div>
    </div>
  );
};

export default Main;
