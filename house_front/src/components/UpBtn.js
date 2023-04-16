import React, { useEffect, useState } from "react";
import style from "../style/components/UpBtn.module.scss";
const UpBtn = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
        }
    })

    function scrollHandler(e) {
        if (e.target.documentElement.scrollTop > window.innerHeight && !isActive) {
            setIsActive(true)
        }
        if (e.target.documentElement.scrollTop < window.innerHeight && isActive) {
            setIsActive(false)
        }
    }
    return (
        <div>
            <input
                type={"button"}
                value={"UP"}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }}
                className={isActive ? `${style.upBtn} ${style.active}` : style.upBtn}
            />
        </div>
    )
}
export default UpBtn