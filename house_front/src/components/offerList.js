import React from "react";
import OfferListItem from "./OfferListItem";
import style from "../style/components/OfferList.module.scss"
const OfferList = (props) => {
    return (
        <div className={style.container}>
            {props.offerList.map((item) => {
                return <OfferListItem offer={item} key={item._id} />
            })}
        </div>
    )
}
export default OfferList