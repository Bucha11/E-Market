import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";


import s from "./WomenContent.module.css";
export const WomenContent = () => {
  const allItems = useSelector((state) => state.home.all)

const womenGlasses=allItems.filter(i=>i.category==='women').map(i=>{return (<Card name={i.name} category={i.category} key={i.id} img={i.img} price={i.price} id={i.id}/>)})
  return (
    <div>
      <h2>Women Glasses</h2>
      <div className={s.wrapper}>{womenGlasses}</div>
    </div>
  );
};
