import React, { useEffect, useRef, useState } from "react";
import style from "../style/components/Filter.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setFilters } from "../store/slices/shopSlice";
const Filter = ({ filterSeting, optionList, secFilterSeting, name }) => {

    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState({ name })

    const dispatch = useDispatch()
    let menuRef = useRef()
    const filters = useSelector((state) => {
        return state.shop.filters
    })

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsActive(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })
    // useEffect(()=>{
    //     console.log([filters.filterSeting,selected.value ])
    //     if(filters.filterSeting != selected.value || filters.secFilterSeting != selected.secFilterSeting){
    //         setSelected({name})
    //     }
    // },[filters])
    function onItemClick(item) {

        setSelected(item)
        setIsActive(!isActive)
        dispatch(setActivePage(1))

        let newFilters = { ...filters, page: 1 }
        item.value ? newFilters[filterSeting] = item.value : delete newFilters[filterSeting]
        item.secValue ? newFilters[secFilterSeting] = item.secValue : delete newFilters[secFilterSeting]

        dispatch(setFilters(newFilters))
    }
    return (
        <div className={style.filter} ref={menuRef}>
            <div className={isActive ? `${style.filter_btn_active} ${style.filter_btn}` : style.filter_btn} onClick={() => { setIsActive(!isActive) }}>
                {!filters.hasOwnProperty(filterSeting) && !filters.hasOwnProperty(secFilterSeting)  ? name : selected.name}
            </div>
            <div className={isActive ? `${style.filter_content} ${style.filter_content_active}` : style.filter_content}>
                {optionList.map((item) => {
                    if (item.name !== selected.name || !filters.hasOwnProperty(filterSeting)|| !filters.hasOwnProperty(secFilterSeting)) {
                        return (
                            <div onClick={() => { onItemClick(item) }} className={style.filter_item} key={item.name}>
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