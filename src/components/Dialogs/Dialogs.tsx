import React, {ChangeEvent} from 'react';

import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";
import {store} from "../../redux/state";

type PropsType = {
    dialogsPage: DialogsPageType;
}
const {dialogs, dialogsItem, dialog, messages, message, active} = classes;
export const Dialogs = (props: PropsType) => {

    const {dialogsPage} = props;
    const {dialogsData, messagesData, newMessageBody} = dialogsPage;

    const onSendMessageClick = (): void => {
        store.dispatch(sendMessageCreator());
    };

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        const body: string = e.target.value;
        store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={dialogs}>
            <div className={dialogsItem}>
                {
                    dialogsData
                        .map(({id, name}) => <DialogItem
                                id={id}
                                name={name}
                            />
                        )
                }
            </div>
            <div className={messages}>
                {
                    messagesData
                        .map(({id, message}) => <Message
                                id={id}
                                message={message}
                            />
                        )
                }
                <div>
                    <div><textarea onChange={onNewMessageChange} name="" id="" value={newMessageBody}
                                   placeholder={'hello'}></textarea></div>
                    <div>
                        <button type={'button'} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};


