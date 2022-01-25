import React from "react"

const CalcItem = (props) => {


    return (
        <button type="button" className={props.stl} onClick= {() => {props.handleClick(props.value)}}>{props.value}</button>
    )
}

export default CalcItem