import React from "react";
import { MainFooter } from "./MainFooter/MainFooter";
import { Contacts } from "./Contacts/Contacts";
import s from "./Footer.module.css";
import { Delivery } from "./Delivery/Deivery";
export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.footer}>
        <Delivery />
        <Contacts />
        <MainFooter />
      </div>
    </div>
  );
};
