const LOGIN_PASS = 'LOGIN_PASS'
const LOGOUT = 'LOGOUT'
const LOGIN_FAIL = 'LOGIN_FAIL'

const loginSubmit = ({ username, password }) => {
  const url = `${process.env.REACT_APP_API_URL}/login`

  const opts = {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  return (dispatch) => {
    fetch(url, opts)
      .then((result) => result.json())
      .then((result) => {
        const { token, error } = result
        if (error) {
          dispatch({ type: LOGIN_FAIL, payload: {error} })
        }
        else {
          const payload = { username, token }
          dispatch({ type: LOGIN_PASS, payload })
        }
      })
  }
}

//step 17:
//doesn't have to know about reducer --> Point of Redux
// sends logout in envelope and asks:
//does anyone care about Logout?
const logout = () => (dispatch) => dispatch({ type: LOGOUT, payload: {} })

//LOGIN_PASS and LOGIN_FAIL and LOGOUT - for reducers
//loginSubmit, logout  - for login Login-Form in components
export {
  LOGIN_PASS,
  LOGIN_FAIL,
  LOGOUT,
  loginSubmit,
  logout
}
