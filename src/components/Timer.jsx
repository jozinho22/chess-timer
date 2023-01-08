import React from 'react';

const Timer = ({minutes, setMinutes, seconds, setSeconds, running, setRunning, turn, additionalTime}) => {

    const [beginning, setBeginning] = React.useState(true);

    function addTime(additionalTime) {
        if(additionalTime + seconds > 59) {
            setMinutes(minutes + 1)
            setSeconds(seconds - (60 - additionalTime))
        } else {
            setSeconds(seconds + additionalTime)
        }
    }

    React.useEffect(() => {
        console.log("useEff")
        console.log(additionalTime)
        if(!turn) {
            if(!beginning) {
                if(additionalTime > 0) {
                    addTime(additionalTime)
                }
            } else {
                setBeginning(false)
            }
        }
    }, [!turn])

    React.useEffect(() => {

        if(turn && running) {

            let myInterval = setInterval(() => {
                
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        setRunning(false);
                        setSeconds(seconds);
                        clearInterval(myInterval);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000);

            return () => {
                clearInterval(myInterval);
            };
        }
        
    });

    return (
        <div className="Timer">
            { minutes === 0 && seconds === 0 ? 
                    <p>0 : 00</p> :
                        <>
                            <p> {minutes} : {seconds < 10 ?  
                                                `0${seconds}` : 
                                                    seconds}
                            </p> 
                        </>
            }
        </div>
    )
}

export default Timer;