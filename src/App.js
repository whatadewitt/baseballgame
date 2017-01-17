import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Counter from './components/Counter'
import Teams from './components/Teams'
import * as Actions from './actions'

const App = ({ total, teams, actions }) => (
  <div>
    <Counter total={ total } />
    <Teams teams={ teams } update={actions.update} />
  </div>
)

App.propTypes = {
  total: PropTypes.number.isRequired,
  teams: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  total: state.total,
  teams: state.teams
})

const mapDispatchers = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchers
)(App)