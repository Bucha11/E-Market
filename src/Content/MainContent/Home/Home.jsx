import React from "react";
import { Card } from "../Card/Card";

import s from "./Home.module.css";
export const Home = () => {
  
  return (
    <div>
      <h2>featured products</h2>
      <div className={s.wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <h2>staff pick</h2>
      <div className={s.wrapper}>
        <Card />
        <Card />
        <Card />
      </div>
      <h2>new products</h2>
      <div className={s.wrapper}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
