import React, { useCallback } from 'react'

const combineReducers = reducer => {
  return (state = {}, action) => {
    console.log('state', state)
    console.log(action === 'object' ? action : {})
    const keys = Object.keys(reducer)
    const nextReducers = {}
    for (let i = 0; i < keys.length; i++) {
      const invoke = reducer[keys[i]](state[keys[i]], action)
      nextReducers[keys[i]] = invoke
    }
    console.log('next reducer', nextReducers)
    return nextReducers
  }
}

export default combineReducers