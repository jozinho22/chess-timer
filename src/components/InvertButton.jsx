import { Container } from 'react-bootstrap';
import {ArrowDownUp} from 'react-bootstrap-icons';

const InvertButton = ( {invert, running, reInit} ) => {


    return  <Container className="InvertButton"> 
                <div className="Icon">
                    <ArrowDownUp
                        className={`${running || !(!running && reInit ) ? "Hidden" : ""}`} 
                        onClick={invert} /> 
                </div>
            </Container>
}

export default InvertButton;