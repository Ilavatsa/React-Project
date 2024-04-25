import React from "react";
import Aquarium from "./components/Aquarium";
import Food from "./components/Food";
import Leashes from "./components/Leashes";
import { Parks } from "./components/Parks";
import { Treats } from "./components/Treats";

function App() {
  return (
    <div>
      <Aquarium/>
      <Food />
      <Leashes/>
      <Parks />
      <Treats/>
    </div>
  );
}

export default App;