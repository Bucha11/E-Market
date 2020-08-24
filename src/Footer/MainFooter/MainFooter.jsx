import React from "react";
import s from "./MainFooter.module.css";
export const MainFooter = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.mainFooter}>
        <div className={s.copyright}>
          Copyright 2013 CssAuthor, All rights reserved
        </div>
        <div className={s.menu}>
          <a href="#">About Us</a>
          <a href="#">Delivery & Returns</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};
