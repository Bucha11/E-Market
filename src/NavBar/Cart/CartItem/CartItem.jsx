import React from "react";
import s from "./CartItem.module.css";
export const CartItem = (props) => {

  return (
    <div className={s.cart}>
    <img src={props.img} alt={props.name}/>
    <div>{props.name}</div>
    <div> {props.price}</div>
    </div>
  );
};
