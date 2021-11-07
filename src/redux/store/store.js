import { configureStore } from '@reduxjs/toolkit'
import walletReducer from '../slices/wallet'
import transactionsReducer from '../slices/transactions'

const store = configureStore({
    reducer: {
        wallet: walletReducer,
        transactions: transactionsReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;