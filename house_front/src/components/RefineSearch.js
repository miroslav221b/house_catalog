import React, { useState } from "react";
import style from "../style/components/RefineSearch.module.scss"
import settingIcon from "../static/icons/Icon_Settings.svg"
import Modal from "../UI/modal/Modal";
import SliderFilter from "./SliderFilter";
const RefineSearch = () => {
    const [active , setActive] = useState(false)
    return(
        <div className={style.conteiner}>
            <div className={style.RefineSearch} onClick={()=>{
                setActive(true)
                console.log(active)
            }}>
                <img src={settingIcon} className={active ? `${style.settingIcon} ${style.settingIcon_active}` : style.settingIcon}/>
                <p className={style.label}>Refine Search</p>
            </div>
            <Modal active={active} setActive={setActive}>
                <SliderFilter 
                    filterSeting={"fromLivingArea"} 
                    secFilterSeting={"toLivingArea"}
                    name={"Living Area"}
                    min={0}
                    max={100}
                />
            </Modal>
        </div>
        
       
    )
}
export default RefineSearch