import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './page/homepage/homepage'
import ShopPage from './page/shop/shopPage';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
