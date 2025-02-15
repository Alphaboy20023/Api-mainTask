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

 export const updateProduct = createAsyncThunk(
    "product/updatedProduct",
    async(updatedProduct, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${updatedProduct.id}`,{
                method: "PUT",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });
            if (!response.ok) {
                throw new Error ("Failed to Update Product");
            }
            return await response.json();
        } catch(error) {
            return rejectWithValue(error.message);
        } }
    )


const productsSlice = createSlice({
    name:'products',
    initialState:{
        items: [],
        product: {},
        loading: false,
        error:null,
        status: "idle",
        currentCategory: 'all',
        selectedProduct:null,
    },
    reducers:{
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setUpdatedProduct: (state, action) => {
            state.updatedProduct = action.payload
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




export const {setCurrentCategory, setSelectedProduct, selectProduct, } = productsSlice.actions;
export default productsSlice.reducer