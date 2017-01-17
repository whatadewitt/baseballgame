import React, { Component, PropTypes } from 'react'
import Team from './Team'

class Teams extends Component {
  static propTypes = {
    teams: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired
  }

  render() {
    const { teams, update } = this.props;

    return (
      <ul className="teams">
        {teams.map(team =>
          <Team 
            key={team.key}
            team={team}
            update={update}
          />
        )}
      </ul>
    )
  }
}

export default Teams