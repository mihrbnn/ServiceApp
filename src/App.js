import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";


function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
