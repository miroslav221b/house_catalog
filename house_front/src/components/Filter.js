import React, { useState } from "react";
import style from "../style/components/Filters.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setFilters } from "../store/slices/shopSlice";
const Filter = ({filterSeting,optionList,secFilterSeting,name}) => {
    const [selected, setSelected] = useState({name})
    const [isActive, setIsActive] = useState(false)

    const filters = useSelector((state)=>{
        return state.shop.filters
    })
    const dispatch = useDispatch()
    function onItemClick(item){

        setSelected(item)
        setIsActive(!isActive)
        dispatch(setActivePage(1))

        let newFilters = {...filters,page:1}
        item.value ? newFilters[filterSeting]=item.value  : delete newFilters[filterSeting]
        item.secValue ? newFilters[secFilterSeting]=item.secValue : delete newFilters[secFilterSeting]
        console.log(newFilters)
        
        dispatch(setFilters(newFilters))
    }
    return(
        <div className={style.filter}>
            <div className={isActive ? `${style.filter_btn_active } ${style.filter_btn}`: style.filter_btn} onClick={()=>{setIsActive(!isActive)}}>
                {selected.name}
            </div>
            <div className={isActive ?`${style.filter_content} ${style.filter_content_active}` : style.filter_content}>
                {optionList.map((item)=>{
                    if(item.name !== selected.name){
                        return(
                            <div onClick={()=>{onItemClick(item)}} className={style.filter_item}>
                                {item.name}
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default Filter