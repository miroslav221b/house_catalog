import React from "react";
import { useDispatch } from "react-redux";
import { setActivePage, setFilters } from "../store/slices/shopSlice";
import style from "../style/components/ClearFiltersButton.module.scss"
const ClearFiltersButton = () => {
    const dispatch = useDispatch()

    function OnClear(){
        dispatch(setActivePage(1))
        dispatch(setFilters({"page":1}))
    }
    return(
        <input 
            className={style.ClearFiltersButton}
            type={"button"}
            value={"clear filters"}
            onClick={OnClear}
        />
    )
}
export default ClearFiltersButton