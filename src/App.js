import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";

function App() {
  return (
    <div>
      <Header />
      {useRoutes(routes)}
    </div>
  );
}

export default App;
