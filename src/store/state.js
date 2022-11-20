import { getRandomInt } from '../utils'

export const state = {
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
            {id: 4, message: 'How your React?'}
        ]
    },
    postPage: {
        posts:[
            {post: 1, message: "it\`s my first post", likesCount: 11},
            {post: 2, message: "congrats me", likesCount: 16},
            {post: 3, message: "it\`s awesome", likesCount: 13}
        ]
    }
}

export let addPost = (postMessage) =>{
    const newPost = {
        post: getRandomInt(100),
        message: postMessage,
        likesCount: getRandomInt(10)
    };

    state.postPage.posts.push(newPost);

}
