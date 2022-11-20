import postReducer from "./Reducers/postReducer";
import messageReducer from "./Reducers/MessageReducer";

let store = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Paul'},
                {id: 2, name: 'John'},
                {id: 3, name: 'Jessica'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Fine'},
                {id: 4, message: 'How your React?'},
                {id:5, message: 'awesome!'}
            ],
            newMessageText: " enter your message"
        },
        postPage: {
            posts: [
                {post: 1, message: "it\`s my first post", likesCount: 11},
                {post: 2, message: "congrats me", likesCount: 16},
                {post: 3, message: "it\`s awesome", likesCount: 13},
                {post: 4, message: "how are u project?", likesCount: 1},
                {post: 5, message: "normal, I work on it", likesCount: 2},
                {post: 6, message: "it\`s awesome", likesCount: 3},
            ],
            newPostText: "it-kamasutra",
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.postPage = postReducer(this._state.postPage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;