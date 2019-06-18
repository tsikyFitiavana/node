import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListTous from './Component/ListTous'
import PersonList from './Component/postWithUpload_frontToBack';
import AfficheProfil from './Component/AfficheProfil'
 class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <Route path="/" exact component={PersonList} />
        <Route path="/liste" exact component={ListTous} />
        <Route path="/liste/:idProf" component={AfficheProfil} />
      </div>
    </Router>     
    )
  }
}
export default App;