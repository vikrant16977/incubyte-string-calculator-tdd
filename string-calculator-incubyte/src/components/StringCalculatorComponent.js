import React,{use, useState} from "react";
import { add } from "../utils/stringCalculatorLogic";
import "semantic-ui-css/semantic.min.css";
import { Button, TextArea, Container, Header, Message } from "semantic-ui-react";

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
        <Container textAlign="center" style={{ padding: "20px" }}>
            <Header as="h1">String Calculator</Header>
            <TextArea
                placeholder="Enter your string here"
                value={stringInput}
                onChange={(e) => {e.preventDefault();
                    setStringInput(`${e.target.value}`)}}
                style={{ marginBottom: "10px", padding: "10px", width: "80%" }}
            />
            <br />
            <Button
                primary
                onClick={handleSum}
                style={{
                    marginTop: "10px",
                }}
            >
                Calculate
            </Button>
            {result && (
                <Message style={{ marginTop: "20px", fontSize: "18px" }}>
                    {result}
                </Message>
            )}
        </Container>
    );

}

export default StringCalculatorComponent    ;
