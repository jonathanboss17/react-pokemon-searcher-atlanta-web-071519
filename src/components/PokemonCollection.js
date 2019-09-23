import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderCards = () => {
    return this.props.pokemonList.map(pokemon => { return <PokemonCard pokemon={pokemon}/> })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
