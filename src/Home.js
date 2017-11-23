import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux'


const userReducer = (state={},action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      state = { ...state, name:action.payloadName }
      break
    case 'CHANGE_AGE':
      state = { ...state, age:action.payloadAge }
      break
    default:
      state
    
  }
  return state;
}

const tweetsReducer = (state=[],action) => {
//console.log(action.payloadTweet, action.type)
  
    if (action.type === 'CHANGE_TWEET')
      state = { ...state, tweet:action.payloadTweet }
  return state
}

const reducers = combineReducers({
user:userReducer,
tweet:tweetsReducer,
});

const store = createStore(reducers)

store.subscribe(()=>{
  console.log(store.getState())
});

const datas = {
  payloadName:"HARISH1",
  payloadAge: 33,
  payloadTweet: 1000
}

store.dispatch({type:"CHANGE_NAME", payloadName:"HARISH"})
store.dispatch({type:"CHANGE_NAME", payloadName:"Mahajan"})
store.dispatch({type:"CHANGE_AGE", payloadAge:25})
store.dispatch({type:"CHANGE_TWEET",  datas})

class Home extends Component {
  render() {
    return (
        <div>
            <h1>Home1234</h1>
            Crated By:<b> <i> Mahajan Harish </i></b> <br/>
            Email: <b><i>hmahajan.dmi@gmail.com </i></b> <br/>
            Contact: <b><i>+91 8000641661</i></b>
        </div>
    );
  }
}

export default Home;