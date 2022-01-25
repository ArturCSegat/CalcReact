<<<<<<< HEAD
import React, {useState} from "react"
import CalcItemGrid from './CalcItemGrid'

const Render = (props) => {

    const [text, setText] = useState("")

    const handleClick = (button_value) => {
        
        if (button_value === "=") {
            props.calculate(text);
            setText(props.result);
        }
        else {
            setText((prevText) => prevText.concat(button_value));
        }
        
       
    }

    const delItem = () => {
        let delled_text = text.slice(0, -1);
        setText(delled_text)
        }


    return(
        <div className="bg-slate 500">
            <div className="h-32 w-128 border-1 border border-black text-9xl">{text}</div>
            <CalcItemGrid handleClick={handleClick} delItem={delItem}/>
        </div>
    )
}

=======
import React, {useState} from "react"
import CalcItemGrid from './CalcItemGrid'

const Render = (props) => {

    const [text, setText] = useState("")

    const handleClick = (button_value) => {
        
        if (button_value === "=") {
            props.calculate(text);
            setText(props.result);
        }
        else {
            setText((prevText) => prevText.concat(button_value));
        }
        
       
    }

    const delItem = () => {
        let delled_text = text.slice(0, -1);
        setText(delled_text)
        }


    return(
        <div className="bg-slate 500">
            <div className="h-32 w-128 border-1 border border-black text-9xl">{text}</div>
            <CalcItemGrid handleClick={handleClick} delItem={delItem}/>
        </div>
    )
}

>>>>>>> f829754bed9ef52b92f14fca7e455a2c446a729f
export default Render