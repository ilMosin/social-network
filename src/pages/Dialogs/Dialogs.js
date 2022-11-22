import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props)=>{

    let messageElements = props.messagesPage.messages.map(item => <Message key={item.id} message={item.message}/>)
    let dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}/>)
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let handleOnChangeMessages = () => {
        const text = newMessageElement.current.value;
        props.updateMessages(text);
        console.log('OnChange textarea', text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessageElement}
                          value={props.newMessageText}
                          onChange={handleOnChangeMessages}/>
                <button onClick={sendMessage} >Send Message</button>
            </div>
        </div>
    );
}

export default Dialogs;
