import React from "react";
import s from "./Navigation.module.css";

import {
  BrowserRouter as Router,
    NavLink
} from "react-router-dom"

export const Navigation = () => {
  return (
    <Router>
    <div className={s.navigation}>
      <div>
        <NavLink to='/home'>Home</NavLink>
      </div>
      <div>
        <NavLink to='/men'>Men</NavLink>
      </div>
      <div>
        <NavLink to='/women'>Women</NavLink>
      </div>
      <div>
        <NavLink to='/other'>Other</NavLink>
      </div>
      <div>
        <NavLink to='/purchase'>Purchase</NavLink>
      </div>
    </div>
    </Router>
  );
};
