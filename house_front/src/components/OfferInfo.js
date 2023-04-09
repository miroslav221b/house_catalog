import React from "react";
import Slider from "../UI/slider/slider";
const OfferInfo = (props) => {
    const offerInfo = props.offerInfo
    return(
           <div>
                    <Slider images={offerInfo.images}/>
                    {offerInfo.description[" shoud_to_know "].map((item)=>{
                        return (<div key={item}>{item}</div>)
                    })}
                    <p>
                    {offerInfo.description["advanced info"]}
                    </p>
                    <p>{offerInfo.price} {offerInfo.currency}</p>
                    <a href={offerInfo.link}>more info</a>
            </div>
    )
}
export default OfferInfo