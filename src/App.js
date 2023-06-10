import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";

function App() {
  const route = useRoutes(routes);
  return (
    <div>
      <Header />
      {route}
    </div>
  );
}

export default App;
