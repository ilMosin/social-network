const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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

const postReducer =(state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                post: 7,
                message: state.newPostText,
                likesCount: 13
            };
            state.posts.push(newPost);
            state.newPostText = ' ';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator =()=> ({ type: ADD_POST });
export const updateNewPostTextActionCreator =(value)=> ({ type: UPDATE_NEW_POST_TEXT, newText: value })

export default postReducer;