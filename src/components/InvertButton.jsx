import { Container } from 'react-bootstrap';
import {HiSwitchVertical} from 'react-icons/hi';

const InvertButton = ( {invert, running, reInit} ) => {


    return  <Container className="InvertButton"> 
                <div className="Icon">
                    <HiSwitchVertical 
                        className={`${running || !(!running && reInit ) ? "Hidden" : ""}`} 
                        onClick={invert} /> 
                </div>
            </Container>
}

export default InvertButton;