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
  discountPercentage: number;
  category: string;
  brand: string;
  count: number;
  rating: string|number;
  images: string[];
  availabilityStatus: string;
  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;
  reviews: Review[];
}

interface Orders {
  id: string | number;
  product: Product[];
  deliveryMethod: string;
  date: string | number;
  paymentMethod: string;
  totalPrice: number | string;
}

export interface CardState {
  data: Product[];
  categories: string[];
  brands:string[]
  isLoading: boolean;
  error: boolean;
  selectedCategory: string;
  selectedBrand: string;
  showMore: number;
  seachQuery: string;
  basketData: Product[];
  productPageData: Product[];
  favoriteProducts: Product[];
  orders: Orders[];
  MoreInfoOrders: Orders[];
  filteredProduct: Product[];
}

const persistedBasketData = localStorage.getItem('basketData')
const persistedProductPageData = localStorage.getItem('productPageData')
const persistedFavoriteProducts = localStorage.getItem('favoriteProducts')
const persistedOrders = localStorage.getItem('orders')
const persistedMoreInfoOrders = localStorage.getItem('moreInfoOrders')
const persistedFilteredProduct = localStorage.getItem('filteredProduct')



const initialState: CardState = {
  data: [],
  categories: [],
  brands: [],
  isLoading: false,
  error: false,
  selectedCategory: "ALL",
  selectedBrand:'',
  showMore: 10,
  seachQuery: "",
  basketData: persistedBasketData? JSON.parse(persistedBasketData): [],
  productPageData:persistedProductPageData?JSON.parse(persistedProductPageData): [],
  favoriteProducts:persistedFavoriteProducts?JSON.parse(persistedFavoriteProducts): [],
  orders:persistedOrders?JSON.parse(persistedOrders): [],
  MoreInfoOrders:persistedMoreInfoOrders?JSON.parse(persistedMoreInfoOrders): [],
  filteredProduct:persistedFilteredProduct?JSON.parse(persistedFilteredProduct): [],
};
let url=`https://dummyjson.com/products`;

// ✅ `fetch` istifadə edərək API məlumatlarını əldə edən `createAsyncThunk`
export const fetchData = createAsyncThunk<Product[], number|string>(
  "fetchSlice",
  async (props) => {
    // ✅ Burada limit arqument kimi gəlir
    
    try {
        if(typeof props==='number'){

          url = `https://dummyjson.com/products?limit=${props}&skip=0`
        }
        if(typeof props ==='string'){
          url = 'https://dummyjson.com/products'
        }
     
      const response = await fetch(
        url
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Xəta kodu: ${response.status} | Mesaj: ${errorMessage}`
        );
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
    selectedCategories: (state, action) => {
      state.selectedCategory = action.payload;
      
    },
    selectedBrands: (state, action) => {
      state.selectedBrand = action.payload;
      
    },
    showMoreClick: (state) => {
      state.showMore += 5;
    },
    
    add: (state, action) => {
      let i = 0;
      if (
        state.basketData.find((item, index) => {
          i = index;
          return item.id === action.payload.id;
        })
      ) {
        state.basketData[i].count++;
        state.basketData = [...state.basketData];
      } else {
        state.basketData = [action.payload, ...state.basketData];
      }
      localStorage.setItem("basketData", JSON.stringify(state.basketData));
    },
    decrease: (state, action) => {
      let i = 0;
      if (
        state.basketData.find((item, index) => {
          i = index;
          return item.id === action.payload.id;
        })
      ) {
        state.basketData[i].count !== 1 && state.basketData[i].count--;
        state.basketData = [...state.basketData];
      } else {
        state.basketData = [action.payload, ...state.basketData];
      }
      localStorage.setItem('basketData',JSON.stringify(state.basketData))
    },
    deleteProducts: (state, action) => {
      state.basketData = state.basketData.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem('basketData',JSON.stringify(state.basketData))
    },
    deleteAll: (state) => {
      state.basketData = [];
      localStorage.setItem('basketData',JSON.stringify(state.basketData))

    },
    productPageElement: (state, action) => {
      state.productPageData = state.data.filter(
        (product) => product.id === action.payload
      );
      localStorage.setItem('productPageData',JSON.stringify(state.productPageData))
    },
    setSearchQuery: (state, action) => {
      state.seachQuery = action.payload;
    },
    searchProducts:(state,action)=>{
      
      state.filteredProduct = state.data.filter(product=>product.title.toUpperCase().includes(action.payload.toUpperCase()))
      localStorage.setItem('filteredProduct',JSON.stringify(state.filteredProduct))
    }
    ,
    addFavorite: (state, action) => {
      if (
        !state.favoriteProducts.find((item) => item.id === action.payload.id)
      ) {
        state.favoriteProducts = [action.payload, ...state.favoriteProducts];
      } else {
        state.favoriteProducts = [
          ...state.favoriteProducts.filter(
            (product) => product.id !== action.payload.id
          ),
        ];
      }
      localStorage.setItem('favoriteProducts',JSON.stringify(state.favoriteProducts))

    },
    ordered: (state, action) => {
      state.orders = [action.payload, ...state.orders];
      localStorage.setItem('orders',JSON.stringify(state.orders))

    },
    moreInfoOrder: (state, action) => {
      state.MoreInfoOrders = state.orders.filter(
        (order) => order.id === action.payload
      );
      localStorage.setItem('moreInfoOrders',JSON.stringify(state.MoreInfoOrders))

    },
  },

  extraReducers: (builder) => {
    // builder.addCase(fetchData.pending, (state) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.categories = Array.from(
        new Set(action.payload.map((item) => item.category.toUpperCase()))
      );
      state.brands = Array.from(new Set(action.payload.map(item=>item.brand?.toUpperCase())))
  
    });
    // builder.addCase(fetchData.rejected, (state) => {
    //   state.isLoading = false;
    //   state.error = true;
    // });
  },
});
export const {
  selectedCategories,
  showMoreClick,
  setSearchQuery,
  add,
  decrease,
  deleteAll,
  deleteProducts,
  productPageElement,
  addFavorite,
  ordered,
  moreInfoOrder,searchProducts,selectedBrands
} = FetchSlice.actions;
export default FetchSlice.reducer;
