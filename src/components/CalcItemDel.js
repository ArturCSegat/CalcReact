
import React from "react"

const DelItem = (props) => {


    return (
        <button type="button" className={props.stl} onClick={() => {props.delItem()}}>Del</button> 
        /*Uses lambda anonymous funciton in onClick() so not to cause an infinite lop on render */
    )
}


export default DelItem