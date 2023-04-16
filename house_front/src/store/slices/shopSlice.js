import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/consts"
import axios from "axios";
export const getOffersThunk = createAsyncThunk("shop/getOffers", async (filters, thunkApi) => {
    try {
        const res = await axios({
            method: "put",
            url: `${BASE_URL}/`,
            headers: {},
            data: filters
        })
        console.log(filters)
        return res.data
    } catch (err) {
        console.log(err)
        return thunkApi
    }
})
export const getOfferThunk = createAsyncThunk("shop/getOffer", async (offerId, thunkApi) => {
    try {
        const res = await axios(`${BASE_URL}/getOfferById/${offerId}`)
        return res.data
    } catch (err) {
        console.log(err)
        return thunkApi
    }
})
export const getHelperInfoThunk = createAsyncThunk("shop/getHelperInfo", async (_, thunkApi) => {
    try {
        const res = await axios(`${BASE_URL}/helperInfo`)
        return res.data
    } catch (err) {
        console.log(err)
        return thunkApi
    }
})

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        filters: {
            page: 1
        },


        offerList: [],
        activeOffer: null,

        isShopLoading: true,
        isOfferLoading: true,
        isHelperInfoLoading: true,

        helperInfo: {
            pageCount: 1,
            allOffers: 0,
        }
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload
        },

    }, extraReducers: (builder) => {
        builder.addCase(getOffersThunk.pending, (state, action) => {
            if (Number(state.filters.page) === 1) {
                state.offerList = []
            }
            state.isShopLoading = true
        })
        builder.addCase(getOffersThunk.fulfilled, (state, action) => {
            state.isShopLoading = false
            if (Number(state.filters.page) === 1) {
                state.offerList = [...action.payload.offers]
            } else {
                state.offerList.push(...action.payload.offers)
            }
            if (action.payload.supportingInformation) {
                state.helperInfo = action.payload.supportingInformation

            }
        })

        builder.addCase(getOfferThunk.pending, (state, action) => {
            state.isOfferLoading = true
        })
        builder.addCase(getOfferThunk.fulfilled, (state, action) => {
            state.activeOffer = action.payload
            state.isOfferLoading = false
        })
        builder.addCase(getHelperInfoThunk.pending, (state, action) => {
            state.isHelperInfoLoading = true
        })
        builder.addCase(getHelperInfoThunk.fulfilled, (state, action) => {
            state.helperInfo = { ...state.helperInfo, ...action.payload }
            state.isHelperInfoLoading = false
        })
    }
})
export const { setFilters } = shopSlice.actions
export default shopSlice.reducer