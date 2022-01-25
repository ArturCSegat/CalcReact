import React from "react"

const DelItem = (props) => {


    return (
        <button type="button" className={props.stl} onClick={() => {props.delItem()}}>Del</button>
    )
}

export default DelItem