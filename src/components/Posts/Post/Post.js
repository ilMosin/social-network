import React from "react";
import style from './Post.module.css'

const Post =(props)=>{
    const { posts } = props;
    return (

        <div className={style.item}>
            <span>{props.message}</span>
            <span>{props.likesCount}</span>
        </div>
    );
}

export default Post;
