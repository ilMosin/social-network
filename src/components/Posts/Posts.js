import React from "react";
import Post from "./Post/Post";
import style from './Posts.module.css'
import {type} from "@testing-library/user-event/dist/type";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../store/Reducers/postReducer";

const Posts = (props) => {
    const {posts} = props;

    let postElements = posts.map(post => <Post key={post.post} message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = '';
    }

    let handleOnChangePosts = (e) => {
        const value = e.target.value;
        let action = updateNewPostTextActionCreator(value);
        props.dispatch(action);
        console.log('OnChange textarea', value)
    }

    return (
        <div className={style.posts}>
            My Posts
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={handleOnChangePosts}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postElements}
        </div>
    );
};

export default Posts;
