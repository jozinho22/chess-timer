import React from 'react';
import {Button} from 'react-bootstrap';
import EnumViewType from './content/EnumViewType';


const Option = ( {data, choose, viewType} ) => {
    
    return  <>
                <Button className="OptionButton" onClick={() => choose(data.id)}>
                    {viewType === EnumViewType.GAME_TYPE ? data.type : data.duration + (data.additionalTime > 0 ? " | " + data.additionalTime: "")}
                </Button>
            </>

}

export default Option;