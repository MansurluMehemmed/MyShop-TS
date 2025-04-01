import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Review {
  rating: number;  
  comment: string;  
  date: string;  
  reviewerName: string;  
  reviewerEmail: string;  
}

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
  count:number,
  rating:string,
  images:string[]
  availabilityStatus:string
  shippingInformation:string
  warrantyInformation:string
  returnPolicy:string
  reviews:Review[]
}

interface Orders extends Product {
  deliveryMethod:string
  date:string | number
  paymentMethod:string
  
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
  productPageData:Product[]
  favoriteProducts:Product[]
  orders:Orders[]
  filteredProduct:Product[]
}

const initialState: CardState = {
  data: [],
  category:[],
  isLoading: false,
  error: false,
  selectedCategory:'ALL',
  showMore:10,
  seachQuery:'',
  basketData:[],
  productPageData:[],
  favoriteProducts:[],
  orders:[],
  filteredProduct:[]
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
        state.basketData = [action.payload,...state.basketData]
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
        state.basketData = [action.payload,...state.basketData]
      }
    },
    deleteProducts:(state,action)=>{
      state.basketData = state.basketData.filter(product=>product.id!==action.payload)

      
    },
    deleteAll:(state)=>{
      state.basketData = []
    },
    productPageElement:(state,action)=>{
      state.productPageData = state.data.filter(product=>product.id ===action.payload)
    },
    addFavorite:(state,action)=>{
      if(!state.favoriteProducts.find((item)=>item.id ===action.payload.id)){
        state.favoriteProducts = [action.payload,...state.favoriteProducts]
      }else{
        state.favoriteProducts = [...state.favoriteProducts.filter(product=>product.id !== action.payload.id)]
      }
    },
    ordered:(state,action)=>{
      state.orders = [action.payload,...state.orders]
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
export const  {selectedCategories,showMoreClick,setSearchQuery,add,decrease,deleteAll,deleteProducts,productPageElement,addFavorite,ordered} = FetchSlice.actions
export default FetchSlice.reducer;
