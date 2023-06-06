import React from "react";
import ChoicesDisplayer from "./views/ChoicesDisplayer";
import GameDisplayer from "./views/GameDisplayer";
import getGameTypes from './content/getGameTypes';

const AppManager = () => {

    const [gameTypes, setGameTypes] = React.useState(getGameTypes());
    const [user, setUser] = React.useState({});

    const [inGame, setInGame] = React.useState(false);
    const [viewType, setViewType] = React.useState("GAME_TYPE");

    return  <>
                {
                    !inGame ?

                        <ChoicesDisplayer 
                            user={user}
                            setUser={setUser}
                            gameTypes={gameTypes}
                            setGameTypes={setGameTypes}
                            viewType={viewType}
                            setViewType={setViewType}
                            setInGame={setInGame} />
                            
                                :   <GameDisplayer 
                                        gameTypes={gameTypes}
                                        user={user}
                                        setUser={setUser}
                                        setInGame={setInGame} />
                                
                }   
                
            </>

}

export default AppManager;