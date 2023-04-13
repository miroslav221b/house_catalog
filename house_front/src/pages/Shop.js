import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OfferList from "../components/offerList";
import PageCount from "../components/PageCount";
import { getHelperInfoThunk, getOffersThunk, setActivePage, setFilters } from "../store/slices/shopSlice";
import style from "../style/pages/Shop.module.scss"
import Loader from "../UI/loader/Loader";
import Filters from "../components/Filters";
import NoImgLoader from "../UI/loader/NoImgLoader";
import UpBtn from "../components/UpBtn";
const Shop = () => {
    const dispatch = useDispatch()

    const shop = useSelector((state)=>{
        return state.shop
    })

    useEffect(()=>{
        dispatch(getOffersThunk(shop.filters))
    },[shop.filters])

    useEffect(()=>{
        document.addEventListener("scroll",scrollHandler)
        return function(){
            document.removeEventListener("scroll",scrollHandler)
        }  
    })
    function scrollHandler(e){
        if(e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop + window.innerHeight)<100 && !shop.isShopLoading && !shop.isHelperInfoLoading){
            if(shop.helperInfo.pageCount > shop.filters.page){
                dispatch(setActivePage(shop.activePage+1))
                dispatch(setFilters({...shop.filters,page:shop.activePage+1}))
            }
        }
    }
    return(
        <div className={style.container}>
            <Filters/>
            <NoImgLoader isLoading={shop.offerList == true}>
                <div className={style.offerList}>
                    <OfferList offerList={shop.offerList}/>
                </div>
            </NoImgLoader>
            <Loader isLoading={shop.isShopLoading}/>
            <UpBtn/>
        </div>
    )
}
export default Shop