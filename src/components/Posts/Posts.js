import React from "react";
import Post from "./Post/Post";
import style from './Posts.module.css'

const Posts = (props) => {

    let postElements = props.posts.map(post => <Post key={post.post} message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let handleOnChangePosts = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        console.log('OnChange textarea', text)
    }

    return (
        <div className={style.posts}>
            My Posts
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={handleOnChangePosts}/>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            {postElements}
        </div>
    );
};

export default Posts;
