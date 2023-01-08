const getGameTypes = () => {

    var n = 0;
    var m = 0;

    return [
        {
            id: 0,
            type: "blitz",
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
            type: "rapid",
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
            type: "long",
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
        }
    ]
}

export default getGameTypes;