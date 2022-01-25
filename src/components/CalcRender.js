import React, {useState} from "react"
import CalcItemGrid from './CalcItemGrid'

const Render = (props) => {

    const [text, setText] = useState("")  // defines the text label state variable

    //will be called by every button(exept the del one) on click
    const handleClick = (button_value) => { 
        
        // handles the logic for the "=" to end the calculation, could be a separate function called on CalcItemGrid.js instead but wouldnt realy make a diffrence
        if (button_value === "=") {
            props.calculate(text); //reason to my suspicions about the definition of calculate() in CalcContainer.js
            setText(props.result); // due to the async nature of "props", "result" hasnt had its value updated yet so this is the same as "setText("");" may be fixable with some async await, TODO?
        }
        else {
            setText((prevText) => prevText.concat(button_value)); // appends the value of the pressed buttoon the label text
        }
        
       
    }

    const delItem = () => { // hadles logic for the del button, requires the definition of a new variable because .slice creates a new object instead of editing the passed one
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


export default Render