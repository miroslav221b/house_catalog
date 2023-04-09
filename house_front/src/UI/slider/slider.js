import React from "react";
import style from "./slider.module.scss"
const Slider = (props) => {
    let minus = 100
    let imagesContainerStyle = {
        left:"-" +  minus  + "px"
    }

    return(
        <div className={style.container}>
          <button onClick={()=>{
            imagesContainerStyle.left = "-" +  minus + 300  + "px"
          }}>{">"}</button>
            <div className={style.imagesContainer} style={imagesContainerStyle} >
                {props.images.map((item)=>{
                   return <img src={item} key={item}/>
                })}
            </div>
           
        </div>
    )
}
export default Slider