import style from './DIalogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ dialogs, messages })=>{

    return (
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    { dialogs.map( dialog => <DialogItem key ={dialog.id} name={dialog.name} id={dialog.id} />) }
                </div>
                <div className={style.messages}>
                    { messages.map( item => <Message  key ={item.id} id={item.id} message={item.message}/>) }
                    <div>
                    hi hih ih hihihihihi
                    </div>
                </div>
            </div>
    );
}

export default Dialogs;
