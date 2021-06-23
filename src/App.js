import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './page/homepage/homepage'

const HatsPage=(props)=>{
  console.log(props)
  return(<div> 
    <h1> HatsPage</h1>
  </div>
  )};
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop/hats' component={HatsPage}/>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
