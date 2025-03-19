import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// API-dən gələn məlumatın strukturunu müəyyən edən interfeys
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage:number;
  category:string;
  brand:string
}

export interface CardState {
  data: Product[];
  category:string[]
  isLoading: boolean;
  error: boolean;
  selectedCategory:string;
}

const initialState: CardState = {
  data: [],
  category:[],
  isLoading: false,
  error: false,
  selectedCategory:'ALL'
};





// ✅ `fetch` istifadə edərək API məlumatlarını əldə edən `createAsyncThunk`
export const fetchData = createAsyncThunk<Product[]>(
  "fetchSlice",
  async (): Promise<Product[]> => {
    
    try {
      const response = await fetch("https://dummyjson.com/products?limit=12&skip=0");
      
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
  reducers: {
    selectedCategories:(state,action)=>{
      state.selectedCategory = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.category = Array.from(new Set(action.payload.map(item=>item.category.toUpperCase())))
      
      
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});
export const  {selectedCategories} = FetchSlice.actions
export default FetchSlice.reducer;
