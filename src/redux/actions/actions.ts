import {MODIFY_USERS, LOGIN, LOGOUT} from '../constants/authConstants';

let userId = 0;

export const modifyUser = (user: any) => ({
  type: MODIFY_USERS,
  payload: {
    id: ++userId,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    password: user.password,
  },
});

export const login = (user: any) => ({
  type: LOGIN,
  payload: {
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    password: user.password,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
