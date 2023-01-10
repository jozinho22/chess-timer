import { Button } from 'react-bootstrap';
import {RxUpdate} from 'react-icons/rx';

const PlayAgainButton = ( {playAgain} ) => {

    return  <div className="RightButtonsContainer">
                <Button className="PlayAgainButton" onClick={playAgain}><RxUpdate /></Button>
            </div>
}

export default PlayAgainButton;