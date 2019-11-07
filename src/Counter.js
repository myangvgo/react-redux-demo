import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from './actions';

// Add the function
function mapStateToProps(state) {
    return { count: state.count };
}

class Counter extends React.Component {
    // state = { count: 0 };    // remove count from local state

    increment = () => {
        this.props.dispatch({ type: INCREMENT });
    };

    decrement = () => {
        this.props.dispatch({ type: DECREMENT });
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
