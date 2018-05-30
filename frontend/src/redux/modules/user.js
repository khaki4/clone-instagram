// imports

// actions

// actions creators

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

// reducer export
export default reducer;