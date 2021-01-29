import React from "react";
import { Navigation } from "./Navigation/Navigation";
import s from "./NavBar.module.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { Cart } from "./Cart/Cart";

export const NavBar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo}><h1>Leo Shop</h1></div>
      <Navigation />
      <SearchBar />
      <Cart />
    </div>
  );
};
