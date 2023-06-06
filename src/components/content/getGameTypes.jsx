import EnumGameType from "./EnumGameType";

const getGameTypes = () => {

    var k = 0;
    
    return [
        {
            id: k++,
            type: EnumGameType.BULLET,
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
                    duration: 2,
                    additionalTime: 1,
                }
            ]
        },
        {
            id: k++,
            type: EnumGameType.BLITZ,
            times: [
                {
                    id: 0,
                    duration: 3,
                    additionalTime: 0,
                },
                {
                    id: 1,
                    duration: 3,
                    additionalTime: 2
                },
                {
                    id: 2,
                    duration: 5,
                    additionalTime: 0,
                },
                {
                    id: 3,
                    duration: 5,
                    additionalTime: 5,
                }
            ]
        },
        {
            id: k++,
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
                },
                {
                    id: 2,
                    duration: 15,
                    additionalTime: 0
                },
                {
                    id: 3,
                    duration: 15,
                    additionalTime: 10
                }
            ]
        },
        {
            id: k++,
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
                },
                {
                    id: 2,
                    duration: 60,
                    additionalTime: 0
                },
                {
                    id: 3,
                    duration: 60,
                    additionalTime: 10
                }
            ]
        },
        {
            id: k++,
            type: EnumGameType.CUSTOM
        }
    ]
}

export default getGameTypes;