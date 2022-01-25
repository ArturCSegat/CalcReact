
import React from "react"

const CalcItem = (props) => {


    return (
        <button type="button" className={props.stl} onClick= {() => {props.handleClick(props.value)}}>{props.value}</button>
        /*Uses lambda anonymous funciton in onClick() so not to cause an infinite lop on render */
    )
}


export default CalcItem