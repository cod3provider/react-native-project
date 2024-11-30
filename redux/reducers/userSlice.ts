import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {UserData} from "@/types";

// interface UserState {
//   userInfo: { uid: string; email: string | null; displayName: string | null } | null;
// }

interface UserState {
  userInfo: UserData | null;
}

const initialState: UserState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserState['userInfo']>) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.userInfo = null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
