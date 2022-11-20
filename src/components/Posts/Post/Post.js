import React from "react";
import style from './Post.module.css'

const Post =(props)=>{
    return (

        <div className={style.item}>
            {props.message}
            <span>Like</span>
            <span>{props.likeCount}</span>
        </div>
    );
}

export default Post;