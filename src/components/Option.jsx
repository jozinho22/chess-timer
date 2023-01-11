import React from 'react';
import {Button} from 'react-bootstrap';
import EnumViewTypes from './content/EnumViewTypes';


const Option = ( {data, choose, viewType} ) => {
    
    return  <>
                <Button className="OptionButton" onClick={() => choose(data.id)}>
                    {viewType === EnumViewTypes.GAME_TYPE ? data.type : data.duration + (data.additionalTime > 0 ? " | " + data.additionalTime: "")}
                </Button>
            </>

}

export default Option;