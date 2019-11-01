import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./components/layout/Landing"
import Header from "./components/layout/Header"
import "./App.css"
import Dashboard from "./components/dashboard/Dashboard"


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        
        
      

        <Dashboard/>
      </div>
     );
  }
}
 
export default App;
 













