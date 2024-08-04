import { store } from './reducer';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;