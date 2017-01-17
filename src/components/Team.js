import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { update } from '../actions'

class Team extends Component {
  static propTypes = {
    team: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  }

  changeTotal(event) {
    this.props.update({
      team: this.props.team.key, 
      val: event.target.value
    })
  }

  render() {
    const { team } = this.props;

    return (
      <div>
        <div>{team.name}</div>
        <input 
          type="number" 
          min="0" 
          max="162"
          value={team.wins} 
          onChange={this.changeTotal.bind(this)} 
        />
      </div>
    )
  }
}

export default connect(null, { update })(Team)