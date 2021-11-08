import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import walletService from '../../services/wallet.service'

const initialState = [];

export const createWallet = createAsyncThunk(
    'wallet/createWallet', 
    async (data) => {
        // eslint-disable-next-line 
        const res = await walletService.create(data);
        return data; //res.data;
    }
);

export const getWallet = (state) => state.wallet

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        deleteAllWallets: (state) => {
            state.splice(0, state.length);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createWallet.fulfilled, (state, action) => {
            state.push(action.payload);
        })
    }
});

export const { deleteAllWallets } = walletSlice.actions


export default walletSlice.reducer;