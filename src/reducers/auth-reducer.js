function AuthReducer(state = null, action) {
  const initialState = {
    username: null,
    token: null,
    error: null
  }
  if (state) {
    switch(action.type) {
    default:
        return state
    }
  }
  else {
    return {...initialState}
  }
}

export default AuthReducer
