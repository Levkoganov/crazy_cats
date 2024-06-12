import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTop5Cats = createAsyncThunk(
  "cats/fetchTop5Cats",
  async () => {
    const { data } = await axios(`getTop5Cats`);
    return data;
  }
);

export const fetchCatsByName = createAsyncThunk(
  "cats/fetchCatsByName",
  async (name: string) => {
    const { data } = await axios.post(`getCatsByName`, { name });
    return data;
  }
);

export const fetchCatById = createAsyncThunk(
  "cats/fetchCatById",
  async (_id: string) => {
    const { data } = await axios.post(`getCatById`, { _id });
    return data;
  }
);

export const fetchLikeCat = createAsyncThunk(
  "cats/fetchLikeCat",
  async (_id: string) => {
    const { data } = await axios.post(`likeCat`, { _id });
    return data;
  }
);
