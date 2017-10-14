import React, { Component } from 'react'
import { createStore } from 'redux'

const reducer = function(state,action){
  if(action.type === "INC")
    return state + 1

  if(action.type === "DEC")
    return state - 1

  return state
}

const reducer1 = function(state,action){
  if(action.type === 'PUSH_ELEMENT' && action.payload!==undefined)
   d.push(action.payload)

  return state
}

var d = [0,1,2]

const store = createStore(reducer, 0)
const store1 = createStore(reducer1, d)

store.subscribe(()=>{
  console.log(store.getState())
});

store1.subscribe(()=>{
  console.log(store1.getState())
});

store.dispatch({type:"INC", payload:1})
store1.dispatch({type:"PUSH_ELEMENT", payload:55})
store1.dispatch({type:"PUSH_ELEMENT", payload:15})

// store.dispatch({type:"INC", payload:1});
// store.dispatch({type:"INC", payload:1});
// store.dispatch({type:"DEC", payload:1});
// store.dispatch({type:"DEC", payload:1});

class About extends Component {
  render() {
    return (
        <h1><span id="about">Redux is used here</span>
        </h1>
    );
  }
}

export default About
