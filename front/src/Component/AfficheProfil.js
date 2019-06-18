
import React, { Component } from 'react';
import axios from 'axios';


export default class AfficheProfil extends Component {

  constructor(props) {
    super(props);
    this.state = { profil: [] };

  }
  componentDidMount() {
    console.log(this.props)
    
    axios.get('http://localhost:8080/profil/'+ this.props.match.params.idProf)
      .then(response => {
        console.log("res", response);
        this.setState({id: response.data._id });
        this.setState({nom : response.data.nom });
        this.setState({prenom: response.data.prenom });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  liste() {
      return(
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <h2>profil</h2>
                </tr>
                <tr>
                  <th>ID</th>
                  <th>NOM</th>
                  <th>PRENOM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.id}</td>
                  <td>{this.state.nom}</td>
                  <td>{this.state.prenom}</td>
                  </tr>
              </tbody>
            </table>
          </div>
      )

  }
  render() {
    return (
      <div>
        {this.liste()}
      </div>
    );
  }
}