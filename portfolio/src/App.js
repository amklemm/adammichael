import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './components/View_About';
import Contact from './components/View_Contact';
import Resume from './components/View_Resume';
import Method from './components/View_Method';
import Projects from './components/View_Projects';
// import {Projects_Mobile} from './components/View_Projects';
import NotFound from './components/NotFound';

const AddFonts = (props) => {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300|Raleway:300" />
    </div>
  )
}

const App = () => (
  <Router>
    <div className="App">
      <AddFonts/>
      <div className="header-group">
        <Header />
        <Navigation />
      </div>
      <div className="main-content">
        <div className="margins">
          <Switch>
            <Route exact path="/" component={Resume} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/method" component={Method} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  </Router>
);











export default App;
