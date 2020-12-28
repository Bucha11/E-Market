import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./Cart.module.css";
import { CartItem } from "./CartItem/CartItem";
export const Cart = () => {
  const cartItems=useSelector(state=>state.cart.cart)
  let totalPrice=cartItems.reduce((acc,i)=>{
    return acc+i.total
  },0)

  const renderItems=cartItems.map(i=><CartItem name={i.name} category={i.category} key={i.id} img={i.img} price={i.price} id={i.id} count={i.count}/>)
  const [isOpen,setIsOpen]=useState(false)
  console.log(cartItems)
  return (
    <div className={s.cart}>
            <button onClick={()=>{setIsOpen(!isOpen)}}> Cart ({cartItems.length})</button>
      <div className={isOpen?s.open:s.close}>
        {renderItems}
        <div className={s.total}><div>Total:{totalPrice}</div></div>
      </div>
    </div>
  );
};
	
