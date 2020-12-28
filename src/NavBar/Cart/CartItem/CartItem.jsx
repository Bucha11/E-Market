import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeCount, deleteFromCart } from "../../../Redux/Reducers/cartReducer";
import s from "./CartItem.module.css";
import gla from '../../../img/cart_id_1.png'
export const CartItem = (props) => {


const dispatch=useDispatch()
  const [itemsValue,setItemsValues]=useState(1)
  const id=props.id
  const price=props.price
 useEffect(()=>{ dispatch(changeCount({itemsValue,id,price}))
 if(itemsValue<1){
  
   dispatch(deleteFromCart(id))
}
},[itemsValue])

 

  return (
    <div className={s.cartItem}>
    <img src={gla} alt={props.name} width='100px'/>
    <div>{props.name}</div>
    <div> {props.price}</div>
    <div className={s.input}>
    <button onClick={()=>{setItemsValues(itemsValue-1)}}>-</button>
    <input value={itemsValue} onChange={(e)=>{setItemsValues(Number(e.target.value))}}/>
    <button onClick={()=>{setItemsValues(itemsValue+1)}}>+</button></div>
    </div>
  );
};
