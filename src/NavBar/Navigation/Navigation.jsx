import React from "react";
import s from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className={s.navigation}>
      <div>
        <NavLink exact to="/" activeClassName={s.active}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/men" activeClassName={s.active}>
          Men
        </NavLink>
      </div>
      <div>
        <NavLink to="/women" activeClassName={s.active}>
          Women
        </NavLink>
      </div>
      <div>
        <NavLink to="/other" activeClassName={s.active}>
          Other
        </NavLink>
      </div>
      <div>
        <NavLink to="/purchase" activeClassName={s.active}>
          Purchase
        </NavLink>
      </div>
    </div>
  );
};
