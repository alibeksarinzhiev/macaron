import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './ProductsSlice/productsSlice'
import basketSlice from './BasketSlice/BasketSlice'


export const store = configureStore({
    reducer:{
        productsSlice,
        basketSlice
    }
})