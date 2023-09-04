import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cart:[],
    cartCount:0
}


const cartSlice=createSlice({
name: "cartData",
initialState,
reducers:{
addToCart:(state,action)=>{

},
removeFromCart:(state,action)=>{
    
}
}
})

export const {addToCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer