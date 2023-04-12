import React, { useEffect, useState } from "react";
import style from "../style/components/RefineSearch.module.scss"
import settingIcon from "../static/icons/Icon_Settings.svg"
import Modal from "../UI/modal/Modal";
import MultiRangeSlider from "../UI/MultiRangeSlider/MultiRangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { getHelperInfoThunk, setFilters } from "../store/slices/shopSlice";
import RefineSearchModal from "./RefineSearchModal";
import Loader from "../UI/loader/Loader";
const RefineSearch = () => {
    const [active , setActive] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getHelperInfoThunk())
    },[active])

    const helperInfo = useSelector((state)=>{
        return state.shop.helperInfo
    })
    const isHelperInfoLoading = useSelector((state)=>{
        return state.shop.isHelperInfoLoading
    })
    return(
        <div className={style.conteiner}>
            <div className={style.RefineSearch} onClick={()=>{
                setActive(true)
            }}>
                <img src={settingIcon} className={active ? `${style.settingIcon} ${style.settingIcon_active}` : style.settingIcon}/>
                <p className={style.label}>Price & Size</p>
            </div>
            <Modal active={active} setActive={setActive}>
                <Loader isLoading={isHelperInfoLoading}>
                    <RefineSearchModal setActive={setActive}  helperInfo={helperInfo}/>
                </Loader>
            </Modal>
        </div>
        
       
    )
}
export default RefineSearch