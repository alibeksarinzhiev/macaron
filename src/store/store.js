import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './ProductsSlice/productsSlice'
import basketSlice from './BasketSlice/BasketSlice'
import AuthSlice from './AuthSlice/AuthSlice'


export const store = configureStore({
    reducer:{
        productsSlice,
        basketSlice,
        AuthSlice
    }
})