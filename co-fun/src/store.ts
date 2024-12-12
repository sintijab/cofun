import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import soundTechnicalReducer from './slices/soundFetch';
import soundTrendsReducer from './slices/getTrends';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['trends'],
}

const reducers = combineReducers({
  sounds: soundTechnicalReducer,
  trends: soundTrendsReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch