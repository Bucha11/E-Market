import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import s from "./Carousel.module.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    style={{ height: "475px" }}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    bullets={false}
  >
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AutoplaySlider>
);

export const Carousel = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.slider}>
        {slider}
        <button>Check it Out</button>
      </div>
    </div>
  );
};
