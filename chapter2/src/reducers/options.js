const init = {
  user_name: 'default'
}

const options = (state = init, action) => {
  if (action.type === "USER_NAME") {
    console.log('options', {state, action})
    return { ...state, user_name: action.payload }
  }
  return state
}

export default options;