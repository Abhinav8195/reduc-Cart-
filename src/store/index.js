

import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slices/cart-slice'

const Store = configureStore({
    reducer: {
        cart:cartReducer
    }
})

export default Store;