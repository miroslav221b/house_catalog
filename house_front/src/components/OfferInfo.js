import React from "react";
import Slider from "../UI/slider/slider";
import style from '../style/components/OfferInfo.module.scss'
const OfferInfo = (props) => {
    const offerInfo = props.offerInfo
    let componentInfo;
    console.log(offerInfo)
    if(offerInfo.type === 'Apartment'){
        componentInfo = 
            <div className={style.container_info}>
                <div className={style.info}>
                    <div className={style.living_area_square}>
                        <div className={style.living_area_square_icon}></div>
                        <div className={style.living_area_square_text}>
                            {offerInfo.living_area_square} m²
                        </div>
                    </div>
                    <div className={style.price}>
                        <div className={style.price_icon}></div>
                        <div className={style.price_text}>
                            {offerInfo.price} {offerInfo.currency}
                        </div>
                    </div>
                </div>
                <div className={style.code}>
                        {offerInfo.description[" shoud_to_know "][0]}
                </div>
                <div className={style.line_border}></div>
                <div className={style.email}>
                    <div className={style.email_text}>REQUEST AN EXPOSÉ NOW</div>
                    <div className={style.email_button}>
                        More Info
                        <a className={style.link} href={offerInfo.link}></a>
                    </div>
                </div>
                <div className={style.shoud_to_know}>
                    <div className={style.shoud_to_know_h}>
                        WHAT YOU SHOULD KNOW ABOUT THIS APARTMENT
                    </div>
                    <div className={style.shoud_to_know_text}>
                        {offerInfo.description[" shoud_to_know "].map((item) => {
                            return(
                                <div className={style.shoud_to_know_text_options}>
                                    {item} •
                                </div>
                                )
                            })}
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
            </div>
    } else{
        componentInfo = 
        <div className={style.container_info}>
            <div className={style.info}>
                <div className={style.living_area_square}>
                    <div className={style.living_area_square_icon}></div>
                    <div className={style.living_area_square_text}>
                        {offerInfo.living_area_square} m²
                    </div>
                </div>
                <div className={style.price}>
                    <div className={style.price_icon}></div>
                    <div className={style.price_text}>
                        {offerInfo.price} {offerInfo.currency}
                    </div>
                </div>
            </div>
            <div className={style.code}>
                    {offerInfo.description[" shoud_to_know "][0]}
            </div>
            <div className={style.line_border}></div>
            <div className={style.email}>
                <div className={style.email_text}>REQUEST AN EXPOSÉ NOW</div>
                <div className={style.email_button}>
                    More Info
                    <a className={style.link} href={offerInfo.link}></a>
                </div>
            </div>
            <div className={style.shoud_to_know}>
                <div className={style.shoud_to_know_h}>
                    WHAT YOU SHOULD KNOW ABOUT THIS APARTMENT
                </div>
                <div className={style.shoud_to_know_text}>
                    {offerInfo.description[" shoud_to_know "].map((item) => {
                        return(
                            <div className={style.shoud_to_know_text_options}>
                                {item} •
                            </div>
                            )
                        })}
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
        </div>
    }
    return(
           <div className={style.container}>
                    <img className={style.images} src={offerInfo.images[0]}></img>
                    <div className={style.name}>{offerInfo.name}</div>
                    <div className={style.reason_with_location}>
                        {offerInfo.type}, {offerInfo.buy_or_rent} | {offerInfo.location}
                    </div>
                    {componentInfo}
            </div>
    )
}
export default OfferInfo