import { Button } from 'react-bootstrap';
import {BiArrowBack} from 'react-icons/bi';

const ReturnButton = ( {goBack} ) => {

    let width = document.getElementsByClassName("App")[0].offsetWidth;

    return  <div className="LeftButtonsContainer">
                <Button className="ReturnButton" onClick={goBack}>
                    <div className="Icon"> 
                        <BiArrowBack /> {width > 450 ? "Go back" : ""}
                    </div>
                </Button>
            </div>
}

export default ReturnButton;