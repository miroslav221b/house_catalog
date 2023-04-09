import React from "react";
import logo from "../static/icons/logo.svg"
import style from "../style/components/Header.module.scss"
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/consts";
const Header = () => {
    return(
        <div className={style.container}>
            <div className={style.header}>
                <Link to={ROUTES.SHOP}>
                <img src={logo}/>
                </Link>
         </div>
        </div>
       
    )
}
export default Header