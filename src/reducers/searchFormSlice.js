import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inOpen: false,
  searchFormQ: "",
};

const searchFormSlice = createSlice ({
  name: "searchFom",
  initialState,
  reducers: {
    resetSearchFormState: () => initialState,
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSearchFormQuery: (state, action) => {
      state.searchFormQ = action.payload;
    },
  },
});

export const { resetSearchFormState, setOpen, setSearchFormQuery } = 
  searchFormSlice.actions;
export default searchFormSlice.reducer;
