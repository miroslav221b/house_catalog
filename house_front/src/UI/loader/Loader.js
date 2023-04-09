import React from "react";
import style from "./Loader.module.scss"
import loadingGif from "../../static/icons/loadingGif.gif"
const Loader = (props) => {
    if(props.isLoading){
        return(
        <div className={style.loader}>
                <img src={loadingGif}/>
        </div>)
    }else{
        return(
            <>
            {props.children}
            </>
        )
    }
}
export default Loader