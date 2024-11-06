import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user:{},
}
export const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        register:(state,action)=>{
            action.payload.preventDefault()
            let newUser = {
                email:action.payload.target[0].value,
                password:action.payload.target[1].value
            }
            axios.post('http://localhost:3000/users',newUser)
            .then(({data})=>{
               state.user = data.user
            })
        }
    }
})
export const {register} =AuthSlice.actions
export default AuthSlice.reducer