import style from "../DIalogs.module.css";

const Message =(props)=>{

    return (
        <>
            <div className={style.messagesWrapper}>{props.message}</div>
        </>
    );
}

export default Message;