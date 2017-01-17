import React, { Component, PropTypes } from 'react'
import Team from './Team'

class Teams extends Component {
  static propTypes = {
    teams: PropTypes.array.isRequired
  }

  render() {
    const { teams } = this.props;

    return (
      <ul className="teams">
        {teams.map(team =>
          <Team 
            key={team.key}
            team={team}
          />
        )}
      </ul>
    )
  }
}

export default Teams