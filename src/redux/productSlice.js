import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// FOR FETCHING PRODUCTS BY CATEGORY

export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProductsByCategory',
    async (category) => {
        const url = category === 'all'
            ? 'https://fakestoreapi.com/products'
            : `https://fakestoreapi.com/products/category/${category}`;

    const response = await fetch(url);
    return await response.json();
    }
);

export const fetchProductById = createAsyncThunk (
    'products/fetchProductById',
    async (ProductId) => {
        const url = ProductId === "all"
        ? 'https://fakestoreapi.com/products/1'
        : `https://fakestoreapi.com/products/${ProductId}`
        

        const response = await fetch(url)
        if (!response.ok) {
            throw new Error ('failed to fetch product');
        }
        return await response.json();
    }
)


const productsSlice = createSlice({
    name:'products',
    initialState:{
        items: [],
        loading: false,
        error:null,
        currentCategory: 'all',
        selectedProduct:null,
    },
    reducers:{
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductsByCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchProductsByCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })


        .addCase(fetchProductById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductById.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedProduct = action.payload;
        } )
        .addCase(fetchProductById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message; 
        })
    },
});

export const {setCurrentCategory, setSelectedProduct} = productsSlice.actions;
export default productsSlice.reducer