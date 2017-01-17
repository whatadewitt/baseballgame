import React, { Component, PropTypes } from 'react'

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
        <input type="number" value={team.wins} onChange={this.changeTotal.bind(this)} />
      </div>
    )
  }
}

export default Team