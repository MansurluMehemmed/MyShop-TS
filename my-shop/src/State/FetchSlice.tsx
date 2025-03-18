import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// API-dən gələn məlumatın strukturunu müəyyən edən interfeys
export interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

export interface CardState {
  data: Product[]; // `any[]` yerinə `Product[]` istifadə etdik
  isLoading: boolean;
  error: boolean;
}

const initialState: CardState = {
  data: [],
  isLoading: false,
  error: false,
};

// API-dən məlumat çəkmək üçün async thunk
export const fetchData = createAsyncThunk<Product[]>("fetchSlice", async () => {
  const response = await fetch("https://dummyjson.com/products?limit=12&skip=0");
  const data = await response.json();
  return data.products; // `products` array-ını return edirik
});

export const FetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload; 
      console.log(action.payload);
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default FetchSlice.reducer;
