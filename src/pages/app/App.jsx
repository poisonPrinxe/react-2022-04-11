import React from "react";
import "./App.css";
import { Restaurants } from "../../features/restaurant/ui/restaurants/component";

export const App = ({ restaurants }) => {
  return (
    <main>
      <Restaurants restaurants={restaurants} />
    </main>
  );
};
