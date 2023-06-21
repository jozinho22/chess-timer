import React from 'react';
import { Container } from 'react-bootstrap';
import EnumViewType from "../content/EnumViewType";
import Option from '../Option';
import CustomInput from '../CustomInput';
import SideButton from '../SideButton';
import { ChevronLeft } from 'react-bootstrap-icons';
import EnumButtonType from '../content/EnumButtonType';
import EnumGameType from '../content/EnumGameType';

const ChoicesDisplayer = ( {user, setUser, viewType, gameTypes, setGameTypes, setViewType, setInGame} ) => {

    const [customMinutes, setCustomMinutes] = React.useState(10);
    const [customSeconds, setCustomSeconds] = React.useState(0);
    const [additionalTime, setAdditionalTime] = React.useState(5);
    const [customGameOK, setCustomGameOK] = React.useState(false);

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
            return times[0].times;
        }
    }

    const processCustomGame = () => {
        if(customGameOK) {
            var gamesTypesSlice = [...gameTypes];
            gamesTypesSlice[gamesTypesSlice.length - 1].times = [
                {
                    id: 0,
                    duration: parseInt(customMinutes),
                    durationInSeconds: parseInt(customSeconds === "" ? 0 : customSeconds),
                    additionalTime: parseInt(additionalTime === "" ? 0 : additionalTime)
                }
            ]

            setGameTypes(gamesTypesSlice);
            var u = {...user};
            u.choices.push(0);
            setUser(u);
            next();
        }
    }

    return  <>
                <Container className="ChoicesDisplayerContainer">
                    
                    <div className="ChoicesTitle">
                        {
                            viewType === EnumViewType.GAME_TYPE ?
                                <>
                                    <h1>Pendule pour les joueurs d'échecs</h1>
                                    <h2>Type de jeu </h2> 
                                </>
                                    :   viewType === EnumViewType.GAME_DURATION ? 
                                            <h2>Durée de jeu </h2>
                                                :   <></>     
                        }
                    </div>
                    <div className="ChoicesContainer">
                        {
                            user.choices && user.choices[0] === gameTypes.map(g => g.type).indexOf(EnumGameType.CUSTOM) && viewType === EnumViewType.GAME_DURATION ?
                                
                                <CustomInput 
                                    customMinutes={customMinutes}
                                    setCustomMinutes={setCustomMinutes} 
                                    customSeconds={customSeconds}
                                    setCustomSeconds={setCustomSeconds}
                                    additionalTime={additionalTime}
                                    setAdditionalTime={setAdditionalTime}
                                    processCustomGame={processCustomGame} 
                                    setCustomGameOK={setCustomGameOK}/>

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
                                <Container className="LeftButtonsContainer">
                                    <SideButton action={goBack} icon={<ChevronLeft />} type={EnumButtonType.RETURN} title={"Go back"} />
                                </Container>
                                    : <></>
                        }

                </Container>
            </>

}

export default ChoicesDisplayer;