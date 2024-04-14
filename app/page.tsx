import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Justice Juggernaut. All rights reserved.</p>
          {serverConfig?.isVercel && <Analytics />}
        </footer>
      </div>
    </Router>
  );
};

export default App;
