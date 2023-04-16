import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getOfferThunk } from "../store/slices/shopSlice";
import Loader from "../UI/loader/Loader";
import OfferInfo from "../components/OfferInfo";
const Offer = () => {
    const location = useLocation()
    const offerId = location.pathname.split("/")[2]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOfferThunk(offerId))
    }, [])

    const shop = useSelector((state) => {
        return state.shop
    })
    return (
        <Loader isLoading={shop.isOfferLoading}>
            <OfferInfo offerInfo={shop.activeOffer} />
        </Loader>
    )
}
export default Offer