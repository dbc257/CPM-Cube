import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
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
