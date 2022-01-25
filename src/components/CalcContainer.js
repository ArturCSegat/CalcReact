import React, {useReducer, useState} from 'react' 
import Render from "./CalcRender"
import {ops} from "./Constants"

// This file handles most of the logic arund getting the values for the "calculations"]
// I didnt write calculatorReducer but ill try my best to explain it

// it takes two values, the previous state of the component (in our case that would be the values of result and toEvaluate wich are both "") and string to evaluate
//being the string inside the label
const calculatorReducer = (state, stringToEvaluate) => {

       
        const operationUsed = Object.keys(ops).find((op) => //This part is suposed to find the first of the ops(operatrs defined in Constants.js) in the string, this will be used to calculate
            stringToEvaluate.includes(op)                  
        );
        const operands = stringToEvaluate.split(operationUsed); // uses the operator found to split the string creating an array where each value is a number in between 'operatinUsed"s
        console.log(operands); // debug log

        const first = Number(operands[0]);
        const second = Number(operands[1]);

        return {  // changes the state to the correct values
            ...state,
            toEvaluate: stringToEvaluate,
            result: ops[operationUsed](first, second)
        };
}

const App = () => {

    const [{toEvaluate, result}, calculate] = useReducer(calculatorReducer, { // this part is quite confusing for me, but I think it calls sets the values of result and toEvaluate to "" on start up
        toEvaluate: "",                                                       // as well as setting calculate too calculator reducer passing {toEvaluate, result} as state and leaves the parameter
        result: ""                                                            // empty so to put the label text later inm Render.js
    });

    return (
        <div className=' h-screen flex items-center justify-center flex-col'>
            <Render result={result} calculate={calculate}/>    
        </div>
    )
}


export default App