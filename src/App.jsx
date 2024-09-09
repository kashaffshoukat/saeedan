import React, { useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Router from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
