import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import walletService from '../../services/wallet.service'

const initialState = [];

export const fund = createAsyncThunk(
    'transactions/fund',
    async (data) => {
        // eslint-disable-next-line
        const res =  await walletService.fund(data);
        return data; //res.data;
    }
);

export const getTransactions = createAsyncThunk(
    'transaction/getAllTransactions',
    async (walletId) => {
        const res =  await walletService.getTransactions(walletId);
        return res.data;
    }
);

export const getTransactionsLocal = (state) => state.transactions

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        deleteAllTransactions: (state) => {
            state.splice(0, state.length);
        }
    },
    extraReducers: {
        [fund.fulfilled]: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { deleteAllTransactions } = transactionsSlice.actions

export default transactionsSlice.reducer;

