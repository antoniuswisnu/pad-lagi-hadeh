import React from "react";
import ProgressBar from "./level";

const App = () => {
  const value = 50;
  const max = 100;
  const height = 20;
  const color = "orange";

  return (
    // Level Bar Progress

    <div>
      <h1>Antonius Akbar Aji</h1>
      <h2>TRPL 2023 Kelas A2</h2>
      <ProgressBar value={value} max={max} height={height} color={color} />
    </div>
  );
};

export default App;
