import React, { Component } from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile/Profile"

import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';

import globalStateReducer from '../../../store/reducers/globalState';


const rootReducers = combineReducers({
  globalState  : globalStateReducer
}) 

const store = createStore(rootReducers);



class App extends Component {

  render() {
    return (
      <Profile/>
    );
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Provider store={store}><App /></Provider>, wrapper) : false;