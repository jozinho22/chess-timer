const getMessagesOfCustomInput = () => {
    
    var i = 0;
    return [
        {
            id: i++,
            text: "It's must be numbers please"
        },
        {
            id: i++,
            text: "You must choose at least 1 minutes"
        }
    ]
}

export default getMessagesOfCustomInput;