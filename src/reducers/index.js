const initialState = {
  teams: [
    {
      key: 'ari',
      name: 'Arizona Diamondbacks',
      wins: 0
    }, {
      key: 'atl',
      name: 'Atlanta Braves',
      wins: 0
    }, {
      key: 'bal',
      name: 'Baltimore Orioles',
      wins: 0
    }, {
      key: 'bos',
      name: 'Boston Red Sox',
      wins: 0
    }, {
      key: 'cin',
      name: 'Cincinatti Reds',
      wins: 0
    }, {
      key: 'cle',
      name: 'Cleveland Indians',
      wins: 0
    }, {
      key: 'chc',
      name: 'Chicago Cubs',
      wins: 0
    }, {
      key: 'chw',
      name: 'Chicago White Sox',
      wins: 0
    }, {
      key: 'col',
      name: 'Colorado Rockies',
      wins: 0
    }, {
      key: 'det',
      name: 'Detroit Tigers',
      wins: 0
    }, {
      key: 'hou',
      name: 'Houston Astros',
      wins: 0
    }, {
      key: 'kcr',
      name: 'Kansas City Royals',
      wins: 0
    }, {
      key: 'lad',
      name: 'Los Angeles Dodgers',
      wins: 0
    }, {
      key: 'laa',
      name: 'The The Angels Angels',
      wins: 0
    }, {
      key: 'mia',
      name: 'Miami Marlins',
      wins: 0
    }, {
      key: 'mil',
      name: 'Milwaukee Brewers',
      wins: 0
    }, {
      key: 'min',
      name: 'Minnesota Twins',
      wins: 0
    }, {
      key: 'nym',
      name: 'New York Mets',
      wins: 0
    }, {
      key: 'nyy',
      name: 'New York Yankees',
      wins: 0
    }, {
      key: 'oak',
      name: 'Oakland Athletics',
      wins: 0
    }, {
      key: 'phi',
      name: 'Philadelphia Phillies',
      wins: 0
    }, {
      key: 'pit',
      name: 'Pittsburgh Pirates',
      wins: 0
    }, {
      key: 'sdp',
      name: 'San Diego Padres',
      wins: 0
    }, {
      key: 'sea',
      name: 'Seattle Mariners',
      wins: 0
    }, {
      key: 'sfg',
      name: 'San Francisco Giants',
      wins: 0
    }, {
      key: 'stl',
      name: 'St. Louis Cardinals',
      wins: 0
    }, {
      key: 'tex',
      name: 'Texas Rangers',
      wins: 0
    }, {
      key: 'tbr',
      name: 'Tampa Bay Rays',
      wins: 0
    }, {
      key: 'tor',
      name: 'Toronto Blue Jays',
      wins: 0
    }, {
      key: 'wsh',
      name: 'Washington Nationals',
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
            return {...team, wins: parseInt(action.value.val, 10)}
          }
          return team
        })
      }
      
    default:
      return state
  }
}