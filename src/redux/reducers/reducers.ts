import {MODIFY_USERS, LOGIN, LOGOUT} from '../constants/authConstants';

const initialState: any = {
  users: [],
  user: [],
  isLoggedIn: false,
};

export const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case MODIFY_USERS:
      const user = action.payload;
      const existUser = state.users.find((x: any) => x.email === user.email);
      if (existUser) {
        return {
          ...state,
          users: state.users.map((x: any) =>
            x.email === existUser.email ? user : x,
          ),
        };
      } else {
        return {
          ...state,
          users: [...state.users, user],
        };
      }

    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};
