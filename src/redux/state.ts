import {rerenderEntireTree} from "../render";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const ADD_POST: 'ADD-POST' = 'ADD-POST';
const UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT' = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY: 'UPDATE-NEW-MESSAGE-BODY' = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE: 'SEND-MESSAGE' = 'SEND-MESSAGE';

export type PostType = {
    id: number
    message: string
    like: number
}
export type DialogItemType = {
    name: string
    id: number
}

export type MessageType = {
    message: string
    id: number
}

export type ProfilePageType = {
    postsData: Array<PostType>;
    newPostText: string;
}

export type sidebar = {}

export type DialogsPageType = {
    dialogsData: Array<DialogItemType>;
    messagesData: Array<MessageType>;
    newMessageBody: string;
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebar
}
// export const state: RootStateType = {
//     profilePage: {
//         postsData: [
//             {id: 1, message: 'Hi', like: 10},
//             {id: 2, message: 'How are you?', like: 12},
//             {id: 3, message: 'Fine', like: 12},
//             {id: 4, message: 'Yo', like: 12},
//             {id: 5, message: 'Yo', like: 12},
//             {id: 6, message: 'Yo', like: 12}
//         ],
//         newPostText: 'it-kamasutra'
//     },
//     dialogsPage: {
//         dialogsData: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valera'}
//         ],
//         messagesData: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'Fine'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'Yo'},
//             {id: 6, message: 'Yo'}
//         ]
//     },
//     sidebar: {}
// };

export type StoreType = {
    _state: RootStateType;
    _addPost: (postMessage: string) => void;
    _updateNewPostText: (newText: string) => void;
    _updateNewMessageBody: (message: string) => void;
    _sendMessage: () => void;
    getState: () => RootStateType;
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBody | SendMessageType) => void
}

export type AddPostActionType = {
    type: "ADD-POST";
    postMessage: string;
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT";
    newText: string;
}
export type UpdateNewMessageBody = {
    type: "UPDATE-NEW-MESSAGE-BODY";
    body: string;
}

export type SendMessageType = {
    type: 'SEND-MESSAGE';
}

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi', like: 10},
                {id: 2, message: 'How are you?', like: 12},
                {id: 3, message: 'Fine', like: 12},
                {id: 4, message: 'Yo', like: 12},
                {id: 5, message: 'Yo', like: 12},
                {id: 6, message: 'Yo', like: 12}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Fine'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _addPost(postMessage) {
        const newPost: PostType = {
            id: 7,
            message: postMessage,
            like: 0
        };
        this._state.profilePage.postsData.push(newPost);
        rerenderEntireTree(this);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        rerenderEntireTree(this);
    },
    _updateNewMessageBody(message) {
        this._state.dialogsPage.newMessageBody = message;
        rerenderEntireTree(this);
    },
    _sendMessage() {
        const body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messagesData.push({id: 6, message: body});
        rerenderEntireTree(this);
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        // if (action.type === ADD_POST) {
        //     this._addPost(action.postMessage);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._updateNewPostText(action.newText);
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._updateNewMessageBody(action.body);
        // } else if (action.type === SEND_MESSAGE) {
        //     this._sendMessage();
        // }
        switch (action.type) {
            case ADD_POST:
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage = profileReducer(this._state.profilePage, action);
                break;
            case UPDATE_NEW_MESSAGE_BODY:
            case SEND_MESSAGE:
                this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
                break;
        }
        rerenderEntireTree(this);
        // this._state.sidebar = sidebarReducer (this._state.sidebar)
    }

};


export const addPostActionCreator = (postMessage: string): AddPostActionType => {
    return {
        type: ADD_POST,
        postMessage,
    }
};

export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText,
    }
};

export const sendMessageCreator = (): SendMessageType => {
    return {
        type: SEND_MESSAGE
    }
};
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBody => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body
    }
};
