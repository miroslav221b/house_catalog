import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MultiRangeSlider from "../UI/MultiRangeSlider/MultiRangeSlider";
import { setFilters } from "../store/slices/shopSlice";
import style from '../style/components/RefineSearch.module.scss'
const RefineSearchModal = ({ helperInfo, setActive }) => {

    const dispatch = useDispatch()

    const filters = useSelector((state) => {
        return state.shop.filters
    })
    function onSubmit(event) {
        event.preventDefault();
        let newFilter = { ...filters, "page": 1 }

        newFilter.topLiving_area_square = LivingArea[1]
        newFilter.lowLiving_area_square = LivingArea[0]

        newFilter.topPrice = price[1]
        newFilter.lowPrice = price[0]


        setActive(false)
        dispatch(setFilters(newFilter))
    }
    function onDelete() {
        let newFilter = { ...filters, "page": 1 }

        delete newFilter.topLiving_area_square
        delete newFilter.lowLiving_area_square

        delete newFilter.topPrice
        delete newFilter.lowPrice
        setActive(false)
        dispatch(setFilters(newFilter))
    }
    let LivingArea = [helperInfo.lowLiving_area_square, helperInfo.topLiving_area_square]
    let price = [helperInfo.lowPrice, helperInfo.topPrice]
    return (
        <form onSubmit={onSubmit} className={style.container}>

            <div>
                <p className={style.title}>Living area</p>
                <MultiRangeSlider
                    min={helperInfo ? helperInfo.lowLiving_area_square - 1 : 0}
                    max={helperInfo ? helperInfo.topLiving_area_square + 1 : 0}
                    onChange={({ min, max }) => {
                        LivingArea[0] = min
                        LivingArea[1] = max
                    }} />
            </div>
            <div>
                <p className={style.title}>{`Price (CZK)`}</p>
                <MultiRangeSlider
                    min={helperInfo ? helperInfo.lowPrice - 1 : 0}
                    max={helperInfo ? helperInfo.topPrice + 1 : 0}
                    onChange={({ min, max }) => {
                        price[0] = min
                        price[1] = max
                    }} />
            </div>
            <div className={style.buttons}>
                <input className={style.button}
                    type={"button"}
                    value={"Clear"}
                    onClick={onDelete}
                />
                <input className={style.button}
                    type={"submit"}
                    value={"Search"}
                />
            </div>
        </form>

    )
}
export default RefineSearchModal