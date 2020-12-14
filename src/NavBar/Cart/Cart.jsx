import React, { useState } from "react";
import s from "./Cart.module.css";
export const Cart = () => {

  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className={s.cart}>
      <button onClick={()=>{setIsOpen(!isOpen)}}> Cart (0)</button>
      <div className={isOpen?s.open:s.close}>cart</div>
    </div>
  );
};
