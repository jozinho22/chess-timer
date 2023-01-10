import {Container, InputGroup, Form, Button} from 'react-bootstrap';

const CustomInput = ( {customMinutes, setCustomMinutes, customSeconds, setCustomSeconds, additionalTime, setAdditionalTime, processCustomGame} ) => {

    return <Container className="CustomInputContainer">
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
                <Button className="ValidateCustomeGameButton" onClick={processCustomGame}>
                    Valider
                </Button>
            </Container>

}

export default CustomInput;