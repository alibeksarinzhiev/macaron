import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket:[]
}
export const basketSlice = createSlice({   
    name:'basket',
    initialState,
    reducers:{
        add:(state,action)=>{
            let find = state.basket.findIndex((el)=>el.id === action.payload.id)
            if(find>=0){
             state.basket = state.basket.map((el)=>{
                 if(el.id === action.payload.id){
                     return {...el,count:el.count+1}
                 }
                 else{
                     return el
                 }
             })
            }
            else{
             state.basket.push(action.payload)
            }
        },
        plusCount:(state,action)=>{
            state.basket = state.basket.map((el)=>{
                if(el.id === action.payload.id){
                    return {...el,count:el.count+1}
                }else{
                    return el
                }
            })
        }
    }

})
export const {add,plusCount} =basketSlice.actions
export default basketSlice.reducer







