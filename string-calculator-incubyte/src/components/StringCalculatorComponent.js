import React,{use, useState} from "react";
import { add } from "../utils/stringCalculatorLogic";

function StringCalculatorComponent() {

    const [stringInput,setStringInput]=useState("")
    const [result,setResult]=useState("")

  const  handleSum=()=>{
        try {
            const output = add(stringInput);
            setResult(`Result: ${output}`);
        } catch (error) {
            setResult(error.message);
        }
    }

    return (
        <>
        <h1>String Calculator</h1>
        <input
                placeholder="Enter your string here"
                value={stringInput}
                onChange={(e) => setStringInput(e.target.value)}
               
            />
            <br />
        <button primary onClick={handleSum}>Calculate</button>
        {result && (
                <p style={{ marginTop: "20px", fontSize: "18px" }}>
                    {result}
                </p>
            )}
            </>
    )

}

export default StringCalculatorComponent    ;
