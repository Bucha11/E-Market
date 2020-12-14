import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import s from "./MenContent.module.css";
export const MenContent = () => {
 const allItems = useSelector((state) => state.home.all)

const menGlasses=allItems.filter(i=>i.category==='men').map(i=>{return (<Card name={i.name} category={i.category} key={i.id} img={i.img} price={i.price}/>)})
  return (
    <div >
      <h2>Men Glasses</h2>
    <div className={s.wrapper}>  {menGlasses}</div>
    </div>
  );
};
