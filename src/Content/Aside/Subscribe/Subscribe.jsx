import React from "react";
import s from "./Subscribe.module.css";
export const Subscribe = () => {
  return (
    <div className={s.subscribe}>
      <h2>Newsletters signup</h2>
      <p>Podpishis bratuha,novosti vse dela</p>
      <input type="text" />
      <button type="submit">Subscribe</button>
    </div>
  );
};
