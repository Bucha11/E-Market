import React from "react";
import { Carousel } from "./Carousel/Carousel";
import { Subscribe } from "./Subscribe/Subscribe";

export const Aside = () => {
  return (
    <div>
      <Carousel />
      <Subscribe />
    </div>
  );
};
