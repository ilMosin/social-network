import React from "react";
import Posts from "../../components/Posts/Posts";


const PostPage = (props)=>{
    const { posts, newPostText } = props;

    return (
        <div>
            <Posts posts={posts}
                   newPostText={newPostText}
                   dispatch={props.dispatch}
            />
        </div>
    );
}
export default PostPage;
