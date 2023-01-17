import React from 'react';

const Timer = ({time, setTime, running, setRunning, turn, additionalTime, inPause}) => {

    function addTime(additionalTime) {
        if(additionalTime + time[1] > 59) {
            let m = time[0] + 1;
            let s = time[1] - (60 - additionalTime);
            /* setMinutes(minutes + 1)
            setSeconds(seconds - (60 - additionalTime)) */
            setTime([m, s])
        } else {
            /* setSeconds(seconds + additionalTime) */
            setTime([time[0], time[1] + additionalTime])
        }
    }

    React.useEffect(() => {
        if(!turn) {
            if(running) {
                if(additionalTime > 0) {
                    addTime(additionalTime)
                }
            }
        }
    }, [!turn])

    React.useEffect(() => {

        if(turn && running && !inPause) {

            let myInterval = setInterval(() => {
                
                if (time[1] > 0) {
                    /* setSeconds(seconds - 1); */
                    setTime([time[0], time[1] - 1]);
                }
                if (time[1] === 0) {
                    if (time[0] === 0) {
                        setRunning(false);
                        clearInterval(myInterval);
                    } else {
                        /* setMinutes(minutes - 1);
                        setSeconds(59); */
                        setTime([time[0] - 1, 59]);
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
            { time[0] === 0 && time[1] === 0 ? 
                    <p>0 : 00</p> :
                        <>
                            <p> {time[0]} : {time[1] < 10 ?  
                                                `0${time[1]}` : 
                                                    time[1]}
                            </p> 
                        </>
            }
        </div>
    )
}

export default Timer;