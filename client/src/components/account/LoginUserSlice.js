import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUserSlice = createSlice({
    name: 'login_user',
    initialState: {
      login_user: [],
    },
    reducers: {
      setUser: (state, action) => {
        state.login_user = action.payload;
      },
    },
  });
  
  export const getLoginUser = (id) => {
    return async (dispatch) => {
      const res = await axios.get("http://localhost:3001/api/v1/accounts/"+id);
      console.log(res.data.data);
      dispatch(setUser(res));
    };
  };
  
  export const { setUser } = loginUserSlice.actions;
  
  export default loginUserSlice.reducer;