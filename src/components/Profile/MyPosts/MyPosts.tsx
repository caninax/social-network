import React, {ChangeEvent, TextareaHTMLAttributes, useRef} from 'react';

import classes from './MyPosts.module.css';

import {Post} from './Post/Post';
import {
    addPostActionCreator,
    AddPostActionType,
    PostType,
    updateNewPostTextActionCreator,
    UpdateNewPostTextActionType
} from "../../../redux/state";

type PropsType = {
    postsData: Array<PostType>;
    newPostText: string;
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}


export const MyPosts = (props: PropsType) => {
    const {postsData, newPostText, dispatch} = props;

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const onAddPost = (): void => {
        const text: any = newPostElement.current;
        const postMessage = text.value;
        dispatch(addPostActionCreator(postMessage));
        dispatch(updateNewPostTextActionCreator(''));
    };

    const onPostChange = (): void => {
        const text: any = newPostElement.current;
        dispatch(updateNewPostTextActionCreator(text.value));
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea name="" id="" ref={newPostElement} value={newPostText}
                               onChange={onPostChange}></textarea></div>
                <div>
                    <button type={'button'} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                    postsData.map(({id, message, like}) => <Post
                            id={id}
                            message={message}
                            like={like}
                        />
                    )
                }
            </div>
        </div>
    )
};
