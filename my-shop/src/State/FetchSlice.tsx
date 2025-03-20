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
  brand:string,
  count:number
}

export interface CardState {
  data: Product[];
  category:string[]
  isLoading: boolean;
  error: boolean;
  selectedCategory:string;
  showMore:number
  seachQuery:string
  basketData:Product[]
}

const initialState: CardState = {
  data: [],
  category:[],
  isLoading: false,
  error: false,
  selectedCategory:'ALL',
  showMore:10,
  seachQuery:'',
  basketData:[]
};




// ✅ `fetch` istifadə edərək API məlumatlarını əldə edən `createAsyncThunk`
export const fetchData = createAsyncThunk<Product[],number>(
  "fetchSlice",
  async (limit) => {  // ✅ Burada limit arqument kimi gəlir
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=0`);

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Xəta kodu: ${response.status} | Mesaj: ${errorMessage}`);
      }

      const data = await response.json();
      return data.products; // ✅ `Product[]` qaytarır
    } catch (error: any) {
      console.error("API Xətası:", error.message);
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
    },
    showMoreClick:(state)=>{
      state.showMore +=5
    },
    setSearchQuery:(state,action)=>{
      state.seachQuery = action.payload
    },
    add:(state,action)=>{
      let i=0;
      if(state.basketData.find((item,index)=>{
          i = index
          return item.id === action.payload.id
          
          
      })){
        state.basketData[i].count++
        state.basketData = [...state.basketData]
      }else{
        state.basketData = [...state.basketData,action.payload]
      }
      
    },
    decrease:(state,action)=>{
      let i=0;
      if(state.basketData.find((item,index)=>{
          i = index
          return item.id === action.payload.id
          
          
      })){
        state.basketData[i].count !==1&& state.basketData[i].count--
        state.basketData = [...state.basketData]
      }else{
        state.basketData = [...state.basketData,action.payload]
      }
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
export const  {selectedCategories,showMoreClick,setSearchQuery,add,decrease} = FetchSlice.actions
export default FetchSlice.reducer;
