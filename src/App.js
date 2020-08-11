import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import News from "./pages/News/News";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <section className="app-content">
        <Switch>
          <Route path="/o-nas">
            <About />
          </Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
          <Route path="/aktualnosci">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
