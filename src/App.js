import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
// import Counter from './Counter';
import ProductList from './ProductList';
import './App.css';

// counter logic
/*
const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'RESET' });

*/

const rootStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

function App() {
    return (
        <Provider store={rootStore}>
            <div className='App'>
                {/* <Counter /> */}
                <ProductList />
            </div>
        </Provider>
    );
}

export default App;
