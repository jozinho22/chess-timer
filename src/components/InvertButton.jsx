import { Button } from 'react-bootstrap';
import {HiSwitchVertical} from 'react-icons/hi';

const InvertButton = ( {invert, running, endGame, reInit} ) => {

    let width = document.getElementsByClassName("App")[0].offsetWidth;

    return  <Button 
                className={`InvertButton ${running || endGame || !(!running && !endGame ) ? "SoftBlur" : ""}`} 
                disabled={running || endGame || !(!running && !endGame && reInit)}
                onClick={invert} >
                <div className="Icon"> 
                    <HiSwitchVertical /> {width > 450 ? "Invert" : ""}
                </div>         
            </Button>
}

export default InvertButton;