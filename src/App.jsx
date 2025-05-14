import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");
  
  const increaseTemperature = () => {
    const newTemperatureValue = temperatureValue + 1;
    setTemperatureValue(newTemperatureValue);
    if (newTemperatureValue > 14) {
      setTemperatureColor("hot");
    } else if (newTemperatureValue < 15) {
      setTemperatureColor("cold");
    }
  }
  const decreaseTemperature = () => {
    const newTemperatureValue = temperatureValue - 1;
    setTemperatureValue(newTemperatureValue);
    if (newTemperatureValue < 15) {
      setTemperatureColor("cold");
    } else setTemperatureColor("hot");
  }
  return (
    <div className="app-container">
      <h1 className="temperature-heading">Temperature Control</h1>
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
}

export default App;