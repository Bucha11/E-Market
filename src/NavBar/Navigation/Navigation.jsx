import React from "react";
import s from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <div className={s.navigation}>
      <div>
        <a href="#">Home</a>
      </div>
      <div>
        <a href="#">Men</a>
      </div>
      <div>
        <a href="#">Women</a>
      </div>
      <div>
        <a href="#">Other</a>
      </div>
      <div>
        <a href="#">Purchase</a>
      </div>
    </div>
  );
};
