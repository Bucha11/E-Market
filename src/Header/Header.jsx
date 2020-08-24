import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div>
          <a href="#">Account</a>
        </div>
        <div>
          <a href="#">Whishlist</a>
        </div>
        <div>
          <a href="#">Checkout</a>
        </div>
        <div>
          <a href="#">Log In</a>
        </div>
        <div>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};
