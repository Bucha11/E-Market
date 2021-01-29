import React from "react";
import { MainContent } from "./MainContent/MainContent";
import { Aside } from "./Aside/Aside";
import s from "./Content.module.css";

export const Content = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.mainContent}><MainContent /></div>
        <div className={s.aside}><Aside /></div>
      </div>
    </div>
  );
};
