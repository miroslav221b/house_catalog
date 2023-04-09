import React, { useState } from "react";
import style from "../style/components/SliderFilter.module.scss"
import DubleRange from "../UI/dubleRange/DubleRange";
const SliderFilter = ({filterSeting,secFilterSeting,name,min,max}) => {
    const [value,setValue] = useState([0,100])
    return(
        <DubleRange value={value} setValue={setValue} min={0} max={100}/>
    )
}
export default  SliderFilter