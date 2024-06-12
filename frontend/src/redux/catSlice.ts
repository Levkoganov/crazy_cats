import { createSlice } from "@reduxjs/toolkit";
import { ICatsState } from "../types/types";
import {
  fetchCatById,
  fetchCatsByName,
  fetchLikeCat,
  fetchTop5Cats,
} from "../libs/api/fetchCats";

const initialState: ICatsState = {
  top5Cats: [],
  catsResult: [],
  cat: [],
  isLoading: false,
};

export const counterSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTop5Cats.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTop5Cats.fulfilled, (state, action) => {
      state.top5Cats = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCatsByName.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCatsByName.fulfilled, (state, action) => {
      state.catsResult = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCatById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCatById.fulfilled, (state, action) => {
      state.cat = [action.payload];
      state.isLoading = false;
    });
    builder.addCase(fetchLikeCat.fulfilled, (state, action) => {
      state.cat = [action.payload];
      state.isLoading = false;
    });
  },
});

export default counterSlice.reducer;
