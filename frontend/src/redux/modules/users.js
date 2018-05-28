// imports

// actions

// actions creators

// initial state
const initialState = {
  isLogin: localStorage.getItem('jwt') || false
};

// reducer

const reducer = (state = initialState) => {
  switch (action.type) {
    default:
      return state;
  }
};

// reducer functions

// exports

// reducer export
export default reducer;