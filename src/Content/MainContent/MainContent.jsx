import React from "react";
import s from "./MainContent.module.css";
import { Route, Router } from "react-router-dom";
import { Home } from "./Home/Home";
import { MenContent } from "./MenContent/MenContent";
import { OtherContent } from "./OtherContent/OtherContent";
import { Purchase } from "./Purchase/Purchase";
import { WomenContent } from "./WomenContent/WomenContent";
export const MainContent = () => {
 
  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/men">
        <MenContent />
      </Route>
      <Route path="/other">
        <OtherContent />
      </Route>
      <Route path="/purchase">
        <Purchase />
      </Route>
      <Route path="/women">
        <WomenContent />
      </Route>
    </div>
  );
};
