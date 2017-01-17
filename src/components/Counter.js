import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired
  }
  
  render() {
    const { total } = this.props;

    return (
      <div className="total">{ total } / 2,430</div>
    )
  }
}

export default Counter