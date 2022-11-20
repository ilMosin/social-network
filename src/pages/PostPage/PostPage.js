import React from "react";
import Posts from "../../components/Posts/Posts";
const PostPage = (props)=>{
    const { posts } = props;

    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
}
export default PostPage;
