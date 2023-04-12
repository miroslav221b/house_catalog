import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setFilters } from "../store/slices/shopSlice";
import style from "../style/components/PageCount.module.scss"
const PageCount = (props) => {

    const dispatch = useDispatch()

    const filters = useSelector((state)=>{
        return state.shop.filters
    })

    const activePage = useSelector((state)=>{
        return state.shop.activePage
    })

    let pages = []

    for(let i = 1; i <= props.pages ; i++){
        if(i==1 || i==activePage-1 || i==activePage || i==activePage+1 || i==props.pages){
            pages.push(i)
        }else if(i==activePage-2 || i==activePage+2){
            pages.push("...")
        }
    }

    return(
        <div className={style.container}>
           {pages.map((item,index)=>{
            if(item == activePage){
                return( 
                    <div className={style.activePage} key={index}>
                        <div className={style.activePage_value}>{item}</div>
                    </div>
                    )
            }else if(typeof(item) === "string"){
                return( 
                    <div className={style.dots} key={index}>
                        <div className={style.dots_text}>...</div>
                    </div>
                    )
            }else{
                return( 
                    <div 
                        key={index}
                        className={style.nonActivePage}
                        onClick={()=>{  dispatch(setActivePage(item)) 
                                        dispatch(setFilters({...filters,page:item}))}}
                        > 
                            {item}
                    </div>
                    )
            }})}
        </div>
    )
}
export default PageCount