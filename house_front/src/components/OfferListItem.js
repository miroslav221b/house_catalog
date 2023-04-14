import React from "react";
import { Link } from "react-router-dom";
import style from "../style/components/OfferListItem.module.scss"
import { ROUTES } from "../utils/consts";
import pricePritier from "../utils/pricePritierFunction";
const OfferListItem = (props) => {
    return(
        <Link to={`${ROUTES.OFFER}/${props.offer._id}`}>
            <div className={style.list_item}>
                
                    <img src={props.offer.images[0]} className={style.list_item_image}/>

                    <div className={style.list_item_name}>
                        {props.offer.name}
                    </div> 

                    <div className={style.list_item_location}>
                        {props.offer.location }
                    </div>

                    <div className={style.list_item_line_border}></div>

                    <div className={style.list_item_living_area_square}>

                        <div className={style.list_item_living_area_square_icon}></div>

                        <div className={style.list_item_living_area_square_text}>
                            {props.offer.living_area_square!== 1 ? props.offer.living_area_square : "On request" }
                        </div>

                    </div>

                    <div className={style.list_item_price}>
                        <div className={style.list_item_price_text}>Price</div>
                        <div className={style.list_item_price_value}>{props.offer.price!== 1 ?`${pricePritier( props.offer.price)} CZK`: "On request" }</div>
                    </div>
                    
            </div>
        </Link>
    )

}
export default OfferListItem