import style from './DIalogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../store/Reducers/MessageReducer";
import React from "react";

const Dialogs = (props)=>{
    const {messages, dialogs} = props;

    let messageElements = messages.map(item => <Message key={item.id} message={item.message}/>)
    let dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}/>)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
        newMessageElement.current.value ='';
    }

    let handleOnChangeMessages = (e) => {
        const value = e.target.value;
        let action = updateNewMessageTextActionCreator(value);
        props.dispatch(action);
        console.log('OnChange textarea', value)
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
