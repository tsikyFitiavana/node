import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import PersonList from './Component/postWithUpload_frontToBack';
 class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <Route path="/" exact component={PersonList} />
      </div>
    </Router>     
    )
  }
}
export default App;