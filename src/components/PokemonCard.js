import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    back: false
  }

  health = (arr) => {
    return arr.map(stat => {
      if(stat.name === 'hp'){
        return stat.value
      }
    })
  }

  showFront = () => {
    return (
      <div>
        <div className="image">
          <img src={this.props.pokemon.sprites.front} alt={"oh no!"} />
        </div>
        <div className="content">
          <div className="header">{this.props.pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {this.health(this.props.pokemon.stats)}
          </span>
        </div>
      </div>
    )
  }

  showBack = () => {
    return (
      <div>
        <div className="image">
          <img src={this.props.pokemon.sprites.back} alt={"oh no!"} />
        </div>
        <div className="content">
          <div className="header">{this.props.pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {this.health(this.props.pokemon.stats)}
          </span>
        </div>
      </div>
    )
  }

  showCard = () => {
    if(this.state.back){
      return this.showBack()
    } else {
      return this.showFront()
    }
  }

  handleClick = () => {
    this.setState({back: !this.state.back})
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        {this.showCard()}
      </Card>
    )
  }
}

export default PokemonCard
