import React, { useEffect } from "react";
import { Card } from "../Card/Card";
import { setHomeItems } from "../../../Redux/Reducers/homeReducer";

import s from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   
    dispatch(setHomeItems());
  }, []);

  const allItems = useSelector((state) => state.home.all)
const featured=allItems.filter(i=>i.featured==='true').map(i=>{return (<Card name={i.name} category={i.category} key={i.id} img={i.img} price={i.price}/>)})
return (
    <div>


      <h2>featured products</h2>
      <div className={s.wrapper}>
        {featured}
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
