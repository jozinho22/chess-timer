import EnumGameType from "./EnumGameType";

const getGameTypes = () => {
    
    return [
        {
            id: 0,
            type: EnumGameType.BLITZ,
            times: [
                {
                    id: 0,
                    duration: 1,
                    additionalTime: 0,
                },
                {
                    id: 1,
                    duration: 1,
                    additionalTime: 1
                },
                {
                    id: 2,
                    duration: 3,
                    additionalTime: 0,
                },
                {
                    id: 3,
                    duration: 3,
                    additionalTime: 2
                }
            ]
        },
        {
            id: 1,
            type: EnumGameType.RAPID,
            times: [
                {
                    id: 0,
                    duration: 10,
                    additionalTime: 0
                },
                {
                    id: 1,
                    duration: 10,
                    additionalTime: 5
                }
            ]
        },
        {
            id: 2,
            type: EnumGameType.LONG,
            times: [
                {
                    id: 0,
                    duration: 30,
                    additionalTime: 0
                },
                {
                    id: 1,
                    duration: 30,
                    additionalTime: 10
                }
            ]
        },
        {
            id: 3,
            type: EnumGameType.CUSTOM
        }
    ]
}

export default getGameTypes;