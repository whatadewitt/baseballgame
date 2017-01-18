import React, { PropTypes } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Counter from './components/Counter'
import Teams from './components/Teams'

const App = ({ total, teams }) => (
  <div>
    <Counter total={ total } />
    <Teams teams={ teams } />
  </div>
)

App.propTypes = {
  total: PropTypes.number,
  teams: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  total: state.teams.reduce( (a, { wins }) => a + wins, 0),
  teams: state.teams
})

export default connect(
  mapStateToProps,
  null
)(App)