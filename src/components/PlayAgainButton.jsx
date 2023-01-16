import { Button } from 'react-bootstrap';
import {RxUpdate} from 'react-icons/rx';

const PlayAgainButton = ( {playAgain} ) => {

    let width = document.getElementsByClassName("App")[0].offsetWidth;

    return  <Button className="PlayAgainButton" onClick={playAgain}>  
                <div className="Icon"> 
                    <RxUpdate /> {width > 450 ? "Reload" : ""}
                </div>
            </Button>
            
}

export default PlayAgainButton;