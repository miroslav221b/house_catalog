import React from "react";
import style from "./Loader.module.scss"
import loadingGif from "../../static/icons/loadingGif.gif"
const NoImgLoader = (props) => {
    if(props.isLoading){
        return(<></>)
    }else{
        return(<>{props.children}</>)
    }
}
export default NoImgLoader