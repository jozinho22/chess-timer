import React from 'react';
import { Container } from 'react-bootstrap';
import EnumViewType from "../content/EnumViewType";
import Option from '../Option';
import CustomInput from '../CustomInput';
import SideButton from '../SideButton';
import {BiArrowBack} from 'react-icons/bi';
import EnumButtonType from '../content/EnumButtonType';

const ChoicesDisplayer = ( {user, setUser, viewType, gameTypes, setGameTypes, setViewType, setInGame} ) => {

    const [customMinutes, setCustomMinutes] = React.useState(10);
    const [customSeconds, setCustomSeconds] = React.useState(0);
    const [additionalTime, setAdditionalTime] = React.useState(5);

    const choose = (id) => {
        var u = {...user};
        if(viewType === EnumViewType.GAME_TYPE) {
            u.choices = [];
        }
        u.choices.push(id);
        setUser(u);
        next();
    }

    const next = () => {
        if(viewType === EnumViewType.GAME_TYPE) {
            setViewType(EnumViewType.GAME_DURATION)
        } else {
            setInGame(true)
        } 

    }

    const goBack = () => {
        if(viewType === EnumViewType.GAME_DURATION) {
            setViewType(EnumViewType.GAME_TYPE)
            user.choices.pop();
        }  
    }

    const getDataToMap = (chosen) => {
        if(viewType === EnumViewType.GAME_TYPE) {
            return gameTypes;
        } else if(viewType === EnumViewType.GAME_DURATION) {
            var times = []
            for(var g of gameTypes) {
                if(g.id === chosen) {
                    times.push(g)
                }
            }
            console.log(times[0])
            return times[0].times;
        }
    }

    const processCustomGame = () => {
        var gamesTypesSlice = [...gameTypes];
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
                            viewType === EnumViewType.GAME_TYPE ?
                                <p>Choose the type of game </p> 
                                    :   <p>Choose the duration </p>        
                        }
                    </div>
                    <div className="ChoicesContainer">
                        {
                            user.choices && user.choices[0] === gameTypes[gameTypes.length - 1].id && viewType === EnumViewType.GAME_DURATION ?
                                <CustomInput 
                                    customMinutes={customMinutes}
                                    setCustomMinutes={setCustomMinutes} 
                                    customSeconds={customSeconds}
                                    setCustomSeconds={setCustomSeconds}
                                    additionalTime={additionalTime}
                                    setAdditionalTime={setAdditionalTime}
                                    processCustomGame={processCustomGame} />
                                    :   getDataToMap(
                                            viewType === EnumViewType.GAME_TYPE ?
                                                0 :
                                                    viewType === EnumViewType.GAME_DURATION ?
                                                        user.choices[0] : <></>)
                                        .map(data => {
                                            return <Option
                                                        key={data.id} 
                                                        data={data} 
                                                        choose={choose}
                                                        viewType={viewType} />
                                        })
                        }
                    </div>
                        {
                            viewType !== EnumViewType.GAME_TYPE ?
                                <div className="LeftButtonsContainer">
                                    <SideButton action={goBack} icon={<BiArrowBack />} side={"Left"} type={EnumButtonType.RETURN} title={"Go back"} />
                                </div>
                                    : <></>
                        }

                </Container>
            </>

}

export default ChoicesDisplayer;