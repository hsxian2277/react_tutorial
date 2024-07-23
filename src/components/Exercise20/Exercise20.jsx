import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home';
import Characters from './Pages/Characters';
import Tos from './Pages/Tos';
import NotFound from './Pages/NotFound';
import './styles.css';

// Pagination
export default function Exercise20() { 

  return (
    <div>
      <h1>Exercise20 react-router-dom</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to='/' style={isActive => ({
                  fontWeight: isActive ? 'bold' : 'normal'
                })}>Home</NavLink>
              </li>
              <li>
              <NavLink exact to='/characters' style={isActive => ({
                  fontWeight: isActive ? 'bold' : 'normal'
                })}>Characters</NavLink>
              </li>
              <li>
              <NavLink exact to='/tos' style={isActive => ({
                  fontWeight: isActive ? 'bold' : 'normal'
                })}>Terms of Service</NavLink>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/characters">
              <Characters/>
            </Route>
            <Route exact path="/tos">
              <Tos />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
