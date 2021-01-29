import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import s from "./Slider.module.css";
import Slider1 from "../img/Slider_1.png";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    style={{ height: "475px",
  width:'100%' }}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    bullets={false}
    
  >
    <div data-src={Slider1} />
    <div data-src={Slider1} />
    <div data-src={Slider1} />
  </AutoplaySlider>
);

export const Slider = () => {
  return <div className={s.slider}>{slider}</div>;
};
