import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    //this.onChangePort = this.onChangePort.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);



    this.state = {
      nom: '',
      prenom: ''
    }
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      nom: this.state.nom,
      prenom: this.state.prenom
    };

    axios.post(`http://localhost:8080/profil`, user)
      .then(res => {
        console.log(res.data);
    
  })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom:
            <input type="text" name="nom" onChange={this.handleChange} value={this.state.nom} />
          </label>
          <label>
            Prenom:
            <input type="text" name="prenom" onChange={this.handleChange} value={this.state.prenom} />
          </label>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    )
  }
}
