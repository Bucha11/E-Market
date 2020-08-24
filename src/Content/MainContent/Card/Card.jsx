import React from "react";
import gla from "../../../img/cart_id_1.png";
import s from "./Card.module.css";
import { FaShoppingBasket } from "react-icons/fa";
import { IconContext } from "react-icons";

export const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <img src={gla} alt="glasses"></img>
        <div className={s.cardText}>
          <div className={s.desc}>
            <p>Sungalsses at Night</p>
            <p className={s.price}>$380.00</p>
          </div>
          <IconContext.Provider
            value={{
              style: {
                color: "white",
                verticalAlign: "middle",
                width: "30px",
                height: "30px",

                marginTop: "10px",
              },
            }}
          >
            <div className={s.btn}>
              <FaShoppingBasket />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
