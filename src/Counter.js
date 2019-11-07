import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

// Add the function
function mapStateToProps(state) {
    return { count: state.count };
}

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch(increment()); // need to call the action creator function
    };

    decrement = () => {
        this.props.dispatch(decrement());
    };

    render() {
        return (
            <div className='counter'>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className='count'>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}

// export default Counter;

export default connect(mapStateToProps)(Counter);
