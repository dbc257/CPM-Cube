import React from "react";
import "./App.css";
import LandingPage from "./components/HomePage";
import FinanceList from "./components/FinanceList";


function App() {
  return (
    <div>
      <FinanceList />
      <LandingPage />
    </div>
  );
}

export default App;
