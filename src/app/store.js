import { configureStore }  from "@reduxjs/toolkit" ;
import authReducer from '../features/auth/authSlice'


// Create store
const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(), 
    devTools: true,
});

export default store;