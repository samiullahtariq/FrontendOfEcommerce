import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name : "cart",
    initialState :{
        //products means which products we have selected
        products : [],
         //quantity means what is quantity of the products
        quantity : 0,
        //total means what is the total price of the products we want to purchase
        total : 0
    },
    reducers :{
        //our first reducer will be addProduct
        addProduct : (state, action)=>{
            //in this we are increasing the quantity by one
            ///this quantity is from the initial state
            state.quantity += 1
            //now we are updating our products
            state.products.push(action.payload)
            //set the total
            //we will set the total in payload where we will dispatch the reducer
            //we are getting the action.payload.price and quantity from the dispatch hook
            state.total += action.payload.price * action.payload.quantity
        }
    }

})

// exporting addProduct from cartSlice.action
export const {addProduct} = cartSlice.actions

// exporting reducer from cartSlice
export default cartSlice.reducer
