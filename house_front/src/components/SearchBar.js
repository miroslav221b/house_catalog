import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setFilters } from "../store/slices/shopSlice";
import style from "../style/components/SearchBar.module.scss"

const  SearchBar = () => {

    const dispatch = useDispatch()

    const [searchInput, setSearchInput] = useState("")

    const filters = useSelector((state)=>{
        return state.shop.filters
    })
    

    function onFind (event){
        event.preventDefault();
        dispatch(setActivePage(1))
        dispatch(setFilters({...filters, "search":searchInput, "page":1}))
    }

    return(<form onSubmit={onFind} className={style.form}>
        <input
            type={"text"}
            value={searchInput}
            onChange={(e)=>{setSearchInput(e.target.value)}}
            placeholder={"enter location"}
            className={style.input}

        />
        <input
            type={"submit"}
            className={style.icon}
            value={""}
        />
    </form>)
}
export default SearchBar