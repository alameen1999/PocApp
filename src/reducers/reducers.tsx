const initialState = {
  data: [],
  loggedInUser: [],
};

export const reducers = (state = initialState, action: any) => {
  if (action.type === 'ADD_USER') {
    return {
      ...state,
      data: action.payload,
    };
  }
  if (action.type === 'SET_LOGIN') {
    return {
      ...state,
      loggedInUser: action.payload,
    };
  }
  return state;
};
