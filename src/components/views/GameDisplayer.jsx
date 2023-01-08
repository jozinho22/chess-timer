import React from "react";
import { Container, Button } from "react-bootstrap";
import Timer from "../Timer";
import EnumViewTypes from "../content/EnumViewTypes";

const GameDisplayer = ( {gameTypes, user, setViewType} ) => {

    const [running, setRunning] = React.useState(false);
    const [endTimer, setEndTimer] = React.useState(false);

    const [turn, setTurn] = React.useState(0);
    const [whiteMinutes, setWhiteMinutes] = React.useState(0);
    const [whiteSeconds, setWhiteSeconds] =  React.useState(0);
    const [blackMinutes, setBlackMinutes] = React.useState(0);
    const [blackSeconds, setBlackSeconds] =  React.useState(0);
    var additionalTime = 0;

    React.useEffect(() => {
        additionalTime = gameTypes[user.choices[0]].times[user.choices[1]].additionalTime;
        var duration = gameTypes[user.choices[0]].times[user.choices[1]].duration;
        duration *= 60;
        initTimer(0, duration);
        initTimer(1, duration);
    }, [])

    function doProcess() {
        setTurn(turn === 0 ? 1 : 0);
        setRunning(true);
    }

    function initTimer(team, duration) {
        var m = 0;
        var s = 0;
        if(duration < 59) {
            m = 0; 
        } else {
            m = Math.floor(duration / 60);
        } 
        s = duration % 60;

        console.log(m)
        console.log(s)
        if(team === 0) {
            setWhiteMinutes(m)
            setWhiteSeconds(s)
        } else {
            setBlackMinutes(m)
            setBlackSeconds(s)
        }
    }

    /* const goBack = () => {
        setViewType(EnumViewTypes.GAME_TYPE)
        user.choices= [];
    } */

    return  <>
                <Container className="GameDisplayerContainer">
                    <Container className="WhitesContainer">
                        <Button 
                            className={`GameDisplayerButton ${turn === 1 ? "Filter" : ""}`}
                            onClick={doProcess} 
                            disabled={turn === 1} >
                            <Timer
                                minutes={whiteMinutes}
                                setMinutes={setWhiteMinutes}
                                seconds={whiteSeconds}
                                setSeconds={setWhiteSeconds}
                                setRunning={setRunning} 
                                inPause={!running ? 1 : turn} 
                                additionalTime={additionalTime} 
                                setEndTimer={setEndTimer} />
                        </Button>
                        <Container className="TeamInfosContainer">
                            <p className={`${turn === 0 ? "Focus" : ""}`}>Whites</p>
                        </Container>
                        
                    </Container>
                    <Container className="BlacksContainer">
                        <Button 
                            className={`GameDisplayerButton ${turn === 0 ? "Filter" : ""}`}
                            onClick={doProcess} 
                            disabled={turn === 0} >
                            <Timer
                                minutes={blackMinutes}
                                setMinutes={setBlackMinutes}
                                seconds={blackSeconds}
                                setSeconds={setBlackSeconds}
                                setRunning={setRunning}
                                inPause={!running ? 1 : !turn} 
                                additionalTime={additionalTime} 
                                setEndTimer={setEndTimer} />
                        </Button>
                        <Container className="TeamInfosContainer">
                            <p className={`${turn === 1 ? "Focus" : ""}`}>Blacks</p>
                        </Container>
                    </Container>
                </Container>
                <Container className="InfosContainer">
                    <p>{
                        !running ? 
                            "Whites to move !" 
                                : endTimer ? <></>
                                    : additionalTime > 0 ? "Additional time : " + additionalTime + "s" 
                                        : ""
                        }
                    </p>
                </Container>
                {/* <Button onClick={goBack}>Retour</Button> */}
            </>
}

export default GameDisplayer;