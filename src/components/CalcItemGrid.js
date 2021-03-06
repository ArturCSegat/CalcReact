
import React, {useState, useEffect} from "react"
import CalcItem from "./CalcItem"
import DelItem from "./CalcItemDel"

const CalcItemGrid = (props) => {

    return (
         /* Not Particularly pretty code but allows me to customize the styles(stl) of each button, there's probably a better way to do this but I dont really care */
        <div className="w-fit grid palce items-center grid-cols-4 gap-2">
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="0" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="1" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="2" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="3" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="4" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="5" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="6" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="7" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="8" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-purple-400 w-32 h-32"} value="9" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-green-400 w-32 h-32"} value="+" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-green-400 w-32 h-32"} value="-" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-green-400 w-32 h-32"} value="/" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-green-400 w-32 h-32"} value="*" handleClick={props.handleClick}/>
            <CalcItem stl={"text-4xl align-center rounded-full bg-blue-400 w-32 h-32"} value="=" handleClick={props.handleClick}/>
            <DelItem stl={"text-4xl align-center rounded-full bg-red-400 w-32 h-32"} delItem={props.delItem}/>
        </div>

       
    )

}


export default CalcItemGrid