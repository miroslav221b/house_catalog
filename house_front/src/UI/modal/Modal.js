import React from "react";
import style from "./Modal.module.scss"
const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ?  `${style.modal} ${style.m_active}` :  `${style.modal}`} onClick={()=>{setActive(false)}}>
            <div className={active ?  `${style.c_active} ${style.modalConntent}` :  `${style.modalConntent}`} onClick={(e)=>{e.stopPropagation()}}>
                {children}
            </div>
        </div>
       
    )
}
export default Modal