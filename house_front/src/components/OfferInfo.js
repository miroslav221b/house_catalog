import React from "react";
import Slider from "../UI/slider/slider";
import style from '../style/components/OfferInfo.module.scss'
import Loader from "../UI/loader/Loader";
import Map from "./MapComponent";
const OfferInfo = (props) => {

    let arrayValues = []
    const offerInfo = props.offerInfo
    console.log(offerInfo)
    arrayValues.push({
        icon: 'https://www.engelvoelkers.com/webinnovation-frontend-resources/images/Icon_LivingSpace.svg',
        value: `${offerInfo.living_area_square} m²`,
    },
    {
        icon: 'https://www.engelvoelkers.com/webinnovation-frontend-resources/images/Icon_Price.svg',
        value: `${offerInfo.price} ${offerInfo.currency}`
    }
    )
    return(
           <div className={style.container}>
                    <div className={style.images}>
                        <Slider images={offerInfo.images}/>
                    </div>
                    <div className={style.name}>{offerInfo.name}</div>
                    <div className={style.reason_with_location}>
                        {offerInfo.type}, {offerInfo.buy_or_rent} | {offerInfo.location}
                    </div>
                    <div className={style.container_info}>
            <div className={style.info}>
                {arrayValues.map((item)=>{
                    return(
                        <div className={style.attribute}>
                            <img src={item.icon} className={style.icon}></img>
                            <div className={style.value}>
                                {item.value}
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className={style.code}>
                    {offerInfo.description[" shoud_to_know "][0]}
            </div>
            <div className={style.line_border}></div>
            <div className={style.email}>
                <div className={style.description_h}>REQUEST AN EXPOSÉ NOW</div>
                <div className={style.email_button}>
                    <a className={style.link} href={offerInfo.link}>
                        More Info
                    </a>
                </div>
            </div>
            <div className={style.line_border}></div>
            <div className={style.description}>
                <div className={style.description_h}>
                    EQUIPMENT AND SPECIAL FEATURES OF THIS APARTMENT
                </div>
                <div className={style.description_text}>
                    {offerInfo.description["advanced info"]}
                </div>

           </div>
           <div className={style.line_border}></div>
                <div className={style.images}>
                    <Map center={{latitude:50.45000100,longitude:30.52333300}} />
                </div>
            </div>
    )
}
export default OfferInfo