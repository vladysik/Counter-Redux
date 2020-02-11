import React, {Component} from 'react';
import { connect } from 'react-redux';

import { incrementCount, decrementCount } from '../../actions/actionCounter.js';

class Counter extends Component {

  render() {

    const {
      initialValueCount,
      incrementCount,
      decrementCount
    } = this.props;

    return (
      <div className='counter__wrapper'>
        <button onClick={decrementCount}>-</button>
        <p>{initialValueCount}</p>
        <button onClick={incrementCount}>+</button>
      </div>
    )
  }
}

export default connect(state => ({
  initialValueCount: state.initialValueCount,
}), { incrementCount, decrementCount })(Counter);