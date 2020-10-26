import React, { useEffect } from "react";
import { Card } from "../Card/Card";
import { setHomeItems } from "../../../Redux/Reducers/homeReducer";

import s from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    debugger;
    dispatch(setHomeItems());
  }, []);
  debugger;
  const men = useSelector((state) => state.home.men);
  const women = useSelector((state) => state.home.women);
  const other = useSelector((state) => state.home.other);
  const purchase = useSelector((state) => state.home.purchase);
  const allItems = [...men, ...women, ...other, ...purchase];
  console.log(allItems);
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
