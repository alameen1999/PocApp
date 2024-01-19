import {useSelector} from 'react-redux';

export const useGetUsers = () => {
  return useSelector((state: State) => state.users);
};

export const useLoggedInUser = () => {
  return useSelector((state: State) => state.user);
};

export const useLoggedIn = () => {
  return useSelector((state: State) => state.isLoggedIn);
};
