import React, { Component } from "react";
import ReactDOM from "react-dom";


import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';

import globalStateReducer from '../../../store/reducers/globalState';
import Home from "./Home/Home"


const rootReducers = combineReducers({
  globalState  : globalStateReducer
}) 

const store = createStore(rootReducers);



class App extends Component {

  render() {
    return (
      <Home/>
    );
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Provider store={store}><App /></Provider>, wrapper) : false;