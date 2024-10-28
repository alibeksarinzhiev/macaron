import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:[]
}


export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        getProducts:(state,action)=>{
            state.data = action.payload
        }
    }
})

export const {getProducts} = productsSlice.actions

export default productsSlice.reducer




// let func = (arr)=>{

// }
// console.log(func([1,2,3,4]));