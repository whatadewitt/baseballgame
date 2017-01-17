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
          if ( team.key === action.value.team ) {
            team.wins = parseInt(action.value.val, 10)
          }
          return team
        }),
        total: state.teams.reduce( (a, { wins }) => { return a + wins }, 0)
      }
    
    default:
      return state
  }
}