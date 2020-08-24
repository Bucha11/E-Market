import React from "react";
import s from "./SearchBar.module.css";
export const SearchBar = () => {
  return (
    <div className={s.searchBar}>
      <input type="text" placeholder="...Search" />
    </div>
  );
};
