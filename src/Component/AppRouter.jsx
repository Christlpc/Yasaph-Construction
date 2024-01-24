import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Projets from './Projets';
import Contact from './Contact';
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/Service" component={Service}/>
        <Route path="/projets/:id?" component={Projets} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
