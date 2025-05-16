import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  name: '', // Optional, update if you collect it later
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    logoutUser: (state) => {
      state.email = '';
      state.name = '';
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
