import React from "react";
import classes from './DialogItem.module.css';

type MessageType = {
    message: string
    id: number
}
export const Message = (props: MessageType) => {
    const {message} = props;
    return (
        <div className={message}>{message}</div>
    )
};
