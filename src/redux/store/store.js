import { configureStore } from '@reduxjs/toolkit'

import walletReducer from '../slices/wallet'
import transactionsReducer from '../slices/transactions'
import { loadState, saveState } from '../../hooks/useLocalStorage'

const preloadedState = loadState();

const reducer = {
    wallet: walletReducer,
    transactions: transactionsReducer
}

const store = configureStore({
    reducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
})

store.subscribe(() => {
    saveState(store.getState()) // save state to local storage
})

export default store;