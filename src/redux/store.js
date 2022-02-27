import {configureStore , combineReducers} from '@reduxjs/toolkit'
//importing our reducers from carReducer
import cartReducer from './cartReducer'
import userReducer from './userReducer'

/// for login and register process
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";

  
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  //using combineUser 
  const rootReducer = combineReducers({
     user : userReducer,
     cart : cartReducer
  })

  //we want to persist user reducer and cart 
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    // using persistedReducer cause it contains cart and userReducer
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

//exporting persist store as well
export let persistor = persistStore(store)

export default store