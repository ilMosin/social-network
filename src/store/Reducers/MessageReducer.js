const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Paul'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Jessica'}
    ],
    messages1: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'How your React?'},
        {id:5, message: 'awesome!'}
    ],
    newMessageText: " enter your message"
}

const messageReducer =(state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = ' ';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator =()=> ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator =(value)=> ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: value })

export default messageReducer;
