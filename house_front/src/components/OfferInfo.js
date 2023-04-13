import React from "react";
import Slider from "../UI/slider/slider";
import style from '../style/components/OfferInfo.module.scss'
import MapComponent from "./MapComponent";
import pricePritier from "../utils/pricePritierFunction";
const OfferInfo = (props) => {
    const offerInfo = props.offerInfo
    let arrayValues = [{
        icon: 'https://www.engelvoelkers.com/webinnovation-frontend-resources/images/Icon_LivingSpace.svg',
        value:offerInfo.living_area_square !== 1 ? `${offerInfo.living_area_square} m²` : `On request`,
    },
    {
        icon: 'https://www.engelvoelkers.com/webinnovation-frontend-resources/images/Icon_Price.svg',
        value:offerInfo.price !== 1 ? `${ pricePritier( offerInfo.price)} CZK` : `On request`
    }]
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
                    {offerInfo.description.main}
                </div>

           </div>
           {offerInfo.description.additional_information != ""
           ?
           <><div className={style.line_border}></div>
            <div className={style.description}>
                <div className={style.description_h}>
                    FACTS
                </div>
                <div className={style.description_text}>
                    {offerInfo.description.additional_information}
                </div>
           </div></>
           :
           <></>}
           <div className={style.line_border}></div>
                <div className={style.images}>
                    <MapComponent center={{latitude:offerInfo.coordinates.latitude,longitude:offerInfo.coordinates.longitude}} />
                </div>
            </div>
    )
}
export default OfferInfo