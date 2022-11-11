import React from "react";
import { Header } from "./components/header";
import 'boxicons';
import { BrowserRouter as Router, Route,Link,Switch } from "react-router-dom";
import {Paginas} from "./components/Paginas";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Paginas />
      </Router>
    </div>
  );
}

export default App;
