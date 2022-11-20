import { useState } from "react";

import Post from "./Post/Post";
import style from './Posts.module.css'

const Posts = ({ posts }) => {
    const { id, message, likesCount } = posts;

    const [newPostMessage, setNewPostMessage] = useState('')

    const addPost =()=>{
        alert(newPostMessage);
    }

    const handleOnChange = (e) => {
        const value = e.target.value;

        console.log('OnChange textarea', value )
        setNewPostMessage(value)
    }

    return (
            <div className={style.posts}>
                My Posts
                <div>
                    <textarea onChange={handleOnChange} />
                    <button onClick={addPost}>Add Post</button>
                </div>
                {posts.map(post => <Post key={id} message={message}  likesCount={likesCount} />)}
            </div>
    );
}

export default Posts;
