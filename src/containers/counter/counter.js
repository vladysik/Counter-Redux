import React, {Component} from 'react';
import { connect } from 'react-redux';

import { INCREMENT_OPERATION, DECREMENT_OPERATION } from '../../constants/constants.js';

class Counter extends Component {

  incrementOperation = () => {
    const {
      dispatch
    } = this.props;

    dispatch({ type: INCREMENT_OPERATION });
  } 

  decrementOperation = () => {
    const {
      dispatch
    } = this.props;
    
    dispatch({ type: DECREMENT_OPERATION });
  }

  render() {

    const {
      initialValueCount
    } = this.props;

    return (
      <div className='counter__wrapper'>
        <button onClick={this.decrementOperation}>-</button>
        <p>{initialValueCount}</p>
        <button onClick={this.incrementOperation}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  initialValueCount: state.initialValueCount
});

export default connect(mapStateToProps)(Counter);