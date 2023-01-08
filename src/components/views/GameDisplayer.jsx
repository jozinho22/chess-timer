import React from "react";
import { Container, Button } from "react-bootstrap";
import Timer from "../Timer";

const GameDisplayer = ( {gameTypes, user, setUser, setInGame} ) => {

    const [running, setRunning] = React.useState(false);
    const [endGame, setEndGame] = React.useState(false);
    const [loser, setLoser] = React.useState({});

    const [turn, setTurn] = React.useState(0);
    const [whiteMinutes, setWhiteMinutes] = React.useState(0);
    const [whiteSeconds, setWhiteSeconds] =  React.useState(0);
    const [blackMinutes, setBlackMinutes] = React.useState(0);
    const [blackSeconds, setBlackSeconds] =  React.useState(0);
    const [additionalTime, setAdditionalTime] =  React.useState(0);

    React.useEffect(() => {
        var whiteLose = running && whiteMinutes === 0 && whiteSeconds === 0;
        var blackLose = running && blackMinutes === 0 && blackSeconds === 0;
        if(whiteLose || blackLose) {
            setRunning(false)
        }
        if(whiteLose) {
            setLoser(0)
        } else if(blackLose) {
            setLoser(1)
        }
    }, [whiteMinutes, whiteSeconds, blackMinutes, blackSeconds])

    React.useEffect(() => {
        init();
    }, [])

    const init = () => {
        setEndGame(false)
        setRunning(false)
        setTurn(0)
        setLoser({})
        /* setAdditionalTime(gameTypes[user.choices[0]].times[user.choices[1]].additionalTime); */
        setAdditionalTime(1)
        /* var duration = gameTypes[user.choices[0]].times[user.choices[1]].duration;
        duration *= 60; */
        var duration = 3;
        initTimer(0, duration);
        initTimer(1, duration);
    }

    function doProcess() {
        setTurn(turn === 0 ? 1 : 0);
        setRunning(!endGame);
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
        if(team === 0) {
            setWhiteMinutes(m)
            setWhiteSeconds(s)
        } else {
            setBlackMinutes(m)
            setBlackSeconds(s)
        }
    }

    const goBack = () => {
        setInGame(false);
        var u = {...user};
        console.log(u)
        u.choices.pop();
        u.choice = u.choices[0];
        setUser(u);
    }

    const playAgain = () => {
        init();
    }

    return  <>
                <Container className="GameDisplayerContainer">
                    <Container className="WhitesContainer">
                        <Button 
                            className={`GameDisplayerButton ${loser === 0 ? "Lose" : turn === 1 ? "Filter" : "" }`}
                            onClick={doProcess} 
                            disabled={!isNaN(loser) || turn === 1} >
                            <Timer
                                minutes={whiteMinutes}
                                setMinutes={setWhiteMinutes}
                                seconds={whiteSeconds}
                                setSeconds={setWhiteSeconds}
                                setRunning={setRunning} 
                                inPause={!running ? 1 : turn} 
                                additionalTime={additionalTime} />
                        </Button>
                        <Container className="TeamCampContainer">
                            <p className={`${turn === 0 ? "Focus" : ""}`}>Whites</p>
                        </Container>
                        
                    </Container>
                    <Container className="BlacksContainer">
                        <Button 
                            className={`GameDisplayerButton ${loser === 1 ? "Lose" : turn === 0 ? "Filter" : "" }`}
                            onClick={doProcess} 
                            disabled={!isNaN(loser) || turn === 0} >
                            <Timer
                                minutes={blackMinutes}
                                setMinutes={setBlackMinutes}
                                seconds={blackSeconds}
                                setSeconds={setBlackSeconds}
                                setRunning={setRunning}
                                inPause={!running ? 1 : !turn} 
                                additionalTime={additionalTime} />
                        </Button>
                        <Container className="TeamCampContainer">
                            <p className={`${turn === 1 ? "Focus" : ""}`}>Blacks</p>
                        </Container>
                    </Container>
                </Container>
                <Container className="InfosContainer">
                    <p>{
                            loser === 0 ? "Blacks win..." 
                                :   loser === 1 ?  "Whites win..."
                                    :""
                        }
                    </p>
                </Container>
                <Container className="SideButtonsContainer">
                    <Button className="ReturnButton" onClick={goBack}>Go back</Button>
                    <Button className="PlayAgainButton" onClick={playAgain}>Play Again</Button>
                </Container>
            </>
}

export default GameDisplayer;