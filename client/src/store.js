import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/account/Slice'
import UserReducer from './components/account/UserSlice'
import loginUserReducer from './components/account/LoginUserSlice'



export default configureStore({
  reducer: {
    counter: counterReducer,
    users: UserReducer,
    login_user: loginUserReducer
  }
})