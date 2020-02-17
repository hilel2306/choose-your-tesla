import React, { useState } from "react";
import "./App.css";
import TeslaBlack from "./images/tesla-model-s-noire.png";
import TeslaWhite from "./images/tesla-model-s-blanche.png";

const App = () => {
  const [battery, setBattery] = useState(0); // Initialization of the state battery choice
  const [color, setColor] = useState(0); // Initialization of the state color choice

  // Total is the final price ant it changes with user choices
  let total = 0;
  if (battery === 0) {
    total = 90700;
  } else if (battery === 1) {
    total = 106000;
  }
  if (color === 0) {
    total = total + 0;
  } else if (color === 1) {
    total = total + 1000;
  }

  return (
    <div className="container">
      <h1>Tesla Config</h1>
      <h2>Sélectionnez votre véhicule</h2>
      <button
        className={battery === 1 ? "button" : "selected"}
        onClick={() => {
          // The state of battery is updated and total changes
          setBattery(0);
        }}
      >
        Grande Autonomie - 90 700 €
      </button>
      <button
        className={battery === 0 ? "button" : "selected"}
        onClick={() => {
          // The state of battery is updated and total changes
          setBattery(1);
        }}
      >
        Performance - 106 000 €
      </button>
      <h2>Sélectionnez la couleur</h2>
      <button
        className={color === 1 ? "button" : "selected"}
        onClick={() => {
          // The state of color is updated and total changes
          setColor(0);
        }}
      >
        Blanc Nacré - 0 €
      </button>
      <button
        className={color === 0 ? "button" : "selected"}
        onClick={() => {
          // The state of color is updated and total changes
          setColor(1);
        }}
      >
        Noir Uni - 1000 €
      </button>

      <div className="last">
        {/* If the user chooses the color white, we return the white tesla, else the black tesla. */}
        {color === 0 ? (
          <img src={TeslaWhite} alt="tesla white" />
        ) : (
          <img src={TeslaBlack} alt="tesla black" />
        )}
        <div className="price">
          {total} €<button className="buy">Buy !</button>
        </div>
      </div>
    </div>
  );
};

export default App;
