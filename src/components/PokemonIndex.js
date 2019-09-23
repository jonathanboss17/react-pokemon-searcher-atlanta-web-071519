import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemonList: [], 
    filtered: [], 
    input: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemonList: data
      })
    })
  }

  filterPokemon = (event) => {
    this.setState({input: event.target.value})
    let x = this.state.pokemonList.filter(pokemon => {return pokemon.name.includes(this.state.input)})
    this.setState({filtered: x})
  }

  handleSubmit = (name, hp, front, back) => {
    const reqObj = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        name: name, 
        stats: [{
          value: hp, 
          name: 'hp'
        }], 
        sprites: {
          front: front, 
          back: back
        }
      })
    }

    fetch('http://localhost:3000/pokemon', reqObj)
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemonList: [...this.state.pokemonList, data]
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={event => this.filterPokemon(event)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonList={this.state.filtered.length > 0 ? this.state.filtered : this.state.pokemonList} />
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage

// _.debounce(() => console.log('🤔'), 500)