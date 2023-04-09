import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OfferList from "../components/offerList";
import PageCount from "../components/PageCount";
import { getHelperInfoThunk, getOffersThunk } from "../store/slices/shopSlice";
import style from "../style/pages/Shop.module.scss"
import Loader from "../UI/loader/Loader";
import Filters from "../components/Filters";
const Shop = () => {
    const dispatch = useDispatch()

    const shop = useSelector((state)=>{
        return state.shop
    })

    useEffect(()=>{
        dispatch(getOffersThunk(shop.filters))
    },[shop.filters])
    return(
        <div className={style.container}>
            <Filters/>
            <Loader isLoading={shop.isShopLoading}>
                <div className={style.offerList}>
                    <OfferList offerList={shop.offerList}/>
                </div>
                <div className={style.PageCount}>
                    <PageCount pages={shop.helperInfo.pageCount}/>
                </div>
            </Loader>
        </div>
    )
}
export default Shop