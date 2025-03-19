import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// API-dən gələn məlumatın strukturunu müəyyən edən interfeys
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export interface CardState {
  data: Product[];
  isLoading: boolean;
  error: boolean;
}

const initialState: CardState = {
  data: [],
  isLoading: false,
  error: false,
};

// ✅ `fetch` istifadə edərək API məlumatlarını əldə edən `createAsyncThunk`
export const fetchData = createAsyncThunk<Product[]>(
  "fetchSlice",
  async (): Promise<Product[]> => {
    
    try {
      const response = await fetch("https://dummyjson.com/products");
      
      if (!response.ok) {
        throw new Error(`Xəta kodu: ${response.status}`);
      }

      const data = await response.json();
      
      return data.products; // 🔥 `products` açarını qaytarırıq
    } catch (error) {
      console.error("Xəta baş verdi:", error);
      return [];
    }
  }
);

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
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default FetchSlice.reducer;
