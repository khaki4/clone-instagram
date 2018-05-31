// imports

// actions

// actions creators

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
    .then(json => console.log(json))
    .catch(err => console.log(err));
};

// initial state
const initialState = {
  isLogedin: localStorage.getItem('jwt') || false
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// reducer functions

// exports

const actionCreators = {
  facebookLogin
};

export { actionCreators }

// reducer export
export default reducer;