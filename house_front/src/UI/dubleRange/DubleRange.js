import React from "react";
import style from "./DubleRange.module.scss"
import ReactSlider from "react-slider";
const DubleRange = ({value,setValue , max , min}) => {
  return( <ReactSlider
    className={style.slider}
    thumbClassName={style.tumb}
    trackClassName={style.track}
    defaultValue={[min, max]}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={5}
/>)
    
}
export default DubleRange