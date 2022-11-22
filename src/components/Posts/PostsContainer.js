import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../store/Reducers/postReducer";
import Posts from "./Posts";
import storeContext from '../../storeContext'


const PostsContainer = () => {

    return <storeContext.Consumer>
        { store => {
            let state = store.getState();

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }

            let handleOnChangePosts = (text) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);
            }
            return <Posts updateNewPostText={handleOnChangePosts}
                          addPost={addPost}
                          newPostText={state.postPage.newPostText}
                          posts={state.postPage.posts}
            />;
        }
    }
    </storeContext.Consumer>

};

export default PostsContainer;
