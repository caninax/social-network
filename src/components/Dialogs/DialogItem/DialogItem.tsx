import React from "react";

import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}
const {dialogs, dialogsItem, dialog, messages, message, active} = classes;
export const DialogItem = (props: DialogItemType) => {
    const {name, id} = props;
    const PATH = '/dialogs/';
    return (
        <div className={dialog + ' ' + active}>
            <NavLink to={`${PATH}${id}`}>{name}</NavLink>
        </div>
    )
};

