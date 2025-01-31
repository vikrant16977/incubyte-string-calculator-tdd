import React,{ useState ,useEffect} from "react";
import { add } from "../utils/stringCalculatorLogic";
import "semantic-ui-css/semantic.min.css";
import { Button, TextArea, Container, Header, Message, Icon, Popup,Card } from "semantic-ui-react";

function StringCalculatorComponent() {

    const [stringInput,setStringInput]=useState("")
    const [result,setResult]=useState("")
    const [error, setError] = useState(null);
    const [loading, setLoading]= useState(false)



    useEffect(()=>{
        if(loading){
              const output = add(stringInput);
              setTimeout(()=>{setResult(`Result: ${output}`); setLoading(false);}, 3000);
             
        }
        
    },[loading])
  const  handleSum=()=>{
        try {
            setError(null);
            setLoading(true);
        } catch (error) {
            setResult("");
            setError(error.message);
             setLoading(false);
        }
    }
    const renderRulesCard = () => (
        
        <Card style={{ marginLeft:"left", marginTop: "20px", backgroundColor: "#f9f9f9", padding: "20px" ,width:'100%'}}>
            <Card.Content>
                <Card.Header style={{ color: "#2185d0", fontSize: "1.5em" }}>Rules for Valid Input</Card.Header>
                <Card.Description>
                    <ul style={{ textAlign: "left", lineHeight: "1.8em", marginTop: "10px" }}>
                        <li>Numbers must be separated by <strong>,</strong> or <strong>custom delimiter</strong>.</li>
                        <li>Custom delimiters must start with <strong>//</strong></li>
                        <li>Negative numbers are not allowed.</li>
                        <li>Numbers greater than 1000 are ignored.</li>
                    </ul>
                    <strong>Examples for Valid/Invalid Inputs:</strong>
                    <ul style={{ textAlign: "left", lineHeight: "1.8em", marginTop: "10px" }}>
                        <li><strong>Valid:</strong> 1,2,3</li>
                        <li><strong>Valid:</strong> 1\n2,3</li>
                        <li><strong>Valid:</strong> //[;]\n1;2;3</li>
                        <li><strong>Invalid:</strong> 1,,2\n</li>
                    </ul>
                </Card.Description>
            </Card.Content>
        </Card>
    );

    return (
        
        <div style={{
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
        }}>
         { 
        <Container textAlign="center" style={{ background: "#fff", borderRadius: "10px", padding: "30px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <Header as="h1" style={{ color: "#2185d0", fontSize: "3em", marginBottom: "20px" }}>String Calculator</Header>
            <Popup
          trigger={  <TextArea
                placeholder="Enter your string here (e.g., 1,2,3 or //;\n1;2)"
                value={stringInput}
                onChange={(e) =>
                    {setStringInput(`${e.target.value}`)
                setResult("")
            setError("")}}
                style={{ marginBottom: "10px", padding: "10px", width: "80%" }}
            />}
            content="You can use custom delimiters by starting with // followed by the delimiter and \n. For example: //;\n1;2"
                position="top center"/>
            <br />
         { loading?<Button  disabled={true}>Loading..</Button> : <Button
                primary
                onClick={handleSum}
                style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    fontSize: "1.2em",
                }}
            >
                 <Icon name="calculator" /> Calculate
            </Button>
}
            {result && (
                <Message positive style={{  marginTop: "20px", fontSize: "1.5em"  }}>
                     <Icon name="check circle" /> {result}
                </Message>
            )}
             {error && (
                <Message negative style={{ marginTop: "20px", fontSize: "1.5em" }}>
                    <Icon name="exclamation triangle" /> {error}
                </Message>
            )}
             {renderRulesCard()}
        </Container>
}
        </div>
        
    );

}

export default StringCalculatorComponent    ;
