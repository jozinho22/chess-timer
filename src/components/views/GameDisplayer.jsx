import React from "react";
import { Container, Button } from "react-bootstrap";
import Timer from "../Timer";
import {RxPlay} from 'react-icons/rx';
import {GiCrossMark} from 'react-icons/gi';
import InvertButton from "../InvertButton";

import {BiArrowBack} from 'react-icons/bi';
import {AiOutlinePause} from 'react-icons/ai';
import {RxUpdate} from 'react-icons/rx';
import EnumButtonType from "../content/EnumButtonType";
import SideButton from "../SideButton";

const GameDisplayer = ( {gameTypes, user, setUser, setInGame} ) => {

    const [running, setRunning] = React.useState(false);
    const [endGame, setEndGame] = React.useState(false);
    const [reInit, setReInit] = React.useState(false);
    const [turn, setTurn] = React.useState(0);
    const [inPause, setInPause] = React.useState(false);

    const [loser, setLoser] = React.useState({});

    const [inverted, setInverted] = React.useState(false);

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
            setEndGame(true)
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
        setReInit(true);
        setInPause(false);
        setTurn(0)
        setLoser({})
        setAdditionalTime(gameTypes[user.choices[0]].times[user.choices[1]].additionalTime);
        var duration = 0;
        duration = gameTypes[user.choices[0]].times[user.choices[1]].duration*60;
        if(user.choices[0] === gameTypes[gameTypes.length - 1].id) {
            duration += gameTypes[user.choices[0]].times[user.choices[1]].durationInSeconds;
        }
        if(process.env.NODE_ENV === 'development') {
            setAdditionalTime(1) 
            duration = 3;
        }
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
        u.choices.pop();
        u.choice = u.choices[0];
        setUser(u);
    }

    const playAgain = () => {
        init();
    }

    const pause = () => {
        setInPause(!inPause);
    }

    const stay = () => {
        setEndGame(false);
        setReInit(false)
    }

    const invert = () => {
        setInverted(!inverted);
    }
console.log("inPause", inPause)
 /*    console.log("running", running)
    console.log("endGame", endGame)
    console.log("reInit", reInit) */
/*     console.log("loser", endGame)
    console.log("turn", turn) */
    return  <>
                <Container className={`GameDisplayerContainer ${endGame ? "Blur" : ""} ${inPause ? "SoftBlur" : ""}`} >
                    <Container className={`CampsContainer ${inverted ? "Inverted" : ""}`} >
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
                                    running={running}
                                    setRunning={setRunning} 
                                    turn={!turn} 
                                    additionalTime={additionalTime}
                                    inPause={inPause} />
                            </Button>
                            <Container className="TeamCampContainer">
                                <div className={`${turn === 0 ? "Focus" : ""}`}>
                                    <p>Whites</p>
                                </div>
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
                                    running={running}
                                    setRunning={setRunning}
                                    turn={turn} 
                                    additionalTime={additionalTime}
                                    inPause={inPause} />
                            </Button>
                            <Container className="TeamCampContainer">
                                <div className={`${turn === 1 ? "Focus" : ""}`}>
                                    <p>Blacks</p>
                                </div>
                            </Container>
                        </Container>
                    </Container>
                    <InvertButton 
                        invert={invert} 
                        running={running}
                        endGame={endGame}
                        reInit={reInit}
                    />   
                    <Container className="LeftButtonsContainer">
                        <SideButton action={goBack} icon={<BiArrowBack />} type={EnumButtonType.RETURN} title={"Go back"} />
                     </Container>
                     <Container className="RightButtonsContainer">
                        <SideButton action={playAgain} icon={<RxUpdate />} type={EnumButtonType.PLAY_AGAIN} title={"Play again"} />
                        <SideButton action={pause} icon={<AiOutlinePause />} type={EnumButtonType.PAUSE} title={"Pause"} /> 
                    </Container>
                </Container>
                {
                    inPause ?
                        <Container className="InPause">
                            <AiOutlinePause onClick={pause}/>
                        </Container>
                            : <></>
                }
                <Container className="EndGameContainer">
                {
                    endGame ? 
                        <>
                            <div className={`WinningBox ${loser === 0 ? "Blacks" : "Whites"}`}>
                                {loser === 0 ? 
                                    "Blacks won on time..." : 
                                        loser === 1 ? "Whites won on time..." 
                                            : ""
                                }
                            </div>
                            <Button className="PlayAgainEndGameButton" onClick={playAgain}>
                                Play Again
                                <RxPlay />
                            </Button>
                            <Button className="StayEndGameButton" onClick={stay}>
                                Stay
                                <GiCrossMark />
                            </Button>
                        </>
                            :   <></>
                }
                
                </Container>
            </>
            
                

}

export default GameDisplayer;