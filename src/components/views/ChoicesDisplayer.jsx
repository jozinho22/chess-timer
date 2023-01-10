import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import EnumViewTypes from "../content/EnumViewTypes";
import Option from '../Option';
import ReturnButton from '../ReturnButton';

const ChoicesDisplayer = ( {user, setUser, viewType, gameTypes, setGameTypes, setViewType, setInGame} ) => {

    const [customMinutes, setCustomMinutes] = React.useState(10);
    const [customSeconds, setCustomSeconds] = React.useState(0);
    const [additionalTime, setAdditionalTime] = React.useState(5);

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

    const processCustomGame = () => {
        var gamesTypesSlice = [...gameTypes];
        console.log(gamesTypesSlice[gamesTypesSlice.length - 1])
        gamesTypesSlice[gamesTypesSlice.length - 1].times = [
            {
                id: 0,
                duration: parseInt(customMinutes),
                durationInSeconds: parseInt(customSeconds),
                additionalTime: parseInt(additionalTime)
            }
        ]

        setGameTypes(gamesTypesSlice);
        var u = {...user};
        u.choices.push(0);
        setUser(u);
        next();
    }

    return  <>
                <Container className="ChoicesDisplayerContainer">
                    <div className="ChoicesTitle">
                    {
                        viewType === EnumViewTypes.GAME_TYPE ?
                            <p>Choose the type of game </p> 
                                :   <p>Choose the duration </p>        
                    }
                    </div>
                    <div className="ChoicesContainer">
                    {
                        user.choice === gameTypes[gameTypes.length - 1].id && viewType === EnumViewTypes.GAME_DURATION?
                            <Container className="CustomInputContainer">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="CustomInputTitle" id="basic-addon1">minutes</InputGroup.Text>
                                    <Form.Control
                                        className="CustomInput"
                                        aria-label="minutes"
                                        aria-describedby="basic-addon1"
                                        value={customMinutes} 
                                        onChange={e => {
                                            setCustomMinutes(e.target.value)
                                        }}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="CustomInputTitle" id="basic-addon1">seconds</InputGroup.Text>
                                    <Form.Control
                                        className="CustomInput"
                                        aria-label="seconds"
                                        aria-describedby="basic-addon1"
                                        value={customSeconds} 
                                        onChange={e => {
                                            setCustomSeconds(e.target.value)
                                        }}
                                    />
                                </InputGroup>
                                <hr />
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="CustomInputTitle" id="basic-addon1">Additional time</InputGroup.Text>
                                    <Form.Control
                                        className="CustomInput"
                                        aria-label="Additional time"
                                        aria-describedby="basic-addon1"
                                        value={additionalTime} 
                                        onChange={e => {
                                            setAdditionalTime(e.target.value)
                                        }}
                                    />
                                </InputGroup>
                                <Button className="ValidateCustomeGameButton" onClick={processCustomGame}>
                                    Valider
                                </Button>
                            </Container>
                                :   getDataToMap(user.choice).map(data => {
                                        return <Option
                                                    key={data.id} 
                                                    data={data} 
                                                    choose={choose}
                                                    viewType={viewType} />
                                    })
                    }
                    </div>
                    {
                        viewType !== EnumViewTypes.GAME_TYPE ?
                            <ReturnButton goBack={goBack} />
                                : <></>
                    }

                </Container>
            </>

}

export default ChoicesDisplayer;