import React from 'react';
import {Container, InputGroup, Form, Button} from 'react-bootstrap';
import getMessagesOfCustomInput from './content/getMessagesOfCustomInput';

const CustomInput = ( {customMinutes, setCustomMinutes, customSeconds, setCustomSeconds, additionalTime, setAdditionalTime, processCustomGame, setCustomGameOK} ) => {

    const [messages, setMessages] = React.useState(getMessagesOfCustomInput());
    const [messageToDisplay, setMessageToDisplay] = React.useState("");
    
    React.useEffect(() => {
        let messageToDisplaySlice = {...messageToDisplay};

        if(isNaN(customMinutes) || isNaN(customSeconds) || isNaN(additionalTime)) {
            messageToDisplaySlice = messages[0].text;    
        } 
        else if(customMinutes < 1) {
            messageToDisplaySlice = messages[1].text;    
        } else if(customMinutes > 59 || customSeconds > 59 || additionalTime > 59) {
            if(customMinutes > 59) {
                setCustomMinutes(customMinutes.slice(0, customMinutes.length -1))
            } else if(customSeconds > 59) {
                setCustomSeconds(customSeconds.slice(0, customSeconds.length -1))
            } else if(additionalTime > 59) {
                setAdditionalTime(additionalTime.slice(0, additionalTime.length -1))
            }
        } else {
            messageToDisplaySlice = "";
        }
        setMessageToDisplay(messageToDisplaySlice)

    }, [customMinutes, customSeconds, additionalTime]);

    React.useEffect(() => {
        if(messageToDisplay.length > 0) {
            setCustomGameOK(false);
        } else {
            setCustomGameOK(true);
        }
    }, [messageToDisplay]);

    return  <>
                <Container className="CustomInputContainer">
                    <InputGroup className="mb-3">
                        <InputGroup.Text className="CustomInputTitle" id="basic-addon1">minutes</InputGroup.Text>
                        <Form.Control
                            className="CustomInput"
                            aria-label="minutes"
                            aria-describedby="basic-addon1"
                            value={customMinutes} 
                            onChange={e => {
                                setCustomMinutes(e.target.value)
                            }}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text className="CustomInputTitle" id="basic-addon1">seconds</InputGroup.Text>
                        <Form.Control
                            className="CustomInput"
                            aria-label="seconds"
                            aria-describedby="basic-addon1"
                            value={customSeconds} 
                            onChange={e => {
                                setCustomSeconds(e.target.value)
                            }}
                        />
                    </InputGroup>
                    <hr />
                    <InputGroup className="mb-3">
                        <InputGroup.Text className="CustomInputTitle" id="basic-addon1">Additional time</InputGroup.Text>
                        <Form.Control
                            className="CustomInput"
                            aria-label="Additional time"
                            aria-describedby="basic-addon1"
                            value={additionalTime} 
                            onChange={e => {
                                setAdditionalTime(e.target.value)
                            }}
                        />
                    </InputGroup>
                    <Button className="ValidateCustomGameButton" onClick={processCustomGame}>
                        Valider
                    </Button>
                    
                </Container>
                <Container className="CustomInputAlert">
                    {
                        messageToDisplay.length > 0 ?
                             <p>{messageToDisplay}</p>
                                : <></>
                    }
                </Container> 
            </>

}

export default CustomInput;