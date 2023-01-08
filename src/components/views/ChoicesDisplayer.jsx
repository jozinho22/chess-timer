import React from 'react';
import { Button, Container } from 'react-bootstrap';
import EnumViewTypes from "../content/EnumViewTypes";
import Option from '../Option';

const ChoicesDisplayer = ( {user, setUser, viewType, gameTypes, setViewType, setInGame} ) => {

    const choose = (id) => {
        var u = {...user};
        u.choice = id;
        if(viewType === EnumViewTypes.GAME_TYPE) {
            u.choices = [];
        }
        u.choices.push(id);
        setUser(u);
        next();
    }

    const next = () => {
        if(viewType === EnumViewTypes.GAME_TYPE) {
            setViewType(EnumViewTypes.GAME_DURATION)
        } else {
            setInGame(true)
        } 

    }

    const goBack = () => {
        if(viewType === EnumViewTypes.GAME_DURATION) {
            setViewType(EnumViewTypes.GAME_TYPE)
            user.choices.pop();
        } /* else {
            setViewType(EnumViewTypes.GAME_DURATION)
        }  */
        
        console.log(user.choices)
    }

    const getDataToMap = (chosen) => {
        if(viewType === EnumViewTypes.GAME_TYPE) {
            return gameTypes;
        } else if(viewType === EnumViewTypes.GAME_DURATION) {
            var list = []
            for(var g of gameTypes) {
                if(g.id === chosen) {
                    list.push(g)
                }
            }
            return list[0].times;
        }
    }

    return  <>
                {
                    viewType === EnumViewTypes.GAME_TYPE ?
                        <p className="OptionTitle">Choose the type of game </p> 
                            :   <p className="OptionTitle">Choose the duration </p>        
                }
                
                {
                    getDataToMap(user.choice).map(data => {
                        return <Option
                                    key={data.id} 
                                    data={data} 
                                    choose={choose}
                                    viewType={viewType} />
                    })
                }
                {
                    viewType !== EnumViewTypes.GAME_TYPE ?
                        <Container className="SideButtonsContainer">
                            <Button className="ReturnButton" onClick={goBack}>Go back</Button>
                        </Container>
                            : <></>
                }

            </>

}

export default ChoicesDisplayer;