import { Container } from 'react-bootstrap';
import {HiSwitchVertical} from 'react-icons/hi';

const InvertButton = ( {invert, running, endGame, reInit} ) => {


    return  <Container className="InvertButton"> 
                <div className="Icon">
                    <HiSwitchVertical 
                        className={`${running || endGame || !(!running && !endGame && reInit ) ? "Hidden" : ""}`} 
                        onClick={invert} /> 
                </div>
            </Container>
}

export default InvertButton;