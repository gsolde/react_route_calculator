import React from "react";
import { RouteCalculator } from "./components/routeCalculator/RouteCalculator";
import { Map } from "./components/map/Map";

function App() {
  return (
    <div className="App">
      <Map />
      <RouteCalculator />
    </div>
  );
}

export default App;
