import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Quoc Viet",
    age: "27",
    about: "I'm engineer",
    avaUrl:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/270496416_1397207454029036_3417683849098760050_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=j1_QwS0TXloAX99jIG_&t",
    themeColor: "#ff9051",
    pending: false,
    error: false,
  },

  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
