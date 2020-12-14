import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";


import s from "./OtherContent.module.css";
export const OtherContent = () => {
  const allItems = useSelector((state) => state.home.all)

const other=allItems.filter(i=>i.category==='other').map(i=>{return (<Card name={i.name} category={i.category} key={i.id} img={i.img} price={i.price}/>)})
  return (
    <div>
      <h2>Other</h2>
<div className={s.wrapper}>{other}</div>
    </div>
  );
};
