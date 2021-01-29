import React from "react";
import s from "./Contacts.module.css";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaRss,
} from "react-icons/fa";
import { IconContext } from "react-icons";
export const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.contacts}>
        <div className={s.facebook}>
          <h3>Facebook</h3>

          <div className={s.fbButton}>
            <IconContext.Provider
              value={{
                style: {
                  color: "#4cb1ca",
                  verticalAlign: "top",
                 
                  width: "2em",
                  height: "2em",
                },
              }}
            >
              <div className={s.icon}>
                <FaFacebookF />
              </div>
            </IconContext.Provider>
            <p>SHARE IT</p>
          </div>
        </div>
        <div className={s.twitter}>
          <h3>From twitter</h3>
          <div className={s.tweet}>
            <IconContext.Provider
              value={{
                style: {
                  color: "#4cb1ca",
                  verticalAlign: "bottom",
                 
                  width: "2em",
                  height: "2em",
                },
              }}
            >
              <div className={s.icon}>
                <FaTwitter />
              </div>
            </IconContext.Provider>
            <p>
              lorem ipsum iskkfg dummy text from twitter privet lorem ipsum
              iskkfg dummy text from twitter privet
            </p>
          </div>
          <div className={s.tweet}>
            <IconContext.Provider
              value={{
                style: {
                  color: "#4cb1ca",
                  verticalAlign: "bottom",
                  
                  width: "2em",
                  height: "2em",
                },
              }}
            >
              <div className={s.icon}>
                <FaTwitter />
              </div>
            </IconContext.Provider>
            <p>
              lorem ipsum iskkfg dummy text from twitter privet lorem ipsum
              iskkfg dummy text from twitter privet
            </p>
          </div>
        </div>

        <div className={s.information}>
          <h3>Information</h3>
          <ul>
            <li>per astra der ipsum</li>
            <li>per astra der ipsum</li>
            <li>per astra der ipsum</li>
            <li>per astra der ipsum</li>
            <li>per astra der ipsum</li>
          </ul>
        </div>

        <div className={s.contactUs}>
          <h3>Contact us</h3>
          <p>Leo store</p>
          <p>Leopard media</p>
          <p>KVM,Rpad, 4590GH</p>
          <p>+1 489-888-0099</p>
          <p>mail@email.ru</p>
          <div className={s.socialButton}>
            <IconContext.Provider
              value={{
                style: {
                  color: "#4cb1ca",
                  verticalAlign: "center",
                  
                  width: "1.5em",
                  height: "1.5em",
                },
              }}
            >
              <div className={s.icon}>
                <FaGooglePlusG />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                style: {
                  color: "#4cb1ca",
                  verticalAlign: "center",
                  
                  width: "1.5em",
                  height: "1.5em",
                },
              }}
            >
              <div className={s.icon}>
                <FaLinkedinIn />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                style: {
                  color: "#4cb1ca",
                  verticalAlign: "center",
                   width: "1.5em",
                  height: "1.5em",
                },
              }}
            >
              <div className={s.icon}>
                <FaRss />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};
