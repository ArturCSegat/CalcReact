<<<<<<< HEAD
import React from "react"

const CalcItem = (props) => {


    return (
        <button type="button" className={props.stl} onClick= {() => {props.handleClick(props.value)}}>{props.value}</button>
    )
}

=======
import React from "react"

const CalcItem = (props) => {


    return (
        <button type="button" className={props.stl} onClick= {() => {props.handleClick(props.value)}}>{props.value}</button>
    )
}

>>>>>>> f829754bed9ef52b92f14fca7e455a2c446a729f
export default CalcItem