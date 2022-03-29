import React, { Component } from 'react';
import api from './api';

class App extends Component
{

  state = {
    filmes: [],
  }

  async componentDidMount()
  {
    const response = await api.get('');
    console.log(response.data);

    this.setState({ filmes: response.data})
  }
  render()
  {
    const {filmes} = this.state;
      return ( 
        <div>
          <h1>Listar os filmes</h1>
          {console.log(filmes)}
          {filmes.map(filme => (
            <li key={filme.show.id}>
              <h2>
                <strong>Título: </strong>
                {filme.show.name}
              </h2>
              <a href={filme.show.url}>
                {filme.show.url}
              </a>
            </li>
          ))}
        </div>
      );
  }
};

export default App;
