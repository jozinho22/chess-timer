import React from "react";
import ChoicesDisplayer from "./views/ChoicesDisplayer";
import GameDisplayer from "./views/GameDisplayer";

const AppManager = ( {user, setUser, gameTypes, setGameTypes} ) => {

    const [inGame, setInGame] = React.useState(false);
    const [viewType, setViewType] = React.useState("GAME_TYPE");

    return  <>
                {
                    inGame ?
                        <GameDisplayer 
                            gameTypes={gameTypes}
                            user={user}
                            setUser={setUser}
                            setInGame={setInGame} />
                            :  <ChoicesDisplayer 
                                    user={user}
                                    setUser={setUser}
                                    gameTypes={gameTypes}
                                    setGameTypes={setGameTypes}
                                    viewType={viewType}
                                    setViewType={setViewType}
                                    setInGame={setInGame} />
                                
                }   
                
            </>

}

export default AppManager;