const initialState = {
  total: 0,
  teams: [
    {
      key: 'tor',
      name: 'Toronto Blue Jays',
      wins: 0
    },
    {
      key: 'tbr',
      name: 'Tampa Bay Rays',
      wins: 0
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        teams: state.teams.map( ( team ) => {
          if ( team.key === action.team ) {
            team.wins = action.val
          }
        }),
        total: state.teams.reduce( (a, b) => { return a.wins + b.wins }, 0),
      }
    default:
      return state
  }
}