import React from "react";
import ColorChanging from "./Component/ColorChanging";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <ColorChanging />
    </Router>
  );
}

export default App;
