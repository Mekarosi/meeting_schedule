import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux"
import { Provider } from 'react-redux'
import store from '../src/redux/index'




   
 ///ACTION  

   const actions = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        state = state + 1;
        break;
   
      case "DECREMENT":
        state = state - 1;
        break;
      default:
        break;
    }
    console.log (state)
    return state;
   };

// const store = createStore(actions)



   ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
