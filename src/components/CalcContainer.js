import React, {useReducer, useState} from 'react' 
import Render from "./CalcRender"
import {ops} from "./Constants"

const calculatorReducer = (state, stringToEvaluate) => {

       
        const operationUsed = Object.keys(ops).find((op) =>
            stringToEvaluate.includes(op)
        );
        const operands = stringToEvaluate.split(operationUsed);
        console.log(operands);

        const first = Number(operands[0]);
        const second = Number(operands[1]);

        return {
            ...state,
            toEvaluate: stringToEvaluate,
            result: ops[operationUsed](first, second)
        };
}

const App = () => {

    const [{toEvaluate, result}, calculate] = useReducer(calculatorReducer, {
        toEvaluate: "",
        result: ""
    });

    return (
        <div className=' h-screen flex items-center justify-center flex-col'>
            <Render result={result} calculate={calculate}/>
            <div>{toEvaluate}</div>
            <div>{result}</div>
        </div>
    )
}

export default App