import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './ProductsSlice/productsSlice'


export const store = configureStore({
    reducer:{
        productsSlice
    }
})