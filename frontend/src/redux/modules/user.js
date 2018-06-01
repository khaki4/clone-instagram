// imports

// actions
const SAVE_TOKEN = 'SAVE_TOKEN';

// actions creators
const saveToken = token => ({ type: SAVE_TOKEN, token });

// API actions

const facebookLogin = (access_token) => (dispatch) => {
  return fetch('/users/login/facebook/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(({
      access_token
    }))
  })
    .then(response => response.json())
    .then(json => {
      if (json.token) {
        localStorage.setItem('jwt', json.token);
        dispatch(saveToken(json.token));
      }
    })
    .catch(err => console.log(err));
};

// initial state
const initialState = {
  isLogedin: localStorage.getItem('jwt') || false
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action)
    default:
      return state;
  }
};

// reducer functions
const applySetToken = (state, action) => {
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token,
  }
}
// exports

const actionCreators = {
  facebookLogin
};

export { actionCreators }

// reducer export
export default reducer;