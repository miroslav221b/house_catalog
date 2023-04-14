import React from "react";
const NoImgLoader = (props) => {
    if(props.isLoading){
        return(<></>)
    }else{
        return(<>{props.children}</>)
    }
}
export default NoImgLoader