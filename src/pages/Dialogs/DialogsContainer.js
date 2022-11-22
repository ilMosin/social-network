import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../store/Reducers/MessageReducer";
import React from "react";
import Dialogs from "./Dialogs";
import storeContext from '../../storeContext'

const DialogsContainer = (props) => {

    return (
        <storeContext.Consumer>
            { store => {
                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let handleOnChangeMessages = (text) => {
                    let action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action);
                }
                return <Dialogs sendMessage={sendMessage}
                                updateMessages={handleOnChangeMessages}
                                newMessageText={state.newMessageText}
                                messages={state.messagesPage.messages1}
                />
            }
        }
        </storeContext.Consumer>
    );
}

export default DialogsContainer;
