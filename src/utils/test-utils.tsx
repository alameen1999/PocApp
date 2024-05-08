import {configureStore} from '@reduxjs/toolkit';
import {reducers} from '../redux/reducers/reducers';

export function createTestStore() {
  const store = configureStore({
    reducer: reducers,
  });
  return store;
}
