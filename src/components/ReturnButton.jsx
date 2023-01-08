
import { Button } from 'react-bootstrap';
import {BiArrowBack} from 'react-icons/bi';

const ReturnButton = ( {goBack} ) => {

    return  <div className="TopLeftButtonsContainer">
                <Button className="ReturnButton" onClick={goBack}>
                    <BiArrowBack />
                </Button>
            </div>
}

export default ReturnButton;