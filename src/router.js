import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Echarts from './echarts';
import D33d from './d33d'
import App from './App'

function Routes(){
  return(
    <div>
     <App />
     <Route path="/1" component={Echarts}/>
     <Route path="/2" component={D33d}/>
    </div>
    )
}

export default Routes
